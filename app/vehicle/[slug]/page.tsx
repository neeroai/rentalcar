import { Shield, Star, Timer, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { VehicleCard } from '@/components/motion-ui';
import { PageIntro } from '@/components/site-chrome';
import { vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import {
  createQueryString,
  formatCurrency,
  getLocalizedText,
  getRelatedVehicles,
  getVehicleBySlug,
} from '@/lib/utils';

interface VehicleDetailPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function VehicleDetailPage({ params, searchParams }: VehicleDetailPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const vehicle = getVehicleBySlug(vehicles, slug);

  if (!vehicle) {
    notFound();
  }

  const searchState = {
    pickup: Array.isArray(query.pickup) ? query.pickup[0] : (query.pickup ?? 'mco'),
    start: Array.isArray(query.start) ? query.start[0] : (query.start ?? '2026-04-18'),
    end: Array.isArray(query.end) ? query.end[0] : (query.end ?? '2026-04-22'),
    time: Array.isArray(query.time) ? query.time[0] : (query.time ?? '10:00'),
    category: Array.isArray(query.category)
      ? query.category[0]
      : (query.category ?? vehicle.category),
  };

  const checkoutQuery = createQueryString({
    slug: vehicle.slug,
    ...searchState,
  });

  const related = getRelatedVehicles(vehicles, vehicle);
  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

  return (
    <>
      <PageIntro
        eyebrow={locale === 'es' ? 'Detalle del vehículo' : 'Vehicle detail'}
        subtitle={getLocalizedText(locale, vehicle.intro)}
        title={title}
      />

      <section className="page-grid pb-14 md:pb-20">
        <Link
          className="mb-6 inline-flex text-sm font-semibold text-[var(--accent)]"
          href={`/search?${createQueryString(searchState)}`}
        >
          {dictionary.common.backToSearch}
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 md:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem]">
              <Image
                alt={title}
                className="h-full w-full object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                src={vehicle.images[0]}
              />
            </div>
            <div className="grid gap-4">
              {vehicle.images.slice(1).map((image) => (
                <div
                  className="relative min-h-[10.5rem] overflow-hidden rounded-[1.75rem]"
                  key={image}
                >
                  <Image
                    alt={title}
                    className="h-full w-full object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 28vw"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="surface-strong rounded-[2rem] p-6 lg:sticky lg:top-24 lg:h-fit">
            <p className="eyebrow">{dictionary.vehicle.bookCard}</p>
            <p className="mt-3 font-display text-4xl">
              {formatCurrency(vehicle.pricePerDay, locale)}
              <span className="text-base font-medium text-[color:var(--muted)]">
                {' '}
                {dictionary.common.perDay}
              </span>
            </p>
            <div className="mt-6 space-y-3 rounded-[1.5rem] bg-[#f7f0e6] p-4 text-sm">
              <p>{searchState.start}</p>
              <p>{searchState.end}</p>
              <p>{searchState.time}</p>
              <p>{searchState.pickup.toUpperCase()}</p>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-[color:var(--muted)]">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-[var(--accent)]" />
                {vehicle.rating} · {vehicle.tripsCount} {dictionary.common.trips}
              </div>
              <div className="flex items-center gap-3">
                <User className="h-4 w-4 text-[var(--accent)]" />
                {vehicle.host.name} · {getLocalizedText(locale, vehicle.host.badge)}
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-[var(--accent)]" />
                {dictionary.search.filters.delivery}
              </div>
              <div className="flex items-center gap-3">
                <Timer className="h-4 w-4 text-[var(--accent)]" />
                {getLocalizedText(locale, vehicle.host.responseTime)}
              </div>
            </div>
            <Link
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#18130f] px-5 py-4 text-sm font-semibold text-white"
              data-testid="booking-cta"
              href={`/checkout?${checkoutQuery}`}
            >
              {dictionary.actions.continue}
            </Link>
          </aside>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.overview}</h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-[color:var(--muted)]">
                {vehicle.highlights.map((highlight) => (
                  <p key={highlight.es}>{getLocalizedText(locale, highlight)}</p>
                ))}
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.includes}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {vehicle.features.map((feature) => (
                  <span
                    className="rounded-full border border-black/10 px-4 py-2 text-sm"
                    key={feature}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.pickupOptions}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {vehicle.deliveryOptions.map((option) => (
                  <article
                    className="rounded-[1.4rem] border border-black/10 bg-[#fcf8f2] p-5"
                    key={option.label.es}
                  >
                    <p className="font-semibold">{getLocalizedText(locale, option.label)}</p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                      {getLocalizedText(locale, option.detail)}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
                      +{formatCurrency(option.fee, locale)}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.policies}</h2>
              <div className="mt-6 space-y-5">
                {vehicle.policies.map((policy) => (
                  <article
                    className="border-b border-black/8 pb-5 last:border-0 last:pb-0"
                    key={policy.title.es}
                  >
                    <p className="text-lg font-semibold">
                      {getLocalizedText(locale, policy.title)}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                      {getLocalizedText(locale, policy.detail)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.host}</h2>
              <div className="mt-6 flex items-start gap-4">
                <Image
                  alt={vehicle.host.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                  height={64}
                  src={vehicle.host.avatar}
                  width={64}
                />
                <div>
                  <p className="text-lg font-semibold">{vehicle.host.name}</p>
                  <p className="text-sm text-[color:var(--muted)]">
                    {getLocalizedText(locale, vehicle.host.badge)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                    {getLocalizedText(locale, vehicle.host.bio)}
                  </p>
                </div>
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <h2 className="font-display text-4xl">{dictionary.vehicle.reviews}</h2>
              <div className="mt-6 space-y-5">
                {vehicle.reviews.map((review) => (
                  <article className="rounded-[1.4rem] bg-[#fcf8f2] p-5" key={review.id}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-[color:var(--muted)]">{review.date}</p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                      {review.rating} / 5
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                      {getLocalizedText(locale, review.comment)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-4xl">{dictionary.vehicle.related}</h2>
          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {related.map((item) => (
              <VehicleCard
                ctaLabel={locale === 'es' ? 'Ver detalle' : 'See details'}
                href={`/vehicle/${item.slug}?${createQueryString(searchState)}`}
                key={item.slug}
                locale={locale}
                metaLabel={dictionary.common.instantBook}
                vehicle={item}
              />
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
