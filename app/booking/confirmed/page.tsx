/**
 * @file booking/confirmed/page.tsx
 * @description Booking confirmation page with itinerary-first post-booking guidance.
 * @module app/booking/confirmed
 * @exports BookingConfirmedPage
 */

import { Calendar, Check, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { formatCurrency, getVehicleBySlug } from '@/lib/utils';

interface BookingConfirmedPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BookingConfirmedPage({ searchParams }: BookingConfirmedPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const vehicle = getVehicleBySlug(vehicles, slug ?? vehicles[0].slug) ?? vehicles[0];
  const start = Array.isArray(params.start) ? params.start[0] : (params.start ?? '2026-04-18');
  const end = Array.isArray(params.end) ? params.end[0] : (params.end ?? '2026-04-22');
  const pickup = Array.isArray(params.pickup) ? params.pickup[0] : (params.pickup ?? 'mco');

  const nextSteps = [
    {
      icon: MessageCircle,
      title: dictionary.confirmed.contact,
      detail:
        locale === 'es'
          ? 'Tu host te escribirá con el punto exacto de entrega y la foto del handoff.'
          : 'Your host will message you with the exact handoff point and reference photo.',
      href: '/account/messages',
    },
    {
      icon: MapPin,
      title: locale === 'es' ? 'Revisa pickup y equipaje' : 'Review pickup and luggage',
      detail:
        locale === 'es'
          ? 'Confirma garage, lobby o terminal según tu llegada y el equipaje del grupo.'
          : 'Confirm garage, lobby or terminal based on your arrival and group luggage.',
      href: '/account/trips',
    },
    {
      icon: Calendar,
      title: dictionary.confirmed.calendar,
      detail:
        locale === 'es'
          ? 'Guarda el rango del viaje para no perder la coordinación con el host.'
          : 'Save the trip window so you keep coordination with your host visible.',
      href: '/account/trips',
    },
  ] as const;

  return (
    <div className="page-grid page-section">
      <section className="surface-panel overflow-hidden rounded-[2rem]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--cta-success)] text-white">
              <Check className="h-8 w-8" strokeWidth={3} />
            </div>
            <p className="eyebrow mt-6">{dictionary.confirmed.title}</p>
            <h1 className="heading-balance mt-4 text-fluid-h2 font-black text-[var(--foreground)]">
              {locale === 'es'
                ? 'Tu viaje ya tiene host, contexto y punto de entrega.'
                : 'Your trip now has a host, context and delivery point.'}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
              {dictionary.confirmed.subtitle}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <SummaryItem label={locale === 'es' ? 'Inicio' : 'Start'} value={start} />
              <SummaryItem label={locale === 'es' ? 'Fin' : 'End'} value={end} />
              <SummaryItem
                label={locale === 'es' ? 'Pickup' : 'Pickup'}
                value={pickup.toUpperCase()}
              />
            </div>
          </div>

          <div className="relative min-h-[18rem]">
            <Image
              alt={vehicle.images[0].alt[locale]}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              src={vehicle.images[0].src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                {locale === 'es' ? 'Vehículo bloqueado' : 'Vehicle locked in'}
              </p>
              <p className="mt-2 text-2xl font-black">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div className="space-y-6">
          <section
            className="surface-panel rounded-[2rem] p-6 md:p-8"
            data-testid="confirmed-summary"
          >
            <p className="eyebrow">{dictionary.confirmed.instructions}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {nextSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    className="rounded-[1.4rem] bg-[var(--surface-alt)] p-5"
                    key={step.title}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-4 text-lg font-black text-[var(--foreground)]">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
                    <Link
                      className="mt-4 inline-flex text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]"
                      href={step.href}
                    >
                      {locale === 'es' ? 'Abrir' : 'Open'}
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="flex flex-wrap gap-3">
            <Link className="btn-primary" href="/account/trips">
              {dictionary.confirmed.continue}
            </Link>
            <Link className="btn-outline" href="/account/messages">
              {locale === 'es' ? 'Ver mensajes' : 'View messages'}
            </Link>
            <Link className="btn-outline" href="/search">
              {locale === 'es' ? 'Buscar más autos' : 'Browse more cars'}
            </Link>
          </div>
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <div className="surface-panel rounded-[2rem] p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  alt={vehicle.host.name}
                  className="object-cover"
                  fill
                  src={vehicle.host.avatar}
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                  {locale === 'es' ? 'Host asignado' : 'Assigned host'}
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                  {vehicle.host.name}
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-[1.4rem] bg-[var(--surface-alt)] p-4 text-sm leading-7 text-[var(--text-soft)]">
              <p>
                {start} → {end}
              </p>
              <p>{pickup.toUpperCase()}</p>
              <p className="mt-1 font-semibold text-[var(--foreground)]">
                {formatCurrency(vehicle.pricePerDay * 4 + 84, locale)}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] bg-[var(--surface-alt)] px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{value}</p>
    </div>
  );
}
