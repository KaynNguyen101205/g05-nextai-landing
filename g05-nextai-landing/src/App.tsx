import { useState } from 'react';
import TopNavBar from './components/TopNavBar';
import Hero from './components/Hero';
import ModelToggle from './components/ModelToggle';
import PricingCards from './components/PricingCards';
import ComparisonTable from './components/ComparisonTable';
import BillingLogic from './components/BillingLogic';
import BillingProof from './components/BillingProof';
import Footer from './components/Footer';
import { models, type ModelId } from './data/g05Plans';
import './App.css';

function App() {
  const [activeModel, setActiveModel] = useState<ModelId>(models[0].id);

  return (
    <div className="app" id="top">
      <TopNavBar />

      <main>
        <div className="container">
          <Hero />
        </div>

        <section className="pricing" id="pricing">
          <div className="container">
            <div className="section-head">
              <h2 className="section-head__title">Choose your plan</h2>
              <p className="section-head__subtitle">
                Switch models to compare pricing. The grid below updates for the selected
                model; the full table further down always lists all 12 plans.
              </p>
            </div>

            <ModelToggle activeModel={activeModel} onChange={setActiveModel} />
            <PricingCards activeModel={activeModel} />
          </div>
        </section>

        <div className="container">
          <ComparisonTable />
          <BillingLogic />
          <BillingProof />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
