"use client";

import { Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import type { Locale } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

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
    <div className="rounded-xl border border-[#E5E5E5] bg-white p-7 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
        {title}
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="space-y-6">
          <label className="block">
            <div className="mb-3 flex items-center justify-between text-sm font-medium text-[#231F20]">
              <span>Booked days / month</span>
              <span className="font-semibold">{days}</span>
            </div>
            <input
              className="w-full accent-[#7C3AED]"
              max="28"
              min="6"
              onChange={(event) => setDays(Number(event.target.value))}
              type="range"
              value={days}
            />
          </label>
          <label className="block">
            <div className="mb-3 flex items-center justify-between text-sm font-medium text-[#231F20]">
              <span>Daily rate</span>
              <span className="font-semibold">
                {formatCurrency(rate, locale)}
              </span>
            </div>
            <input
              className="w-full accent-[#7C3AED]"
              max="260"
              min="60"
              onChange={(event) => setRate(Number(event.target.value))}
              step="2"
              type="range"
              value={rate}
            />
          </label>
        </div>

        <div className="rounded-xl bg-[#231F20] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
            Monthly forecast
          </p>
          <p className="mt-3 text-5xl font-bold">
            {formatCurrency(totals.gross, locale)}
          </p>
          <p className="mt-2 text-sm text-white/70">
            Gross booking value at the current assumptions.
          </p>
          <div className="mt-8 rounded-lg border border-white/15 bg-white/8 p-5">
            <p className="text-sm text-white/60">
              Estimated host payout after platform fee
            </p>
            <p className="mt-2 text-3xl font-semibold">
              {formatCurrency(totals.net, locale)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface HostOnboardingWizardProps {
  locale: Locale;
}

const steps = ["Vehicle", "Photos", "Availability", "Review"];

export function HostOnboardingWizard({ locale }: HostOnboardingWizardProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const isLastStep = stepIndex === steps.length - 1;

  return (
    <div
      className="rounded-xl border border-[#E5E5E5] bg-white p-6 md:p-10"
      data-testid="host-wizard"
    >
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
            Host onboarding
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#231F20]">
            {locale === "es"
              ? "Wizard mock de publicación"
              : "Listing wizard mock"}
          </h2>
        </div>

        {/* Step indicator — horizontal numbered circles */}
        <div className="flex items-center gap-0">
          {steps.map((step, index) => {
            const isCompleted = index < stepIndex;
            const isActive = index === stepIndex;
            const isPending = index > stepIndex;

            return (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-150 ${
                      isCompleted
                        ? "bg-[#22C55E] text-white"
                        : isActive
                          ? "bg-[#7C3AED] text-white"
                          : "bg-[#F5F5F5] text-[#6B7280]"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span
                    className={`hidden text-xs font-medium sm:block ${
                      isActive
                        ? "text-[#7C3AED]"
                        : isPending
                          ? "text-[#6B7280]"
                          : "text-[#22C55E]"
                    }`}
                  >
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 ? (
                  <div
                    className={`mb-5 h-px w-8 transition-colors duration-150 sm:w-12 ${
                      index < stepIndex ? "bg-[#22C55E]" : "bg-[#E5E5E5]"
                    }`}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-[#E5E5E5]">
        <div className="animate-fade-up p-6 md:p-8" key={stepIndex}>
          {stepIndex === 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Make / model"
                placeholder="2024 Toyota Highlander Hybrid"
              />
              <Field label="Pickup focus" placeholder="MCO + Disney resorts" />
              <Field label="Daily rate" placeholder="$118" />
              <Field label="Seats" placeholder="7" />
            </div>
          ) : null}

          {stepIndex === 1 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {["Exterior front", "Interior", "Lifestyle delivery shot"].map(
                (label) => (
                  <div
                    className="flex min-h-44 items-center justify-center rounded-lg border border-dashed border-[#D4D4D4] bg-[#F5F5F5] text-center text-sm text-[#6B7280]"
                    key={label}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          ) : null}

          {stepIndex === 2 ? (
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Available days" placeholder="Mon - Sun" />
              <Field label="Instant book" placeholder="Enabled" />
              <Field
                label="Delivery zones"
                placeholder="MCO, Disney, I-Drive"
              />
              <Field label="Advance notice" placeholder="3 hours" />
            </div>
          ) : null}

          {stepIndex === 3 ? (
            <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-xl border border-[#E5E5E5] bg-[#FAF5FF] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                  Review before publish
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#6B7280]">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                    Orlando-first listing with MCO and hotel delivery enabled.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                    Premium positioning and clear traveler policies included.
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                    Ready to publish to the demo marketplace.
                  </li>
                </ul>
              </div>
              <div className="rounded-xl bg-[#231F20] p-5 text-white">
                <p className="text-xs text-white/55">Projected gross / month</p>
                <p className="mt-2 text-4xl font-semibold">
                  {formatCurrency(1888, locale)}
                </p>
                <p className="mt-4 text-sm text-white/70">
                  Based on 16 booked days, hotel + airport delivery mix, and a
                  premium mid-size SUV.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button
          className="cursor-pointer rounded-lg border border-[#D4D4D4] px-5 py-2.5 text-sm font-medium text-[#231F20] transition-colors duration-150 hover:border-[#7C3AED] hover:text-[#7C3AED] disabled:cursor-not-allowed disabled:opacity-40"
          disabled={stepIndex === 0}
          onClick={() => setStepIndex((value) => Math.max(0, value - 1))}
          type="button"
        >
          Back
        </button>
        {isLastStep ? (
          <Link
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#6D28D9]"
            href="/host"
          >
            {locale === "es" ? "Publicación lista" : "Listing ready"}
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <button
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#7C3AED] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#6D28D9]"
            onClick={() =>
              setStepIndex((value) => Math.min(steps.length - 1, value + 1))
            }
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
      <span className="mb-2 block text-sm font-medium text-[#6B7280]">
        {label}
      </span>
      <input
        className="w-full rounded-lg border border-[#D4D4D4] bg-white px-4 py-3 text-sm text-[#231F20] transition-colors duration-150 focus:border-[#7C3AED] focus:outline-none"
        defaultValue={placeholder}
        type="text"
      />
    </label>
  );
}
