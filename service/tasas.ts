type Plazo = {
  permanente: string;
  dia: string;
  semana: string;
  mes: string;
  trimestre: string;
  semestre: string;
  year: string;
  twoYears: string;
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
    tabSeparatedData.map((row) => row[colIndex]),
  );

  const cuentas: Cuenta[] = [];

  for (let i = 1; i < transposedData.length; i++) {
    const cuenta: Cuenta = {
      nombre: transposedData[i][0],
      plazos: {
        permanente: transposedData[i][1],
        dia: transposedData[i][2],
        semana: transposedData[i][3],
        mes: transposedData[i][4],
        trimestre: transposedData[i][5],
        semestre: transposedData[i][6],
        year: transposedData[i][7],
        twoYears: transposedData[i][8],
      },
    };

    cuentas.push(cuenta);
  }

  return cuentas;
}
