type Plazo = {
  permanente: number;
  dia: number;
  semana: number;
  mes: number;
  trimestre: number;
  semestre: number;
  year: number;
  twoYears: number;
};

type Cuenta = {
  nombre: string;
  plazos: Plazo;
};

/**
 * Fetches and processes data from a remote CSV file, transposing the data and converting it into an array of `Cuenta` objects.
 *
 * @returns {Promise<Cuenta[]>} A promise that resolves to an array of `Cuenta` objects.
 *
 * @throws Will log an error to the console if the fetch operation fails.
 */
export default async function getTasas() {
  const data = await fetch("https://datawrapper.dwcdn.net/AqQwN/5/dataset.csv")
    .then((response) => response.text())
    .catch((error) => console.error(error));

  const rows = data ? data.split("\n") : [];
  const tabSeparatedData = rows.map((row) => row.split("\t"));

  // Transpose the matrix
  const transposedData: string[][] = tabSeparatedData[0].map((_, colIndex) =>
    tabSeparatedData.map((row) => row[colIndex])
  );

  const cuentas: Cuenta[] = [];

  for (let i = 1; i < transposedData.length; i++) {
    const cuenta: Cuenta = {
      nombre: transposedData[i][0],
      plazos: {
        permanente: parseFloat(transposedData[i][1].replace("%", "")),
        dia: parseFloat(transposedData[i][2].replace("%", "")),
        semana: parseFloat(transposedData[i][3].replace("%", "")),
        mes: parseFloat(transposedData[i][4].replace("%", "")),
        trimestre: parseFloat(transposedData[i][5].replace("%", "")),
        semestre: parseFloat(transposedData[i][6].replace("%", "")),
        year: parseFloat(transposedData[i][7].replace("%", "")),
        twoYears: parseFloat(transposedData[i][8].replace("%", "")),
      },
    };

    cuentas.push(cuenta);
  }

  return cuentas;
}
