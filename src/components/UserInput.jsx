export default function UserInput({ onChange, dataInputs }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("InitialInvestment", event.target.value)
            }
            value={dataInputs.InitialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onChange("AnnualInvestment", event.target.value)
            }
            value={dataInputs.AnnualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) => onChange("ExpectedReturn", event.target.value)}
            value={dataInputs.ExpectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => onChange("Duration", event.target.value)}
            value={dataInputs.Duration}
          />
        </p>
      </div>
    </section>
  );
}
