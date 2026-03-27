/**
 * @file app/checkout/page.tsx
 * @description Checkout page with Turo-style two-column layout: guest form, delivery selection, add-ons, order summary.
 * @module app/checkout
 * @exports CheckoutPage
 */

import { MapPin, Shield, Sparkles, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { checkoutAddons, vehicles } from "@/data/mock";
import { getDictionary, getLocale } from "@/lib/i18n";
import {
  createQueryString,
  formatCurrency,
  getLocalizedText,
  getVehicleBySlug,
} from "@/lib/utils";

interface CheckoutPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
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

  const tripDays = 4;
  const tripSubtotal = vehicle.pricePerDay * tripDays;
  const fees = 42;
  const total =
    tripSubtotal +
    fees +
    checkoutAddons.slice(0, 2).reduce((sum, item) => sum + item.price, 0);

  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <div className="page-grid py-10 pb-16">
      <h1 className="mb-8 text-2xl font-bold text-[#231F20]">
        Confirmar reserva
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
        {/* LEFT: Form sections */}
        <div className="space-y-6">
          {/* Guest info */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-[#7C3AED]" />
              <h2 className="text-lg font-semibold text-[#231F20]">
                {dictionary.checkout.guestInfo}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckoutField
                label="Nombre completo"
                placeholder="Valentina Gómez"
              />
              <CheckoutField
                label="WhatsApp"
                placeholder="+57 300 555 0123"
                type="tel"
              />
              <CheckoutField
                label="Aerolínea / vuelo"
                placeholder="Avianca AV 044"
              />
              <CheckoutField
                label="Hotel o dirección"
                placeholder="Grand Floridian Resort"
              />
            </div>
          </div>

          {/* Delivery selection */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#7C3AED]" />
              <h2 className="text-lg font-semibold text-[#231F20]">
                Punto de entrega
              </h2>
            </div>
            <div className="space-y-3">
              {vehicle.deliveryOptions.map((opt, index) => (
                <label
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#E5E5E5] p-4 transition-colors hover:border-[#7C3AED] hover:bg-[#FAF5FF]"
                  key={opt.label.es}
                >
                  <input
                    className="mt-0.5 h-4 w-4 cursor-pointer accent-[#7C3AED]"
                    defaultChecked={index === 0}
                    name="delivery"
                    type="radio"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#231F20]">
                      {getLocalizedText(locale, opt.label)}
                    </p>
                    <p className="mt-0.5 text-xs text-[#6B7280]">
                      {getLocalizedText(locale, opt.detail)}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[#7C3AED]">
                    +{formatCurrency(opt.fee, locale)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#7C3AED]" />
              <h2 className="text-lg font-semibold text-[#231F20]">
                Extras opcionales
              </h2>
            </div>
            <div className="space-y-3">
              {checkoutAddons.map((addon, index) => (
                <label
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-[#E5E5E5] px-4 py-4 transition-colors hover:border-[#7C3AED] hover:bg-[#FAF5FF]"
                  key={addon.id}
                >
                  <div className="flex items-start gap-3">
                    <input
                      className="mt-0.5 h-4 w-4 cursor-pointer accent-[#7C3AED]"
                      defaultChecked={index < 2}
                      type="checkbox"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#231F20]">
                        {addon.title[locale]}
                      </p>
                      <p className="mt-0.5 text-xs text-[#6B7280]">
                        {addon.detail[locale]}
                      </p>
                    </div>
                  </div>
                  <span className="flex-shrink-0 text-sm font-semibold text-[#231F20]">
                    {formatCurrency(addon.price, locale)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment (demo) */}
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-[#7C3AED]" />
              <h2 className="text-lg font-semibold text-[#231F20]">
                {dictionary.checkout.payment}
              </h2>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              Prototipo — no se procesa ningún pago real
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <CheckoutField
                label="Número de tarjeta"
                placeholder="4242 4242 4242 4242"
              />
              <CheckoutField
                label="Nombre en la tarjeta"
                placeholder="Valentina Gómez"
              />
              <CheckoutField label="Vencimiento" placeholder="12/29" />
              <CheckoutField label="CVC" placeholder="123" />
            </div>
          </div>

          {/* Confirm button */}
          <Link
            className="block w-full cursor-pointer rounded-xl bg-[#22C55E] py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[#16a34a]"
            data-testid="confirm-booking"
            href={`/booking/confirmed?${createQueryString({ slug: vehicle.slug, start, end, pickup })}`}
          >
            Confirmar reserva
          </Link>
        </div>

        {/* RIGHT: Order summary */}
        <div className="h-fit lg:sticky lg:top-24">
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-[#231F20]">
              Resumen
            </h2>

            {/* Vehicle image */}
            <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                alt={title}
                className="object-cover"
                fill
                sizes="380px"
                src={vehicle.images[0]}
              />
            </div>

            <p className="font-semibold text-[#231F20]">{title}</p>
            <p className="mb-4 text-sm text-[#6B7280]">
              Viaje de {tripDays} días
            </p>

            {/* Trip dates */}
            <div className="mb-4 rounded-lg bg-[#F5F5F5] p-3 text-sm">
              <div className="flex justify-between gap-2 text-[#6B7280]">
                <span>{start}</span>
                <span>→</span>
                <span>{end}</span>
              </div>
              <p className="mt-1 text-xs text-[#6B7280]">
                Entrega: {pickup.toUpperCase()} · Host: {vehicle.host.name}
              </p>
            </div>

            {/* Price breakdown */}
            <div className="space-y-2 border-t border-[#E5E5E5] pt-4 text-sm">
              <div className="flex justify-between text-[#6B7280]">
                <span>
                  {formatCurrency(vehicle.pricePerDay, locale)} × {tripDays}{" "}
                  días
                </span>
                <span>{formatCurrency(tripSubtotal, locale)}</span>
              </div>
              <div className="flex justify-between text-[#6B7280]">
                <span>Plataforma + entrega</span>
                <span>{formatCurrency(fees, locale)}</span>
              </div>
              {checkoutAddons.slice(0, 2).map((addon) => (
                <div
                  className="flex justify-between text-[#6B7280]"
                  key={addon.id}
                >
                  <span>{addon.title[locale]}</span>
                  <span>{formatCurrency(addon.price, locale)}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-[#E5E5E5] pt-3 text-base font-semibold text-[#231F20]">
                <span>Total</span>
                <span>{formatCurrency(total, locale)}</span>
              </div>
            </div>

            {/* Protection note */}
            <div className="mt-4 border-t border-[#E5E5E5] pt-4">
              <p className="text-xs text-[#6B7280]">
                Cancelación flexible hasta 48h antes de la entrega. Soporte del
                host vía inbox y WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * @param label - Input label text
 * @param placeholder - Placeholder text
 * @param type - HTML input type
 * @returns Labeled input field for checkout form
 * @example <CheckoutField label="Nombre" placeholder="Juan Pérez" />
 */
function CheckoutField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-[#231F20]">
        {label}
      </span>
      <input
        className="w-full cursor-text rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] px-4 py-3 text-sm text-[#231F20] outline-none transition-colors placeholder:text-[#6B7280] focus:border-[#7C3AED] focus:bg-white"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
