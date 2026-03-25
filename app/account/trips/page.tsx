import Link from 'next/link';

import { AccountShell, PageIntro } from '@/components/site-chrome';
import { trips, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { formatCurrency, formatDateRange, getLocalizedText, getVehicleBySlug } from '@/lib/utils';

export default async function TripsPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow="Account"
        subtitle={
          locale === 'es'
            ? 'Vista mock del historial y próximos viajes.'
            : 'Mock view of upcoming and past trips.'
        }
        title={dictionary.account.tripsTitle}
      />

      <AccountShell current="trips" dictionary={dictionary} locale={locale}>
        <div className="grid gap-4">
          {trips.map((trip) => {
            const vehicle = getVehicleBySlug(vehicles, trip.vehicleSlug);

            if (!vehicle) {
              return null;
            }

            return (
              <article className="surface-strong rounded-[1.8rem] p-6 md:p-8" key={trip.id}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                      {trip.status === 'upcoming'
                        ? locale === 'es'
                          ? 'Próximo viaje'
                          : 'Upcoming trip'
                        : locale === 'es'
                          ? 'Completado'
                          : 'Completed'}
                    </p>
                    <h2 className="mt-3 font-display text-4xl">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h2>
                  </div>
                  <p className="text-lg font-semibold">{formatCurrency(trip.total, locale)}</p>
                </div>
                <p className="mt-4 text-base text-[color:var(--muted)]">
                  {formatDateRange(trip.startDate, trip.endDate, locale)} ·{' '}
                  {getLocalizedText(locale, trip.pickupLabel)}
                </p>
                <Link
                  className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)]"
                  href={`/vehicle/${vehicle.slug}`}
                >
                  {dictionary.actions.viewTrip}
                </Link>
              </article>
            );
          })}
        </div>
      </AccountShell>
    </>
  );
}
