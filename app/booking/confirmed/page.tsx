import { CalendarPlus2, CheckCircle2, MessageSquareMore } from 'lucide-react';
import Link from 'next/link';

import { PageIntro } from '@/components/site-chrome';
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

  return (
    <>
      <PageIntro
        eyebrow="Confirmed"
        subtitle={dictionary.confirmed.subtitle}
        title={dictionary.confirmed.title}
      />

      <section className="page-grid pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section
            className="surface-strong rounded-[2rem] p-6 md:p-8"
            data-testid="confirmed-summary"
          >
            <div className="flex items-center gap-3 text-[var(--success)]">
              <CheckCircle2 className="h-7 w-7" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                {locale === 'es' ? 'Reservado' : 'Booked'}
              </span>
            </div>
            <h2 className="mt-5 font-display text-4xl">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>
            <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-[#f7f0e6] p-5 text-sm">
              <div className="flex justify-between gap-3">
                <span>{start}</span>
                <span>{end}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>{pickup.toUpperCase()}</span>
                <span>{formatCurrency(vehicle.pricePerDay * 4 + 84, locale)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>{locale === 'es' ? 'Host asignado' : 'Assigned host'}</span>
                <span>{vehicle.host.name}</span>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18130f] px-5 py-3 text-sm font-semibold text-white"
                href="/account/messages"
              >
                <MessageSquareMore className="h-4 w-4" />
                {dictionary.confirmed.contact}
              </Link>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-semibold"
                type="button"
              >
                <CalendarPlus2 className="h-4 w-4" />
                {dictionary.confirmed.calendar}
              </button>
            </div>
          </section>

          <section className="surface-strong rounded-[2rem] p-6 md:p-8">
            <h2 className="font-display text-4xl">{dictionary.confirmed.instructions}</h2>
            <ol className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--muted)]">
              <li>
                1.{' '}
                {locale === 'es'
                  ? 'Tu host te escribirá 24h antes con el punto exacto de entrega.'
                  : 'Your host will message you 24 hours before arrival with the exact handoff point.'}
              </li>
              <li>
                2.{' '}
                {locale === 'es'
                  ? 'En MCO, el encuentro se coordina por garage / terminal para evitar esperas.'
                  : 'At MCO, the handoff is coordinated by terminal or garage to avoid waiting.'}
              </li>
              <li>
                3.{' '}
                {locale === 'es'
                  ? 'El vehículo llega listo, limpio y con la política de devolución visible.'
                  : 'The vehicle arrives clean, ready and with the return policy clearly visible.'}
              </li>
            </ol>
            <div className="mt-8 rounded-[1.5rem] bg-[#18130f] p-5 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-white/45">Next</p>
              <p className="mt-3 text-lg text-white/78">
                {locale === 'es'
                  ? 'Revisa tu inbox demo para ver el hilo con el host y los próximos mensajes.'
                  : 'Open the demo inbox to see the host thread and the next scheduled messages.'}
              </p>
              <Link
                className="mt-5 inline-flex text-sm font-semibold text-[var(--accent-soft)]"
                href="/account/trips"
              >
                {dictionary.confirmed.continue}
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
