/**
 * @file account/trips/page.tsx
 * @description Account trips page — mock list of upcoming and completed trips.
 * @module app/account/trips
 * @exports TripsPage
 */

import Image from 'next/image';
import Link from 'next/link';

import { AccountShell } from '@/components/site-chrome';
import { trips, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { formatCurrency, formatDateRange, getLocalizedText, getVehicleBySlug } from '@/lib/utils';

/**
 * Trips account page with restyled cards showing status badge, thumbnail, dates, and CTA.
 *
 * @returns Full-page server component.
 *
 * @example
 * // Rendered automatically at /account/trips
 */
export default async function TripsPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <AccountShell current="trips" dictionary={dictionary} locale={locale}>
      <h1 className="mb-6 text-2xl font-bold text-[#231F20]">{dictionary.account.tripsTitle}</h1>

      <div className="grid gap-4">
        {trips.map((trip) => {
          const vehicle = getVehicleBySlug(vehicles, trip.vehicleSlug);

          if (!vehicle) {
            return null;
          }

          const isUpcoming = trip.status === 'upcoming';

          return (
            <article className="surface-panel flex gap-4 rounded-[1.6rem] p-4" key={trip.id}>
              {/* Thumbnail */}
              <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                <Image
                  alt={vehicle.images[0].alt[locale]}
                  className="object-cover"
                  fill
                  sizes="80px"
                  src={vehicle.images[0].src}
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isUpcoming
                          ? 'bg-[var(--primary-soft)] text-[var(--primary)]'
                          : 'bg-[var(--surface-alt)] text-[var(--muted)]'
                      }`}
                    >
                      {isUpcoming
                        ? locale === 'es'
                          ? 'Próximo'
                          : 'Upcoming'
                        : locale === 'es'
                          ? 'Completado'
                          : 'Completed'}
                    </span>
                    <h2 className="mt-1.5 text-base font-semibold text-[#231F20]">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h2>
                  </div>
                  <p className="text-sm font-semibold text-[#231F20]">
                    {formatCurrency(trip.total, locale)}
                  </p>
                </div>

                <p className="mt-1 text-sm text-[#6B7280]">
                  {formatDateRange(trip.startDate, trip.endDate, locale)} ·{' '}
                  {getLocalizedText(locale, trip.pickupLabel)}
                </p>

                <Link
                  className="mt-3 inline-flex min-h-[36px] cursor-pointer items-center rounded-full border border-[rgba(198,184,163,0.64)] px-4 py-1.5 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                  href={`/vehicle/${vehicle.slug}`}
                >
                  {dictionary.actions.viewTrip}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </AccountShell>
  );
}
