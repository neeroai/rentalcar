/**
 * @file how-it-works/page.tsx
 * @description How It Works page — 3-step flow, trust cards, and final CTA.
 * @module app/how-it-works
 * @exports HowItWorksPage
 */

import { Car, MessageCircle, Search, Shield, X, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getDictionary, getLocale } from "@/lib/i18n";

/**
 * How It Works marketing page with hero, 3-step flow, trust section, and CTA.
 *
 * @returns Full-page server component.
 *
 * @example
 * // Rendered automatically at /how-it-works
 */
export default async function HowItWorksPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const steps = [
    {
      number: "1",
      icon: Search,
      title: locale === "es" ? "Elige tu auto" : "Choose your car",
      detail:
        locale === "es"
          ? "Filtra por fechas, pickup y tipo de vehículo. Ves el auto exacto, no una categoría genérica."
          : "Filter by dates, pickup point and vehicle type. You see the exact car, not a generic class.",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "2",
      icon: MessageCircle,
      title: locale === "es" ? "Conecta" : "Connect",
      detail:
        locale === "es"
          ? "Confirma la reserva y coordina directamente con tu host. Todo en un inbox integrado."
          : "Confirm the booking and coordinate directly with your host. All in one integrated inbox.",
      image:
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
    },
    {
      number: "3",
      icon: Car,
      title: locale === "es" ? "Disfruta" : "Enjoy",
      detail:
        locale === "es"
          ? "Recibe el auto en MCO, tu hotel o donde más te convenga. Listo y sin filas."
          : "Pick up the car at MCO, your hotel or wherever works best. Ready to go, no lines.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const trustCards = [
    {
      icon: Shield,
      title: locale === "es" ? "Protección incluida" : "Protection included",
      text:
        locale === "es"
          ? "Cobertura básica y políticas claras disponibles antes de confirmar."
          : "Basic coverage and clear policies visible before you confirm.",
    },
    {
      icon: X,
      title: locale === "es" ? "Cancelación flexible" : "Flexible cancellation",
      text:
        locale === "es"
          ? "Revisa la política de cada host antes de pagar. Sin sorpresas."
          : "Check each host's policy before paying. No surprises.",
    },
    {
      icon: Clock,
      title: locale === "es" ? "Soporte directo" : "Direct support",
      text:
        locale === "es"
          ? "Habla con el host en tiempo real. Respuesta rápida garantizada."
          : "Talk to the host in real time. Fast response guaranteed.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden">
        <Image
          alt="Auto cinematic en carretera"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="page-grid relative z-10 w-full py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
            {dictionary.nav.howItWorks}
          </p>
          <h1 className="mt-4 text-fluid-h1 font-bold leading-tight text-white">
            {dictionary.howItWorks.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            {locale === "es"
              ? "Alquilar un auto nunca fue tan fácil"
              : "Renting a car has never been this easy"}
          </p>
        </div>
      </section>

      {/* 3-Step section */}
      <section className="page-grid py-16 md:py-20">
        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-[28px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-[#E5E5E5]" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center md:items-center gap-4"
              >
                {/* Step image */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                {/* Number circle */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#7C3AED] text-white font-bold text-lg shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold text-[#231F20]">
                  {step.title}
                </h2>
                <p className="text-base leading-7 text-[#6B7280]">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust cards */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="page-grid">
          <h2 className="mb-8 text-2xl font-bold text-[#231F20] md:text-3xl">
            {dictionary.howItWorks.trustTitle}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-xl border border-[#E5E5E5] bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDE9FE]">
                    <Icon className="h-5 w-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#231F20]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-20">
        <Image
          alt="Miami skyline al atardecer"
          className="object-cover"
          fill
          sizes="100vw"
          src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1600&q=80"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="page-grid relative z-10 text-center">
          <h2 className="text-fluid-h2 font-bold text-white">
            {locale === "es" ? "¿Listo para reservar?" : "Ready to book?"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
            {dictionary.howItWorks.subtitle}
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex min-h-[44px] cursor-pointer items-center rounded-lg bg-[#7C3AED] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              href="/search"
            >
              {dictionary.nav.search}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
