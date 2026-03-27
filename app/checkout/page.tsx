/**
 * @file app/checkout/page.tsx
 * @description Calm Orlando-first checkout focused on itinerary clarity and trust.
 * @module app/checkout
 * @exports CheckoutPage
 */

import { MapPin, Shield, Sparkles, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { checkoutAddons, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { createQueryString, formatCurrency, getLocalizedText, getVehicleBySlug } from '@/lib/utils';

interface CheckoutPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const vehicle = getVehicleBySlug(vehicles, slug ?? vehicles[0].slug) ?? vehicles[0];
  const start = Array.isArray(params.start) ? params.start[0] : (params.start ?? '2026-04-18');
  const end = Array.isArray(params.end) ? params.end[0] : (params.end ?? '2026-04-22');
  const pickup = Array.isArray(params.pickup) ? params.pickup[0] : (params.pickup ?? 'mco');

  const tripDays = 4;
  const tripSubtotal = vehicle.pricePerDay * tripDays;
  const fees = 42;
  const defaultAddons = checkoutAddons.slice(0, 2);
  const total = tripSubtotal + fees + defaultAddons.reduce((sum, item) => sum + item.price, 0);
  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <div className="page-grid page-section">
      <section className="surface-panel rounded-[2rem] p-6 md:p-8">
        <p className="eyebrow">{dictionary.checkout.title}</p>
        <h1 className="heading-balance mt-4 text-fluid-h2 font-black text-[var(--foreground)]">
          {locale === 'es'
            ? 'Un checkout pensado para mantener el contexto del viaje.'
            : 'A checkout designed to keep your trip context intact.'}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)]">
          {dictionary.checkout.subtitle}
        </p>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-6">
          <div className="surface-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary)]">
              <MapPin className="h-4 w-4" />
              {locale === 'es' ? 'Resumen del viaje' : 'Trip summary'}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <SummaryBlock
                label={locale === 'es' ? 'Pickup' : 'Pickup'}
                value={pickup.toUpperCase()}
              />
              <SummaryBlock
                label={locale === 'es' ? 'Fechas' : 'Dates'}
                value={`${start} → ${end}`}
              />
              <SummaryBlock label={locale === 'es' ? 'Host' : 'Host'} value={vehicle.host.name} />
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-6">
            <div className="mb-5 flex items-center gap-2">
              <User className="h-5 w-5 text-[var(--primary)]" />
              <h2 className="text-xl font-black text-[var(--foreground)]">
                {dictionary.checkout.guestInfo}
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <CheckoutField
                label={locale === 'es' ? 'Nombre completo' : 'Full name'}
                placeholder="Valentina Gómez"
                type="text"
              />
              <CheckoutField label="WhatsApp" placeholder="+57 300 555 0123" type="tel" />
              <CheckoutField
                label={locale === 'es' ? 'Aerolínea / vuelo' : 'Airline / flight'}
                placeholder="Avianca AV 044"
                type="text"
              />
              <CheckoutField
                label={locale === 'es' ? 'Hotel o dirección' : 'Hotel or address'}
                placeholder="Grand Floridian Resort"
                type="text"
              />
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-6">
            <div className="mb-5 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[var(--primary)]" />
              <h2 className="text-xl font-black text-[var(--foreground)]">
                {locale === 'es' ? 'Entrega y handoff' : 'Delivery and handoff'}
              </h2>
            </div>
            <div className="space-y-3">
              {vehicle.deliveryOptions.map((option, index) => (
                <label
                  className="flex cursor-pointer items-start gap-3 rounded-[1.4rem] border border-[rgba(198,184,163,0.56)] bg-[var(--surface-alt)] p-4 transition-colors hover:border-[var(--primary)]"
                  key={option.label.es}
                >
                  <input
                    className="mt-1 h-4 w-4 accent-[var(--primary)]"
                    defaultChecked={index === 0}
                    name="delivery"
                    type="radio"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {getLocalizedText(locale, option.label)}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {getLocalizedText(locale, option.detail)}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--accent-deep)]">
                    +{formatCurrency(option.fee, locale)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-6">
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[var(--primary)]" />
              <h2 className="text-xl font-black text-[var(--foreground)]">
                {locale === 'es' ? 'Extras para el viaje' : 'Trip extras'}
              </h2>
            </div>
            <div className="space-y-3">
              {checkoutAddons.map((addon, index) => (
                <label
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-[1.4rem] border border-[rgba(198,184,163,0.56)] bg-white p-4 transition-colors hover:border-[var(--primary)]"
                  key={addon.id}
                >
                  <div className="flex items-start gap-3">
                    <input
                      className="mt-1 h-4 w-4 accent-[var(--primary)]"
                      defaultChecked={index < 2}
                      type="checkbox"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {addon.title[locale]}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        {addon.detail[locale]}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {formatCurrency(addon.price, locale)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="surface-panel rounded-[2rem] p-6">
            <div className="mb-5 flex items-center gap-2">
              <Shield className="h-5 w-5 text-[var(--primary)]" />
              <h2 className="text-xl font-black text-[var(--foreground)]">
                {dictionary.checkout.payment}
              </h2>
            </div>
            <div className="rounded-[1.2rem] border border-[rgba(240,181,118,0.56)] bg-[rgba(240,181,118,0.14)] p-4 text-sm leading-6 text-[#6a563e]">
              {locale === 'es'
                ? 'Prototipo: no se procesa ningún pago real. Esta pantalla está diseñada para validar claridad, confianza y secuencia operativa.'
                : 'Prototype: no real payment is processed. This screen is designed to validate clarity, trust and operational sequence.'}
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <CheckoutField
                label={locale === 'es' ? 'Número de tarjeta' : 'Card number'}
                placeholder="4242 4242 4242 4242"
                type="text"
              />
              <CheckoutField
                label={locale === 'es' ? 'Nombre en la tarjeta' : 'Name on card'}
                placeholder="Valentina Gómez"
                type="text"
              />
              <CheckoutField
                label={locale === 'es' ? 'Vencimiento' : 'Expiry'}
                placeholder="12/29"
                type="text"
              />
              <CheckoutField label="CVC" placeholder="123" type="text" />
            </div>
          </div>

          <Link
            className="btn-success w-full justify-center text-base"
            data-testid="confirm-booking"
            href={`/booking/confirmed?${createQueryString({ slug: vehicle.slug, start, end, pickup })}`}
          >
            {locale === 'es' ? 'Confirmar reserva demo' : 'Confirm demo booking'}
          </Link>
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <div className="surface-panel rounded-[2rem] p-6">
            <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[1.4rem]">
              <Image
                alt={vehicle.images[0].alt[locale]}
                className="object-cover"
                fill
                sizes="24rem"
                src={vehicle.images[0].src}
              />
            </div>
            <h2 className="text-xl font-black text-[var(--foreground)]">{title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {locale === 'es'
                ? `${tripDays} días con entrega orientada a ${pickup.toUpperCase()}.`
                : `${tripDays} days with handoff focused on ${pickup.toUpperCase()}.`}
            </p>

            <div className="mt-5 rounded-[1.4rem] bg-[var(--surface-alt)] p-4 text-sm leading-6 text-[var(--text-soft)]">
              <p>
                {start} → {end}
              </p>
              <p className="mt-1">
                {locale === 'es' ? 'Host' : 'Host'}: {vehicle.host.name}
              </p>
            </div>

            <div className="mt-5 space-y-3 border-t border-[rgba(198,184,163,0.46)] pt-5 text-sm">
              <div className="flex justify-between text-[var(--text-soft)]">
                <span>
                  {formatCurrency(vehicle.pricePerDay, locale)} × {tripDays}{' '}
                  {locale === 'es' ? 'días' : 'days'}
                </span>
                <span>{formatCurrency(tripSubtotal, locale)}</span>
              </div>
              <div className="flex justify-between text-[var(--text-soft)]">
                <span>
                  {locale === 'es' ? 'Plataforma + coordinación' : 'Platform + coordination'}
                </span>
                <span>{formatCurrency(fees, locale)}</span>
              </div>
              {defaultAddons.map((addon) => (
                <div className="flex justify-between text-[var(--text-soft)]" key={addon.id}>
                  <span>{addon.title[locale]}</span>
                  <span>{formatCurrency(addon.price, locale)}</span>
                </div>
              ))}
              <div className="flex justify-between border-t border-[rgba(198,184,163,0.46)] pt-3 text-base font-semibold text-[var(--foreground)]">
                <span>Total</span>
                <span>{formatCurrency(total, locale)}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function CheckoutField({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[var(--text-soft)]">{label}</span>
      <input
        className="w-full rounded-[1rem] border border-[rgba(198,184,163,0.58)] bg-white px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-colors focus:border-[var(--primary)]"
        defaultValue={placeholder}
        type={type}
      />
    </label>
  );
}

function SummaryBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] bg-[var(--surface-alt)] px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{value}</p>
    </div>
  );
}
