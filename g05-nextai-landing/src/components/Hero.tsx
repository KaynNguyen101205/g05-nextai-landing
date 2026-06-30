import { ArrowRight, BadgeCheck, PlayCircle } from 'lucide-react';
import { heroStats } from '../data/g05Plans';

export default function Hero() {
  return (
    <section className="hero" id="features">
      <div className="hero__content">
        <span className="hero__badge">
          <BadgeCheck size={14} />
          Group 05 · CTG / Oracle BRM Showcase
        </span>

        <h1 className="hero__title">
          NextAI Pricing Plans, validated end-to-end in Oracle BRM
        </h1>

        <p className="hero__subtitle">
          Transparent, usage-based pricing for the Odyssey 3 and Odyssey 3.5 models —
          every product rated, billed, taxed, and reconciled inside BRM — with
          payments posted and rated usage reflected in the outstanding balance.
        </p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary btn--lg">
            Get Started
            <ArrowRight size={18} />
          </button>
          <button type="button" className="btn btn--ghost btn--lg">
            <PlayCircle size={18} />
            View BRM Proof
          </button>
        </div>
      </div>

      <div className="hero__stats" aria-label="Validation highlights">
        {heroStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span className="stat-card__value">{stat.value}</span>
            <span className="stat-card__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
