const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+__dirname+'/proposta.html');await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:'../proposta_comercial_fomi_pizzas_v2.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});await b.close();})();
