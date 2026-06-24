import {
  plans,
  models,
  formatUSD,
  usageUnitLabel,
  type Plan,
} from '../data/g05Plans';

function modelName(modelId: Plan['modelId']): string {
  return models.find((m) => m.id === modelId)?.name ?? modelId;
}

function includedLabel(plan: Plan): string {
  if (plan.included === 'unlimited') return 'Unlimited';
  if (plan.included === 0) return '—';
  const unit = plan.resource === 'prompt' ? 'prompts' : 'token blocks';
  return `${plan.included.toLocaleString('en-US')} ${unit}`;
}

function usageLabel(plan: Plan): string {
  if (plan.usageRate === 0) return 'No usage charge';
  return `${formatUSD(plan.usageRate)} / ${usageUnitLabel(plan.resource)}`;
}

export default function ComparisonTable() {
  return (
    <section className="comparison" id="compare">
      <div className="section-head">
        <h2 className="section-head__title">Compare all 12 plans</h2>
        <p className="section-head__subtitle">
          Every Group 05 product across both models. PAYG plans always carry a $0
          monthly fee and bill purely on usage.
        </p>
      </div>

      <div className="comparison__scroll" role="region" aria-label="Plan comparison table" tabIndex={0}>
        <table className="comparison__table">
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Plan</th>
              <th scope="col">Rate Type</th>
              <th scope="col">Monthly fee</th>
              <th scope="col">Included</th>
              <th scope="col">Usage rate</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td>{modelName(plan.modelId)}</td>
                <td className="comparison__plan">{plan.name}</td>
                <td>
                  <span className={`tag tag--${plan.resource}`}>
                    {plan.resource === 'prompt' ? 'Prompt' : 'Token'}
                  </span>
                </td>
                <td>{formatUSD(plan.monthlyFee)}</td>
                <td>{includedLabel(plan)}</td>
                <td>{usageLabel(plan)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
