export default async function getTasas() {
  const data = await fetch("https://datawrapper.dwcdn.net/AqQwN/5/dataset.csv")
    .then((response) => response.text())
    .catch((error) => console.error(error));

  const rows = data ? data.split("\n") : [];
  const tabSeparatedData = rows.map((row) => row.split("\t"));

  // Transpose the matrix
  const transposedData = tabSeparatedData[0].map((_, colIndex) =>
    tabSeparatedData.map((row) => row[colIndex])
  );

  return transposedData;
}
