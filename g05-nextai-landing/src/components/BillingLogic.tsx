import { Database, Percent } from 'lucide-react';
import { billingMapping, taxRules } from '../data/g05Plans';

export default function BillingLogic() {
  return (
    <section className="billing" id="billing">
      <div className="section-head">
        <h2 className="section-head__title">Billing logic</h2>
        <p className="section-head__subtitle">
          How NextAI products map to Oracle BRM resources, and the tax rules applied
          during rating.
        </p>
      </div>

      <div className="billing__grid">
        <div className="panel">
          <div className="panel__head">
            <span className="panel__icon" aria-hidden="true">
              <Database size={18} />
            </span>
            <h3 className="panel__title">Resource mapping</h3>
          </div>
          <dl className="mapping">
            {billingMapping.map((row) => (
              <div key={row.label} className="mapping__row">
                <dt className="mapping__label">{row.label}</dt>
                <dd className="mapping__value">
                  <code>{row.value}</code>
                  <span className="mapping__note">{row.note}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="panel">
          <div className="panel__head">
            <span className="panel__icon" aria-hidden="true">
              <Percent size={18} />
            </span>
            <h3 className="panel__title">Tax logic</h3>
          </div>
          <ul className="tax-list">
            {taxRules.map((rule) => (
              <li key={rule.label} className="tax-list__item">
                <span className="tax-list__label">{rule.label}</span>
                <span className="tax-list__detail">{rule.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
