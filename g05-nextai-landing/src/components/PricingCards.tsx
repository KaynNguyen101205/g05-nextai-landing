import { Check, Cpu, MessageSquare, Zap } from 'lucide-react';
import {
  plansForModel,
  primaryPrice,
  planFeatures,
  type ModelId,
  type Plan,
} from '../data/g05Plans';

interface PricingCardsProps {
  activeModel: ModelId;
}

function planIcon(plan: Plan) {
  if (plan.kind === 'unlimited') return <Zap size={18} />;
  return plan.resource === 'prompt' ? <MessageSquare size={18} /> : <Cpu size={18} />;
}

function PricingCard({ plan }: { plan: Plan }) {
  const price = primaryPrice(plan);
  const features = planFeatures(plan);
  const featured = plan.kind === 'unlimited';

  return (
    <article className={`pricing-card${featured ? ' pricing-card--featured' : ''}`}>
      {featured && <span className="pricing-card__ribbon">Best value</span>}

      <div className="pricing-card__head">
        <span className="pricing-card__icon" aria-hidden="true">
          {planIcon(plan)}
        </span>
        <h3 className="pricing-card__name">{plan.name}</h3>
      </div>

      <p className="pricing-card__desc">{plan.description}</p>

      <div className="pricing-card__price">
        <span className="pricing-card__amount">{price.amount}</span>
        <span className="pricing-card__suffix">{price.suffix}</span>
      </div>

      <ul className="pricing-card__features">
        {features.map((feature) => (
          <li key={feature}>
            <Check size={16} className="pricing-card__check" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`btn btn--block ${featured ? 'btn--primary' : 'btn--outline'}`}
      >
        Choose {plan.name}
      </button>
    </article>
  );
}

export default function PricingCards({ activeModel }: PricingCardsProps) {
  const cards = plansForModel(activeModel);

  return (
    <div className="pricing-grid">
      {cards.map((plan) => (
        <PricingCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}
