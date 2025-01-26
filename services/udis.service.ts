import { launch } from "jsr:@astral/astral";

export default async function getUdisService() {
  let udis;
  // Launch the browser
  const browser = await launch();

  // Open a new page
  const page = await browser.newPage(
    "https://www.dof.gob.mx/indicadores_detalle.php?cod_tipo_indicador=159&dfecha=04%2F01%2F2025&hfecha=04%2F01%2F2025#gsc.tab=0"
  );

  const udisElement = await page.$$(
    'p[style="display:block;float:left;width:45%; font-size: 10pt;"]'
  );

  // TODO: refactor this to use a more robust method to get the udis value
  udis = await udisElement[0].evaluate((el: any) => el.textContent);
  udis = udis.split("  ")[1];
  udis = parseFloat(udis);

  // Close the browser
  await browser.close();

  return {
    udis: udis,
  };
}
