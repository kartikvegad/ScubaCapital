"use client";

import { useMemo, useState } from "react";
import {
  buildSipYearlyBreakdown,
  calculateInflationAdjustedSip,
  formatInr,
  formatInrCompact,
} from "@/lib/sip-calculator";

const DEFAULTS = {
  monthlyInvestment: 5000,
  annualReturnPercent: 12,
  years: 10,
  inflationPercent: 6,
} as const;

type SliderFieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
};

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: SliderFieldProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-navy">
          {label}
        </label>
        <div className="flex items-center gap-1.5">
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(event) => onChange(Number(event.target.value))}
            className="w-24 rounded-lg border border-border bg-white px-2.5 py-1.5 text-right text-sm font-semibold text-navy outline-none ring-green/30 focus:ring-2"
          />
          {suffix ? (
            <span className="text-xs font-medium text-muted">{suffix}</span>
          ) : null}
        </div>
      </div>
      <input
        aria-label={label}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-green"
      />
      <div className="flex justify-between text-[11px] text-muted">
        <span>
          {suffix === "₹" ? formatInrCompact(min) : min}
          {suffix && suffix !== "₹" ? suffix : ""}
        </span>
        <span>
          {suffix === "₹" ? formatInrCompact(max) : max}
          {suffix && suffix !== "₹" ? suffix : ""}
        </span>
      </div>
    </div>
  );
}

export function InflationAdjustedSipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(
    DEFAULTS.monthlyInvestment,
  );
  const [annualReturnPercent, setAnnualReturnPercent] = useState<number>(
    DEFAULTS.annualReturnPercent,
  );
  const [years, setYears] = useState<number>(DEFAULTS.years);
  const [inflationPercent, setInflationPercent] = useState<number>(
    DEFAULTS.inflationPercent,
  );

  const input = useMemo(
    () => ({
      monthlyInvestment: Math.max(monthlyInvestment, 0),
      annualReturnPercent: Math.max(annualReturnPercent, 0),
      years: Math.max(years, 0),
      inflationPercent: Math.max(inflationPercent, 0),
    }),
    [monthlyInvestment, annualReturnPercent, years, inflationPercent],
  );

  const result = useMemo(
    () => calculateInflationAdjustedSip(input),
    [input],
  );

  const breakdown = useMemo(() => buildSipYearlyBreakdown(input), [input]);

  const nominalShare =
    result.futureValue > 0
      ? Math.min((result.totalInvested / result.futureValue) * 100, 100)
      : 0;
  const gainsShare = 100 - nominalShare;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div className="panel rounded-[1.75rem] p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-navy">
          Calculator inputs
        </h2>
        <p className="mt-2 text-sm text-muted">
          Adjust your monthly SIP, expected return, investment period, and
          inflation to project nominal and inflation-adjusted outcomes.
        </p>

        <div className="mt-8 space-y-7">
          <SliderField
            id="monthly-investment"
            label="Monthly SIP amount"
            value={monthlyInvestment}
            min={500}
            max={100000}
            step={500}
            suffix="₹"
            onChange={setMonthlyInvestment}
          />
          <SliderField
            id="annual-return"
            label="Expected annual return"
            value={annualReturnPercent}
            min={1}
            max={20}
            step={0.5}
            suffix="%"
            onChange={setAnnualReturnPercent}
          />
          <SliderField
            id="investment-years"
            label="Investment duration"
            value={years}
            min={1}
            max={40}
            step={1}
            suffix=" yrs"
            onChange={setYears}
          />
          <SliderField
            id="inflation-rate"
            label="Expected inflation rate"
            value={inflationPercent}
            min={0}
            max={12}
            step={0.5}
            suffix="%"
            onChange={setInflationPercent}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="panel rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Total invested
            </p>
            <p className="font-display mt-2 text-2xl font-bold text-navy">
              {formatInr(result.totalInvested)}
            </p>
          </div>
          <div className="panel rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Estimated returns
            </p>
            <p className="font-display mt-2 text-2xl font-bold text-green">
              {formatInr(result.estimatedReturns)}
            </p>
          </div>
          <div className="panel rounded-2xl p-5 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Future value (nominal)
            </p>
            <p className="font-display mt-2 text-3xl font-bold text-navy">
              {formatInr(result.futureValue)}
            </p>
            <p className="mt-2 text-xs text-muted">
              Projected corpus before adjusting for inflation.
            </p>
          </div>
          <div className="rounded-2xl bg-navy p-5 text-white sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Inflation-adjusted value
            </p>
            <p className="font-display mt-2 text-3xl font-bold text-gold-light">
              {formatInr(result.inflationAdjustedValue)}
            </p>
            <p className="mt-2 text-sm text-white/70">
              Purchasing power in today&apos;s terms · Real return approx.{" "}
              {result.realReturnRatePercent.toFixed(2)}% p.a.
            </p>
          </div>
        </div>

        <div className="panel rounded-2xl p-5">
          <p className="text-sm font-semibold text-navy">Corpus composition</p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#eef2ea]">
            <div className="flex h-full">
              <div
                className="bg-navy/80 transition-all duration-500"
                style={{ width: `${nominalShare}%` }}
              />
              <div
                className="bg-green transition-all duration-500"
                style={{ width: `${gainsShare}%` }}
              />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-navy/80" />
              Amount invested
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-green" />
              Wealth gained
            </span>
          </div>
        </div>
      </div>

      <div className="panel overflow-hidden rounded-[1.75rem] lg:col-span-2">
        <div className="border-b border-border px-6 py-4">
          <h3 className="font-display text-lg font-bold text-navy">
            Year-wise projection
          </h3>
          <p className="mt-1 text-sm text-muted">
            Nominal corpus vs inflation-adjusted value at the end of each year.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#f8faf5] text-xs uppercase tracking-[0.12em] text-muted">
              <tr>
                <th className="px-6 py-3 font-semibold">Year</th>
                <th className="px-6 py-3 font-semibold">Invested</th>
                <th className="px-6 py-3 font-semibold">Nominal corpus</th>
                <th className="px-6 py-3 font-semibold">Real value (today)</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((row) => (
                <tr key={row.year} className="border-t border-border/70">
                  <td className="px-6 py-3 font-medium text-navy">{row.year}</td>
                  <td className="px-6 py-3 text-muted">
                    {formatInr(row.invested)}
                  </td>
                  <td className="px-6 py-3 text-navy">
                    {formatInr(row.nominalCorpus)}
                  </td>
                  <td className="px-6 py-3 font-medium text-green">
                    {formatInr(row.realCorpus)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
