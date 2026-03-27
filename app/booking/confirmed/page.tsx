/**
 * @file booking/confirmed/page.tsx
 * @description Booking confirmation page — success state with next steps and CTAs.
 * @module app/booking/confirmed
 * @exports BookingConfirmedPage
 */

import { Calendar, Check, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { vehicles } from "@/data/mock";
import { getDictionary, getLocale } from "@/lib/i18n";
import { formatCurrency, getVehicleBySlug } from "@/lib/utils";

interface BookingConfirmedPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * Booking confirmed page with green checkmark hero, trip summary, next-step cards, and CTAs.
 *
 * @param searchParams - URL search params with slug, start, end, pickup.
 * @returns Full-page server component.
 *
 * @example
 * // Rendered at /booking/confirmed?slug=toyota-camry&start=2026-04-18&end=2026-04-22&pickup=mco
 */
export default async function BookingConfirmedPage({
  searchParams,
}: BookingConfirmedPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const vehicle =
    getVehicleBySlug(vehicles, slug ?? vehicles[0].slug) ?? vehicles[0];
  const start = Array.isArray(params.start)
    ? params.start[0]
    : (params.start ?? "2026-04-18");
  const end = Array.isArray(params.end)
    ? params.end[0]
    : (params.end ?? "2026-04-22");
  const pickup = Array.isArray(params.pickup)
    ? params.pickup[0]
    : (params.pickup ?? "mco");

  const nextSteps = [
    {
      icon: MessageCircle,
      title: dictionary.confirmed.contact,
      detail:
        locale === "es"
          ? "Tu host te escribirá con los detalles de entrega."
          : "Your host will message you with the handoff details.",
      href: "/account/messages",
      cta: locale === "es" ? "Abrir mensajes" : "Open messages",
    },
    {
      icon: MapPin,
      title:
        locale === "es"
          ? "Confirma el punto de entrega"
          : "Confirm pickup point",
      detail:
        locale === "es"
          ? "Coordina el garage, terminal o zona exacta con tu host."
          : "Coordinate the exact garage, terminal or zone with your host.",
      href: "/account/messages",
      cta: locale === "es" ? "Coordinar" : "Coordinate",
    },
    {
      icon: Calendar,
      title: dictionary.confirmed.calendar,
      detail:
        locale === "es"
          ? "Agrega las fechas a tu calendario para no olvidar nada."
          : "Add the dates to your calendar so you do not miss anything.",
      href: "#",
      cta: locale === "es" ? "Añadir" : "Add",
    },
  ];

  return (
    <div className="page-grid py-12 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Checkmark hero */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#22C55E]">
            <Check className="h-8 w-8 text-white" strokeWidth={3} />
          </div>
          <h1 className="mt-5 text-3xl font-bold text-[#231F20] md:text-4xl">
            {locale === "es" ? "¡Reserva confirmada!" : "Booking confirmed!"}
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[#6B7280]">
            {dictionary.confirmed.subtitle}
          </p>
        </div>

        {/* Trip summary */}
        <div
          className="mt-8 rounded-xl border border-[#E5E5E5] bg-white overflow-hidden"
          data-testid="confirmed-summary"
        >
          {/* Vehicle thumbnail */}
          <div className="relative aspect-[16/9]">
            <Image
              src={vehicle.images[0]}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>
          <div className="p-6">
            <h2 className="text-base font-semibold text-[#231F20]">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>
            <div className="mt-4 grid gap-2 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-[#6B7280]">
                  {locale === "es" ? "Fecha de inicio" : "Start date"}
                </span>
                <span className="font-medium text-[#231F20]">{start}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[#6B7280]">
                  {locale === "es" ? "Fecha de fin" : "End date"}
                </span>
                <span className="font-medium text-[#231F20]">{end}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[#6B7280]">
                  {locale === "es" ? "Punto de entrega" : "Pickup point"}
                </span>
                <span className="font-medium text-[#231F20]">
                  {pickup.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-[#6B7280]">
                  {locale === "es" ? "Host asignado" : "Assigned host"}
                </span>
                <div className="flex items-center gap-2">
                  <Image
                    src={vehicle.host.avatar}
                    alt={vehicle.host.name}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                  <span className="font-medium text-[#231F20]">
                    {vehicle.host.name}
                  </span>
                </div>
              </div>
              <div className="mt-1 flex justify-between gap-3 border-t border-[#E5E5E5] pt-3">
                <span className="font-semibold text-[#231F20]">Total</span>
                <span className="font-bold text-[#231F20]">
                  {formatCurrency(vehicle.pricePerDay * 4 + 84, locale)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <h2 className="mt-8 text-lg font-bold text-[#231F20]">
          {dictionary.confirmed.instructions}
        </h2>
        <div className="mt-4 grid gap-3">
          {nextSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="flex items-start gap-4 rounded-xl border border-[#E5E5E5] bg-white p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDE9FE]">
                  <Icon className="h-5 w-5 text-[#7C3AED]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#231F20]">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-sm text-[#6B7280]">{step.detail}</p>
                </div>
                <Link
                  className="shrink-0 cursor-pointer text-sm font-semibold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
                  href={step.href}
                >
                  {step.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
            href="/account/trips"
          >
            {dictionary.confirmed.continue}
          </Link>
          <Link
            className="inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center rounded-lg border border-[#E5E5E5] px-6 py-3 text-sm font-semibold text-[#231F20] transition-colors hover:border-[#7C3AED] hover:text-[#7C3AED]"
            href="/search"
          >
            {locale === "es" ? "Buscar más autos" : "Browse more cars"}
          </Link>
        </div>
      </div>
    </div>
  );
}
