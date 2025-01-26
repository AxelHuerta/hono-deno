type Sofipo = {
  name: string;
  year: number;
  category: number;
  month: number;
  value: number;
  previewValue: number;
  difference: number;
};

export async function getSofiposService() {
  // https://portafolioinfo.cnbv.gob.mx/PortafolioInformacion/ICAP_SOFIPOS_202411.pdf
  const klar: Sofipo = {
    name: "klar",
    year: 2024,
    category: 1,
    month: 11,
    value: 163,
    previewValue: 143,
    difference: 0,
  };

  const nu: Sofipo = {
    name: "nu",
    year: 2024,
    category: 1,
    month: 11,
    value: 245,
    previewValue: 193,
    difference: 0,
  };

  // https://www.fine.com.mx/icap/2024/nov/NOV%202024.pdf
  const finsus: Sofipo = {
    name: "finsus",
    year: 2024,
    category: 1,
    month: 11,
    value: 139.6694,
    previewValue: 140.1723,
    difference: 0,
  };

  // https://sofipos.mx/admin/nicap/pdfs/23_4v7ln.pdf
  const stori: Sofipo = {
    name: "stori",
    year: 2024,
    category: 1,
    month: 11,
    value: 148.7868,
    previewValue: 197.2791,
    difference: 0,
  };

  const supertasas: Sofipo = {
    name: "supertasas",
    year: 2024,
    category: 1,
    month: 11,
    value: 517.4,
    previewValue: 161.84,
    difference: 0,
  };

  klar.difference = klar.value - klar.previewValue;
  nu.difference = nu.value - nu.previewValue;
  finsus.difference = finsus.value - finsus.previewValue;
  stori.difference = stori.value - stori.previewValue;
  supertasas.difference = supertasas.value - supertasas.previewValue;

  return [klar, nu, finsus, stori, supertasas];
}
