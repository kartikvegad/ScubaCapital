export type SipCalculatorInput = {
  monthlyInvestment: number;
  annualReturnPercent: number;
  years: number;
  inflationPercent: number;
};

export type SipCalculatorResult = {
  totalInvested: number;
  futureValue: number;
  estimatedReturns: number;
  inflationAdjustedValue: number;
  realReturnRatePercent: number;
};

export type SipYearlyBreakdown = {
  year: number;
  invested: number;
  nominalCorpus: number;
  realCorpus: number;
};

/** Monthly SIP future value — instalments at the start of each month. */
export function calculateSipFutureValue(
  monthlyInvestment: number,
  annualReturnPercent: number,
  years: number,
): number {
  const months = years * 12;
  if (months <= 0 || monthlyInvestment <= 0) return 0;

  const monthlyRate = annualReturnPercent / 12 / 100;
  if (monthlyRate === 0) {
    return monthlyInvestment * months;
  }

  const compoundFactor = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
  return monthlyInvestment * compoundFactor * (1 + monthlyRate);
}

/** Purchasing power of the maturity amount in today's terms. */
export function calculateInflationAdjustedValue(
  futureValue: number,
  inflationPercent: number,
  years: number,
): number {
  if (years <= 0 || futureValue <= 0) return futureValue;
  return futureValue / Math.pow(1 + inflationPercent / 100, years);
}

/** Fisher equation — real annual return after inflation. */
export function calculateRealReturnRate(
  nominalPercent: number,
  inflationPercent: number,
): number {
  const nominal = 1 + nominalPercent / 100;
  const inflation = 1 + inflationPercent / 100;
  return (nominal / inflation - 1) * 100;
}

export function calculateInflationAdjustedSip(
  input: SipCalculatorInput,
): SipCalculatorResult {
  const { monthlyInvestment, annualReturnPercent, years, inflationPercent } =
    input;

  const totalInvested = monthlyInvestment * years * 12;
  const futureValue = calculateSipFutureValue(
    monthlyInvestment,
    annualReturnPercent,
    years,
  );
  const estimatedReturns = Math.max(futureValue - totalInvested, 0);
  const inflationAdjustedValue = calculateInflationAdjustedValue(
    futureValue,
    inflationPercent,
    years,
  );
  const realReturnRatePercent = calculateRealReturnRate(
    annualReturnPercent,
    inflationPercent,
  );

  return {
    totalInvested,
    futureValue,
    estimatedReturns,
    inflationAdjustedValue,
    realReturnRatePercent,
  };
}

export function buildSipYearlyBreakdown(
  input: SipCalculatorInput,
): SipYearlyBreakdown[] {
  const rows: SipYearlyBreakdown[] = [];

  for (let year = 1; year <= input.years; year += 1) {
    const invested = input.monthlyInvestment * year * 12;
    const nominalCorpus = calculateSipFutureValue(
      input.monthlyInvestment,
      input.annualReturnPercent,
      year,
    );
    const realCorpus = calculateInflationAdjustedValue(
      nominalCorpus,
      input.inflationPercent,
      year,
    );

    rows.push({
      year,
      invested,
      nominalCorpus,
      realCorpus,
    });
  }

  return rows;
}

export function formatInr(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}

export function formatInrCompact(value: number): string {
  if (value >= 1_00_00_000) {
    return `₹${(value / 1_00_00_000).toFixed(2)} Cr`;
  }
  if (value >= 1_00_000) {
    return `₹${(value / 1_00_000).toFixed(2)} L`;
  }
  return formatInr(value);
}
