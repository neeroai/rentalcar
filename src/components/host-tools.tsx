'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import type { Locale } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface EarningsCalculatorProps {
  locale: Locale;
  title: string;
}

export function EarningsCalculator({ locale, title }: EarningsCalculatorProps) {
  const [days, setDays] = useState(16);
  const [rate, setRate] = useState(118);

  const totals = useMemo(() => {
    const gross = days * rate;
    const net = gross * 0.84;

    return { gross, net };
  }, [days, rate]);

  return (
    <div className="surface-strong rounded-[2rem] p-7 md:p-10">
      <p className="eyebrow">{title}</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-6">
          <label className="block">
            <div className="mb-3 flex items-center justify-between text-sm font-medium">
              <span>Booked days / month</span>
              <span>{days}</span>
            </div>
            <input
              className="w-full accent-[var(--accent)]"
              max="28"
              min="6"
              onChange={(event) => setDays(Number(event.target.value))}
              type="range"
              value={days}
            />
          </label>
          <label className="block">
            <div className="mb-3 flex items-center justify-between text-sm font-medium">
              <span>Daily rate</span>
              <span>{formatCurrency(rate, locale)}</span>
            </div>
            <input
              className="w-full accent-[var(--accent)]"
              max="260"
              min="60"
              onChange={(event) => setRate(Number(event.target.value))}
              step="2"
              type="range"
              value={rate}
            />
          </label>
        </div>
        <div className="rounded-[1.5rem] border border-black/10 bg-[#18130f] p-6 text-white">
          <p className="text-sm uppercase tracking-[0.18em] text-white/55">Monthly forecast</p>
          <p className="mt-3 font-display text-5xl">{formatCurrency(totals.gross, locale)}</p>
          <p className="mt-2 text-white/70">Gross booking value at the current assumptions.</p>
          <div className="mt-8 rounded-[1.4rem] border border-white/12 bg-white/6 p-5">
            <p className="text-sm text-white/60">Estimated host payout after platform fee</p>
            <p className="mt-2 text-3xl font-semibold">{formatCurrency(totals.net, locale)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HostOnboardingWizardProps {
  locale: Locale;
}

const steps = ['Vehicle', 'Photos', 'Availability', 'Review'];

export function HostOnboardingWizard({ locale }: HostOnboardingWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const isLastStep = stepIndex === steps.length - 1;

  return (
    <div className="surface-strong rounded-[2rem] p-6 md:p-10" data-testid="host-wizard">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Host onboarding</p>
          <h2 className="mt-3 font-display text-4xl leading-tight">
            {locale === 'es' ? 'Wizard mock de publicación' : 'Listing wizard mock'}
          </h2>
        </div>
        <div className="flex gap-2">
          {steps.map((step, index) => (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                index <= stepIndex
                  ? 'bg-[#18130f] text-white'
                  : 'border border-black/10 bg-white text-[color:var(--muted)]'
              }`}
              key={step}
            >
              {index + 1}. {step}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-black/10 bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="p-6 md:p-8"
            exit={{ opacity: 0, x: -20 }}
            initial={{ opacity: 0, x: 20 }}
            key={stepIndex}
            transition={{ duration: 0.25 }}
          >
            {stepIndex === 0 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Make / model" placeholder="2024 Toyota Highlander Hybrid" />
                <Field label="Pickup focus" placeholder="MCO + Disney resorts" />
                <Field label="Daily rate" placeholder="$118" />
                <Field label="Seats" placeholder="7" />
              </div>
            ) : null}

            {stepIndex === 1 ? (
              <div className="grid gap-4 md:grid-cols-3">
                {['Exterior front', 'Interior', 'Lifestyle delivery shot'].map((label) => (
                  <div
                    className="flex min-h-44 items-center justify-center rounded-[1.5rem] border border-dashed border-black/15 bg-[#f7f1e9] text-center text-sm text-[color:var(--muted)]"
                    key={label}
                  >
                    {label}
                  </div>
                ))}
              </div>
            ) : null}

            {stepIndex === 2 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Available days" placeholder="Mon - Sun" />
                <Field label="Instant book" placeholder="Enabled" />
                <Field label="Delivery zones" placeholder="MCO, Disney, I-Drive" />
                <Field label="Advance notice" placeholder="3 hours" />
              </div>
            ) : null}

            {stepIndex === 3 ? (
              <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[1.5rem] bg-[#f5eee5] p-5">
                  <p className="text-sm uppercase tracking-[0.15em] text-[color:var(--muted)]">
                    Review before publish
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-[var(--success)]" />
                      Orlando-first listing with MCO and hotel delivery enabled.
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-[var(--success)]" />
                      Premium positioning and clear traveler policies included.
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-[var(--success)]" />
                      Ready to publish to the demo marketplace.
                    </li>
                  </ul>
                </div>
                <div className="rounded-[1.5rem] border border-black/10 bg-[#18130f] p-5 text-white">
                  <p className="text-sm text-white/55">Projected gross / month</p>
                  <p className="mt-2 text-4xl font-semibold">{formatCurrency(1888, locale)}</p>
                  <p className="mt-4 text-sm text-white/70">
                    Based on 16 booked days, hotel + airport delivery mix, and a premium mid-size
                    SUV.
                  </p>
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#18130f] disabled:opacity-40"
          disabled={stepIndex === 0}
          onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
          type="button"
        >
          Back
        </button>
        {isLastStep ? (
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-[#18130f] px-5 py-3 text-sm font-semibold text-white"
            href="/host"
          >
            {locale === 'es' ? 'Publicación lista' : 'Listing ready'}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            className="inline-flex items-center gap-2 rounded-full bg-[#18130f] px-5 py-3 text-sm font-semibold text-white"
            onClick={() => setStepIndex((value) => Math.min(steps.length - 1, value + 1))}
            type="button"
          >
            Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[color:var(--muted)]">{label}</span>
      <input
        className="w-full rounded-[1.25rem] border border-black/10 bg-[#faf5ee] px-4 py-3"
        defaultValue={placeholder}
        type="text"
      />
    </label>
  );
}
