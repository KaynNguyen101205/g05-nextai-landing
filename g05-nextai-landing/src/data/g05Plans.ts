// Single source of truth for all NextAI Pricing Plans data (Group 05 - CTG / Oracle BRM).
// Components MUST read from this file and never hardcode pricing values.

export type ModelId = 'odyssey-3' | 'odyssey-3.5';
export type ResourceType = 'prompt' | 'token';
export type PlanKind = 'payg' | 'included' | 'unlimited';

export interface Model {
  id: ModelId;
  name: string;
  tagline: string;
}

export interface Plan {
  /** Stable unique id, e.g. "o3-prompt-payg". */
  id: string;
  modelId: ModelId;
  /** Display name, e.g. "Prompt PAYG". */
  name: string;
  resource: ResourceType;
  kind: PlanKind;
  /** Recurring monthly fee in USD. PAYG plans are always 0. */
  monthlyFee: number;
  /**
   * Included allowance per month.
   * - number: included prompts or 1K-token blocks
   * - 'unlimited': no cap
   * - 0: nothing included (PAYG)
   */
  included: number | 'unlimited';
  /**
   * Usage rate in USD.
   * - prompt plans: price per extra prompt
   * - token plans: price per extra 1000-token block
   * - 0: no usage charge (Unlimited)
   */
  usageRate: number;
  /** Short marketing description shown on the card. */
  description: string;
}

export const models: Model[] = [
  {
    id: 'odyssey-3',
    name: 'Odyssey 3',
    tagline: 'Production-ready generative AI for everyday workloads.',
  },
  {
    id: 'odyssey-3.5',
    name: 'Odyssey 3.5',
    tagline: 'Higher-accuracy reasoning for demanding enterprise workloads.',
  },
];

export const plans: Plan[] = [
  // ----- Odyssey 3 -----
  {
    id: 'o3-prompt-payg',
    modelId: 'odyssey-3',
    name: 'Prompt PAYG',
    resource: 'prompt',
    kind: 'payg',
    monthlyFee: 0,
    included: 0,
    usageRate: 0.7,
    description: 'Pay only for the prompts you send. No commitment.',
  },
  {
    id: 'o3-prompt-100',
    modelId: 'odyssey-3',
    name: 'Prompt 100 Included',
    resource: 'prompt',
    kind: 'included',
    monthlyFee: 10,
    included: 100,
    usageRate: 0.5,
    description: '100 prompts bundled each month with discounted overage.',
  },
  {
    id: 'o3-prompt-unlimited',
    modelId: 'odyssey-3',
    name: 'Prompt Unlimited',
    resource: 'prompt',
    kind: 'unlimited',
    monthlyFee: 100,
    included: 'unlimited',
    usageRate: 0,
    description: 'Unlimited prompts at a flat predictable rate.',
  },
  {
    id: 'o3-token-payg',
    modelId: 'odyssey-3',
    name: 'Token PAYG',
    resource: 'token',
    kind: 'payg',
    monthlyFee: 0,
    included: 0,
    usageRate: 0.05,
    description: 'Metered token billing per 1000-token block.',
  },
  {
    id: 'o3-token-200k',
    modelId: 'odyssey-3',
    name: 'Token 200K Included',
    resource: 'token',
    kind: 'included',
    monthlyFee: 20,
    included: 200,
    usageRate: 0.03,
    description: '200 token blocks included with discounted overage.',
  },
  {
    id: 'o3-token-2500k',
    modelId: 'odyssey-3',
    name: 'Token 2500K Included',
    resource: 'token',
    kind: 'included',
    monthlyFee: 200,
    included: 2500,
    usageRate: 0.02,
    description: '2500 token blocks for high-volume token workloads.',
  },

  // ----- Odyssey 3.5 -----
  {
    id: 'o35-prompt-payg',
    modelId: 'odyssey-3.5',
    name: 'Prompt PAYG',
    resource: 'prompt',
    kind: 'payg',
    monthlyFee: 0,
    included: 0,
    usageRate: 0.8,
    description: 'Pay only for the prompts you send. No commitment.',
  },
  {
    id: 'o35-prompt-100',
    modelId: 'odyssey-3.5',
    name: 'Prompt 100 Included',
    resource: 'prompt',
    kind: 'included',
    monthlyFee: 15,
    included: 100,
    usageRate: 0.6,
    description: '100 prompts bundled each month with discounted overage.',
  },
  {
    id: 'o35-prompt-unlimited',
    modelId: 'odyssey-3.5',
    name: 'Prompt Unlimited',
    resource: 'prompt',
    kind: 'unlimited',
    monthlyFee: 120,
    included: 'unlimited',
    usageRate: 0,
    description: 'Unlimited prompts at a flat predictable rate.',
  },
  {
    id: 'o35-token-payg',
    modelId: 'odyssey-3.5',
    name: 'Token PAYG',
    resource: 'token',
    kind: 'payg',
    monthlyFee: 0,
    included: 0,
    usageRate: 0.07,
    description: 'Metered token billing per 1000-token block.',
  },
  {
    id: 'o35-token-200k',
    modelId: 'odyssey-3.5',
    name: 'Token 200K Included',
    resource: 'token',
    kind: 'included',
    monthlyFee: 40,
    included: 200,
    usageRate: 0.06,
    description: '200 token blocks included with discounted overage.',
  },
  {
    id: 'o35-token-2500k',
    modelId: 'odyssey-3.5',
    name: 'Token 2500K Included',
    resource: 'token',
    kind: 'included',
    monthlyFee: 400,
    included: 2500,
    usageRate: 0.04,
    description: '2500 token blocks for high-volume token workloads.',
  },
];

