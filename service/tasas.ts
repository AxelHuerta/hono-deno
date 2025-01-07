type Cuenta = {
  nombre: string;
  permanente: string;
  dia: string;
  semana: string;
  mes: string;
  trimestre: string;
  semestre: string;
  year: string;
  twoYears: string;
};

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
      permanente: transposedData[i][1],
      dia: transposedData[i][2],
      semana: transposedData[i][3],
      mes: transposedData[i][4],
      trimestre: transposedData[i][5],
      semestre: transposedData[i][6],
      year: transposedData[i][7],
      twoYears: transposedData[i][8],
    };

    cuentas.push(cuenta);
  }

  return cuentas;
}
