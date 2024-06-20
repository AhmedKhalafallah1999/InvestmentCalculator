import { calculateInvestmentResults,formatter } from "../util/investment.js";
export default function Results({ dataInputs }) {
  console.log(dataInputs);
  const results = calculateInvestmentResults(dataInputs);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interst (Year)</th>
          <th>Total Interst</th>
          <th>Invested Cabital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{}</td>
              <td>{}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
