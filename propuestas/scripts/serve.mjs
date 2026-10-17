import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
import {fileURLToPath} from 'node:url';
const root = fileURLToPath(new URL('../../', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.webp':'image/webp'};
export const server = http.createServer(async(req,res)=>{
  try {
    const path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const file = resolve(root, '.' + path + (path.endsWith('/')?'index.html':''));
    if (!file.startsWith(root.endsWith(sep)?root:root+sep)) {res.writeHead(403).end();return;}
    const content = await readFile(file);
    res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream','Cache-Control':'no-store'}).end(content);
  }catch{res.writeHead(404).end('No encontrado');}
}).listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log(`Prototipo local: http://127.0.0.1:${process.env.PORT || 4173}/propuestas/`));
