/**
 * @file host/page.tsx
 * @description Host marketing page — hero, benefits grid, earnings calculator, listing steps, and CTA.
 * @module app/host
 * @exports HostPage
 */

import {
  Clock,
  DollarSign,
  Shield,
  Camera,
  CalendarDays,
  Bell,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { EarningsCalculator } from "@/components/host-tools";
import { SectionHeading } from "@/components/site-chrome";
import { getDictionary, getLocale } from "@/lib/i18n";

/**
 * Host marketing page with hero, benefits, earnings calculator, listing steps, and dark CTA.
 *
 * @returns Full-page server component.
 *
 * @example
 * // Rendered automatically at /host
 */
export default async function HostPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const benefits = [
    {
      icon: DollarSign,
      title: locale === "es" ? "Ingresos predecibles" : "Predictable income",
      detail:
        locale === "es"
          ? "Demanda anclada a viajes reales en MCO, resorts y hoteles premium."
          : "Demand anchored to real travel plans at MCO, resorts and premium hotels.",
    },
    {
      icon: Shield,
      title: locale === "es" ? "Tú fijas las reglas" : "You set the rules",
      detail:
        locale === "es"
          ? "Define disponibilidad, puntos de entrega y políticas desde tu perfil."
          : "Define availability, handoff points and policies directly from your profile.",
    },
    {
      icon: Clock,
      title: locale === "es" ? "Gestión sencilla" : "Simple management",
      detail:
        locale === "es"
          ? "Inbox integrado, confirmaciones automáticas y calendario en un solo lugar."
          : "Integrated inbox, automatic confirmations and calendar all in one place.",
    },
  ];

  const listingSteps = [
    {
      icon: Camera,
      number: "1",
      title: locale === "es" ? "Sube tus fotos" : "Upload photos",
      detail:
        locale === "es"
          ? "Muestra el interior, exterior y los accesorios más relevantes."
          : "Showcase the interior, exterior and your most relevant accessories.",
    },
    {
      icon: CalendarDays,
      number: "2",
      title:
        locale === "es"
          ? "Fija precio y disponibilidad"
          : "Set price and availability",
      detail:
        locale === "es"
          ? "Elige tu tarifa diaria y bloquea las fechas que no quieres."
          : "Choose your daily rate and block out dates you do not want.",
    },
    {
      icon: Bell,
      number: "3",
      title:
        locale === "es"
          ? "Empieza a recibir reservas"
          : "Start receiving reservations",
      detail:
        locale === "es"
          ? "Recibe notificaciones, acepta solicitudes y coordina con tus huéspedes."
          : "Get notifications, accept requests and coordinate with your guests.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 md:py-24">
        <div className="page-grid grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
              {dictionary.nav.host}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-[#231F20] md:text-5xl">
              {locale === "es" ? "Gana con tu auto" : "Earn with your car"}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
              {dictionary.host.subtitle}
            </p>
            <div className="mt-8">
              <Link
                className="inline-flex min-h-[44px] cursor-pointer items-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                href="/host/list-your-car"
              >
                {dictionary.actions.becomeHost}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              alt={locale === "es" ? "Llaves de auto" : "Car keys"}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="page-grid">
          <SectionHeading
            eyebrow={dictionary.host.benefits}
            title={locale === "es" ? "Por qué publicar aquí" : "Why list here"}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-[#E5E5E5] bg-white p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EDE9FE]">
                    <Icon className="h-5 w-5 text-[#7C3AED]" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[#231F20]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {benefit.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earnings calculator */}
      <section className="page-grid py-16">
        <SectionHeading
          title={dictionary.host.calculator}
          subtitle={
            locale === "es"
              ? "Estima cuánto puedes generar con tu flota."
              : "Estimate how much your fleet can generate."
          }
        />
        <div className="mt-8">
          <EarningsCalculator
            locale={locale}
            title={dictionary.host.calculator}
          />
        </div>
      </section>

      {/* Listing steps */}
      <section className="bg-[#FAF5FF] py-16">
        <div className="page-grid">
          <SectionHeading
            eyebrow={locale === "es" ? "Proceso simple" : "Simple process"}
            title={dictionary.host.wizardTitle}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {listingSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#7C3AED]" />
                      <h3 className="text-base font-semibold text-[#231F20]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#231F20] py-16">
        <div className="page-grid text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {locale === "es" ? "Lista tu auto hoy" : "List your car today"}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
            {dictionary.host.title}
          </p>
          <div className="mt-8">
            <Link
              className="inline-flex min-h-[44px] cursor-pointer items-center rounded-lg bg-[#7C3AED] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
              href="/host/list-your-car"
            >
              {dictionary.host.listYourCar}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