// ---------- Derived helpers ----------

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const usdWhole = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatUSD(value: number): string {
  return usd.format(value);
}

/** Unit a usage rate is measured in for a given resource. */
export function usageUnitLabel(resource: ResourceType): string {
  return resource === 'prompt' ? 'prompt' : '1K-token block';
}

export interface PlanPrice {
  /** Big number shown on the card, formatted as currency. */
  amount: string;
  /** Suffix under/after the amount, e.g. "/month" or "per prompt". */
  suffix: string;
}

/**
 * Primary price for a pricing card.
 * PAYG plans surface the usage rate (not $0/month); everything else shows the monthly fee.
 */
export function primaryPrice(plan: Plan): PlanPrice {
  if (plan.kind === 'payg') {
    return {
      amount: formatUSD(plan.usageRate),
      suffix: `per ${usageUnitLabel(plan.resource)}`,
    };
  }
  return {
    amount: usdWhole.format(plan.monthlyFee),
    suffix: '/month',
  };
}

/** Bullet feature lines for a card, derived from the data model. */
export function planFeatures(plan: Plan): string[] {
  const unit = usageUnitLabel(plan.resource);
  const features: string[] = [];

  // Monthly fee line.
  features.push(
    plan.monthlyFee === 0
      ? 'No monthly fee'
      : `${usdWhole.format(plan.monthlyFee)} monthly fee`,
  );

  // Included allowance line.
  if (plan.included === 'unlimited') {
    features.push(`Unlimited ${plan.resource === 'prompt' ? 'prompts' : 'token blocks'}`);
  } else if (plan.included > 0) {
    features.push(
      `${plan.included.toLocaleString('en-US')} ${
        plan.resource === 'prompt' ? 'prompts' : 'token blocks'
      } included`,
    );
  } else {
    features.push(`Metered ${plan.resource === 'prompt' ? 'prompt' : 'token'} usage`);
  }

  // Usage / overage line.
  if (plan.kind === 'unlimited' || plan.usageRate === 0) {
    features.push('No usage charge');
  } else if (plan.included !== 'unlimited' && plan.included > 0) {
    features.push(`${formatUSD(plan.usageRate)} per extra ${unit}`);
  } else {
    features.push(`${formatUSD(plan.usageRate)} per ${unit}`);
  }

  return features;
}

export function plansForModel(modelId: ModelId): Plan[] {
  return plans.filter((p) => p.modelId === modelId);
}

// ---------- Billing logic (resource mapping & tax) ----------

export interface BillingMappingRow {
  label: string;
  value: string;
  note: string;
}

export const billingMapping: BillingMappingRow[] = [
  { label: 'USD resource', value: '840', note: 'Currency resource used for monetary balances.' },
  { label: 'Token resource', value: '1000505', note: 'Non-currency resource tracking token blocks.' },
  { label: 'Service', value: '/service/my_ai5', note: 'Billable AI service instance for Group 05.' },
  { label: 'Usage event', value: '/event/session/usageg05', note: 'Rated usage event for session activity.' },
];

export interface TaxRule {
  label: string;
  detail: string;
}

export const taxRules: TaxRule[] = [
  {
    label: 'AIT tax: 5%',
    detail: 'Applied to USD charges only — token resource usage is never taxed.',
  },
  {
    label: 'Token reconcile',
    detail: 'Grant and usage net to zero: −10,800 + 10,800 = 0.',
  },
];

// ---------- BRM proof / reconciliation ----------

export interface ProofStep {
  step: string;
  title: string;
  result: string;
  passed: boolean;
}

export const proofSteps: ProofStep[] = [
  { step: 'Step 9', title: 'Product validation', result: 'PASS · 12/12 valid G05 products', passed: true },
  { step: 'Step 10', title: 'Billing / payment', result: 'G05_STEP10_PASS', passed: true },
  { step: 'Step 11', title: 'Report / showcase', result: 'PASS', passed: true },
];

export interface ProofMetric {
  label: string;
  value: string;
}

export const proofMetrics: ProofMetric[] = [
  { label: 'Products validated', value: '12 / 12' },
  { label: 'Accounts with payment posted', value: '12 / 12' },
];

export interface ReconcileRow {
  label: string;
  value: string;
  kind: 'charge' | 'payment' | 'token' | 'total';
}

export const reconciliation: ReconcileRow[] = [
  { label: 'Total USD charges', value: formatUSD(55797.49), kind: 'charge' },
  { label: 'Cash payments posted', value: `-${formatUSD(1686.5)}`, kind: 'payment' },
  { label: 'Token grant/usage reconcile', value: '-10,800 + 10,800 = 0', kind: 'token' },
  { label: 'Current outstanding balance', value: formatUSD(54110.99), kind: 'total' },
];

// Headline stats reused by the Hero proof cards.
export interface ProofStat {
  label: string;
  value: string;
}

export const heroStats: ProofStat[] = [
  { label: 'Products validated', value: '12 / 12' },
  { label: 'Total USD charges', value: formatUSD(55797.49) },
  { label: 'Current outstanding balance', value: formatUSD(54110.99) },
];
