import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const require = createRequire(import.meta.url);
process.env.PORT='4174';
const {server} = await import('./serve.mjs');
// PLAYWRIGHT_MODULE permite usar una instalación local ya disponible, sin dependencia de producción.
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const browser = await chromium.launch({headless:true,channel:process.env.BROWSER_CHANNEL || 'msedge'});
const results = [];
try {
 for(const version of ['v2','v1']) {
  for(const width of [320,375,768,1280]) {
   const page = await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
   const errors=[];page.on('pageerror', e=>errors.push(e.message));
   await page.goto(`http://127.0.0.1:4174/propuestas/${version}/`);
   await page.waitForLoadState('networkidle');
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`${version} ${width}: desbordamiento`);
   assert.equal(await page.locator('.service').count(),6);
   assert.equal(await page.locator('[data-slide]:visible').count(),1);
   await page.locator('[data-next]').click();
   assert.equal(await page.locator('[data-counter]').innerText(),'02 / 03');
   await page.locator('[data-prev]').click();
   assert.equal(await page.locator('[data-counter]').innerText(),'01 / 03');
   await page.locator('[data-prev]').click();
   assert.equal(await page.locator('[data-counter]').innerText(),'03 / 03');
   assert.equal(await page.locator('[data-contact][href]').count(),0);
   await page.locator('.floating-whatsapp').focus();
   await page.keyboard.press('Enter');
   assert.match(await page.locator('#contact-status').innerText(),/pendiente/);
   if(width<700){
    await page.locator('.menu-toggle').click();assert.equal(await page.locator('#navigation').isVisible(),true);
    await page.locator('#navigation a').first().focus();await page.keyboard.press('Escape');
    assert.equal(await page.locator('#navigation').isVisible(),false);
    assert.equal(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement),true);
   }
   await page.goto(`http://127.0.0.1:4174/propuestas/${version}/`);
   await page.keyboard.press('Tab');
   assert.equal(await page.locator('.skip').evaluate(el=>el===document.activeElement),true);
   await page.locator('.skip').evaluate(el=>el.blur());
   assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)),true);
   if(width===375||width===1280)await page.screenshot({path:fileURLToPath(new URL(`../${version}/preview-${width}.png`,import.meta.url)),fullPage:true});
   assert.deepEqual(errors,[]);results.push(`${version} ${width}px: sin desborde, carrusel, contactos bloqueados, imágenes y teclado OK`);
   await page.close();
  }
  const page=await browser.newPage({javaScriptEnabled:false,viewport:{width:375,height:900}});
  await page.goto(`http://127.0.0.1:4174/propuestas/${version}/`);
  assert.equal(await page.locator('[data-slide]:visible').count(),3);
  assert.equal(await page.locator('#navigation').isVisible(),true);
  assert.equal(await page.locator('.service').count(),6);
  results.push(`${version}: contenido, navegación y tres promociones disponibles sin JavaScript`);
  await page.close();
 }
 const config=JSON.parse(await readFile(new URL('../assets/contacts.json',import.meta.url),'utf8'));
 const page=await browser.newPage();
 await page.route('**/assets/contacts.json',route=>route.fulfill({json:{...config,validated:true}}));
 await page.goto('http://127.0.0.1:4174/propuestas/v2/');
 await page.waitForLoadState('networkidle');
 assert.equal(await page.locator('[data-contact][href]').count(),3);
 assert.match(await page.locator('.floating-whatsapp').getAttribute('href'),/^https:\/\/wa.me\/573042382609\?text=/);
 assert.equal(await page.locator('[data-contact="instagram"]').getAttribute('href'),'https://www.instagram.com/crespossaladebelleza/');
 results.push('Configuración validada simulada en navegador: enlaces WhatsApp/Instagram correctos, sin abrir canales externos');
 await page.close();
 console.log(results.join('\n'));
 await writeFile(new URL('../VERIFICACION.txt',import.meta.url),results.join('\n')+'\n');
}finally{await browser.close();server.close();}
