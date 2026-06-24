import { CheckCircle2 } from 'lucide-react';
import { proofSteps, proofMetrics, reconciliation } from '../data/g05Plans';

export default function BillingProof() {
  return (
    <section className="proof" id="proof">
      <div className="section-head">
        <h2 className="section-head__title">BRM proof dashboard</h2>
        <p className="section-head__subtitle">
          Validation and financial reconciliation captured directly from the Oracle BRM
          run for Group 05.
        </p>
      </div>

      <div className="proof__metrics" aria-label="Validation metrics">
        {proofMetrics.map((metric) => (
          <div key={metric.label} className="proof-metric">
            <span className="proof-metric__value">{metric.value}</span>
            <span className="proof-metric__label">{metric.label}</span>
          </div>
        ))}
      </div>

      <div className="proof__grid">
        <div className="proof__steps">
          {proofSteps.map((step) => (
            <div key={step.step} className="proof-step">
              <span className="proof-step__icon" aria-hidden="true">
                <CheckCircle2 size={20} />
              </span>
              <div className="proof-step__body">
                <span className="proof-step__meta">
                  <span className="proof-step__step">{step.step}</span>
                  <span className="proof-step__status">PASS</span>
                </span>
                <h3 className="proof-step__title">{step.title}</h3>
                <p className="proof-step__result">{step.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="panel reconcile">
          <h3 className="panel__title">Financial reconciliation</h3>
          <table className="reconcile__table">
            <tbody>
              {reconciliation.map((row) => (
                <tr key={row.label} className={`reconcile__row reconcile__row--${row.kind}`}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="reconcile__note">
            Account settles to a clean zero balance after cash payment.
          </p>
        </div>
      </div>
    </section>
  );
}
