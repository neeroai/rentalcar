/**
 * @file app/vehicle/[slug]/page.tsx
 * @description Orlando-first vehicle detail page with immersive gallery and operational booking clarity.
 * @module app/vehicle
 * @exports VehicleDetailPage
 */

import {
  Award,
  Check,
  CheckCircle2,
  Fuel,
  Grid2x2,
  MapPin,
  Route,
  Settings2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { VehicleCard } from "@/components/motion-ui";
import { vehicles } from "@/data/mock";
import { getDictionary, getLocale } from "@/lib/i18n";
import {
  createQueryString,
  formatCurrency,
  getLocalizedText,
  getRelatedVehicles,
  getVehicleBySlug,
} from "@/lib/utils";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

interface VehicleDetailPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function VehicleDetailPage({
  params,
  searchParams,
}: VehicleDetailPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const vehicle = getVehicleBySlug(vehicles, slug);

  if (!vehicle) {
    notFound();
  }

  const searchState = {
    pickup: Array.isArray(query.pickup)
      ? query.pickup[0]
      : (query.pickup ?? "mco"),
    start: Array.isArray(query.start)
      ? query.start[0]
      : (query.start ?? "2026-04-18"),
    end: Array.isArray(query.end) ? query.end[0] : (query.end ?? "2026-04-22"),
    time: Array.isArray(query.time) ? query.time[0] : (query.time ?? "10:00"),
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
  const estimatedDays = 3;
  const deliveryFee = vehicle.deliveryOptions[0]?.fee ?? 28;
  const totalEstimate = vehicle.pricePerDay * estimatedDays + deliveryFee;

  return (
    <>
      <section className="page-grid pt-6 md:pt-8">
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          href={`/search?${createQueryString(searchState)}`}
        >
          ← {dictionary.common.backToSearch}
        </Link>

        <div className="mt-4 overflow-hidden rounded-[2rem]">
          <div className="grid gap-2 md:grid-cols-[1.55fr_0.9fr]">
            <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem]">
              <Image
                alt={getLocalizedText(locale, vehicle.images[0].alt)}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                src={vehicle.images[0].src}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,23,0.08)_0%,rgba(20,25,23,0.72)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-white/62">
                  {vehicle.city === "orlando"
                    ? "Orlando trip ready"
                    : "Miami extension"}
                </p>
                <h1 className="heading-balance mt-3 text-fluid-h2 font-black">
                  {title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/78">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1">
                    <Star
                      aria-hidden="true"
                      className="h-4 w-4 fill-[var(--secondary)] text-[var(--secondary)]"
                    />
                    {vehicle.rating} · {vehicle.tripsCount}{" "}
                    {dictionary.vehicle.trips}
                  </span>
                  {vehicle.host.isSuperhost ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1">
                      <Award className="h-4 w-4 text-[var(--secondary)]" />
                      {dictionary.vehicle.allStarHost}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-3 py-1">
                    <MapPin className="h-4 w-4 text-[var(--secondary)]" />
                    {vehicle.city === "orlando" ? "Orlando, FL" : "Miami, FL"}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              {vehicle.images.slice(1, 5).map((image, index) => (
                <div
                  className="relative min-h-[12rem] overflow-hidden rounded-[1.5rem]"
                  key={image.src}
                >
                  <Image
                    alt={getLocalizedText(locale, image.alt)}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 24vw"
                    src={image.src}
                  />
                  {index === 3 ? (
                    <div className="absolute inset-0 flex items-end justify-end bg-black/30 p-4">
                      <button
                        aria-disabled="true"
                        className="inline-flex items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-[var(--foreground)]"
                        type="button"
                      >
                        <Grid2x2 className="h-4 w-4" />
                        {locale === "es" ? "Ver galería" : "View gallery"}
                      </button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="page-grid page-section">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="space-y-8">
            <section className="grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: Users,
                  label: `${vehicle.seats} ${locale === "es" ? "personas" : "guests"}`,
                },
                { icon: Settings2, label: vehicle.transmission },
                { icon: Fuel, label: vehicle.fuelType },
                {
                  icon: Route,
                  label: locale === "es" ? "250 mi / día" : "250 mi / day",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="surface-panel flex items-center gap-3 rounded-[1.5rem] p-4"
                    key={item.label}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-[var(--primary)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </section>

            <section className="surface-panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">{dictionary.vehicle.host}</p>
              <div className="mt-5 grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    alt={vehicle.host.name}
                    className="object-cover"
                    fill
                    sizes="80px"
                    src={vehicle.host.avatar}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[var(--foreground)]">
                    {vehicle.host.name}
                  </h2>
                  <p className="mt-2 text-base text-[var(--muted)]">
                    {getLocalizedText(locale, vehicle.host.badge)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--text-soft)]">
                    <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1">
                      {vehicle.host.responseRate}
                    </span>
                    <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1">
                      {getLocalizedText(locale, vehicle.host.responseTime)}
                    </span>
                    <span className="rounded-full bg-[var(--surface-alt)] px-3 py-1">
                      {locale === "es"
                        ? "Entrega orientada a hoteles y MCO"
                        : "Hotel and MCO-focused handoff"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                {getLocalizedText(locale, vehicle.host.bio)}
              </p>
            </section>

            <section className="surface-panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">{dictionary.vehicle.overview}</p>
              <h2 className="mt-4 text-fluid-h3 font-black text-[var(--foreground)]">
                {getLocalizedText(locale, vehicle.intro)}
              </h2>
              <ul className="mt-5 space-y-3">
                {vehicle.highlights.map((highlight) => (
                  <li
                    className="flex items-start gap-3 text-sm leading-7 text-[var(--muted)]"
                    key={highlight.es}
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--cta-success)]" />
                    {getLocalizedText(locale, highlight)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
              <div className="surface-panel rounded-[2rem] p-6 md:p-8">
                <p className="eyebrow">{dictionary.vehicle.includes}</p>
                <div className="mt-5 grid gap-3">
                  {vehicle.features.map((feature) => (
                    <div
                      className="flex items-center gap-3 rounded-[1rem] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--text-soft)]"
                      key={feature}
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--primary)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] p-6 md:p-8">
                <p className="eyebrow">{dictionary.vehicle.pickupOptions}</p>
                <div className="mt-5 space-y-3">
                  {vehicle.deliveryOptions.map((option) => (
                    <div
                      className="rounded-[1rem] bg-[var(--surface-alt)] p-4"
                      key={option.label.es}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--primary)]" />
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
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="surface-panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">{dictionary.vehicle.policies}</p>
              <div className="mt-5 space-y-4">
                {vehicle.policies.map((policy) => (
                  <div className="flex items-start gap-3" key={policy.title.es}>
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--cta-success)]" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {getLocalizedText(locale, policy.title)}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-[var(--muted)]">
                        {getLocalizedText(locale, policy.detail)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="surface-panel rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-[var(--secondary)] text-[var(--secondary)]" />
                <h2 className="text-xl font-black text-[var(--foreground)]">
                  {vehicle.rating} · {vehicle.reviews.length}{" "}
                  {dictionary.vehicle.reviews}
                </h2>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {vehicle.reviews.map((review) => (
                  <article
                    className="rounded-[1.4rem] bg-[var(--surface-alt)] p-5"
                    key={review.id}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
                        {review.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--foreground)]">
                          {review.author}
                        </p>
                        <p className="text-xs text-[var(--muted)]">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {getLocalizedText(locale, review.comment)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="surface-panel rounded-[2rem] p-6">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    {dictionary.vehicle.bookCard}
                  </p>
                  <p className="mt-2 text-4xl font-black tracking-[-0.06em] text-[var(--foreground)]">
                    {formatCurrency(vehicle.pricePerDay, locale)}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    {dictionary.vehicle.perDay}
                  </p>
                </div>
                <div className="rounded-full bg-[var(--surface-alt)] px-3 py-1 text-sm font-semibold text-[var(--foreground)]">
                  {vehicle.rating} ★
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-[rgba(198,184,163,0.55)]">
                <div className="grid divide-x divide-[rgba(198,184,163,0.55)] md:grid-cols-2">
                  <label className="p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {locale === "es" ? "Desde" : "From"}
                    </span>
                    <input
                      className="mt-2 w-full cursor-pointer bg-transparent text-sm font-semibold outline-none"
                      defaultValue={searchState.start}
                      type="date"
                    />
                  </label>
                  <label className="p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {locale === "es" ? "Hasta" : "Until"}
                    </span>
                    <input
                      className="mt-2 w-full cursor-pointer bg-transparent text-sm font-semibold outline-none"
                      defaultValue={searchState.end}
                      type="date"
                    />
                  </label>
                </div>
              </div>

              <Link
                className="btn-primary mt-5 w-full"
                data-testid="booking-cta"
                href={`/checkout?${checkoutQuery}`}
              >
                {locale === "es" ? "Reservar este auto" : "Reserve this car"}
              </Link>
              <p className="mt-3 text-center text-xs leading-6 text-[var(--muted)]">
                {locale === "es"
                  ? "No se cobra nada todavía. Primero confirmas contexto, entrega y host."
                  : "Nothing is charged yet. You confirm context, handoff and host first."}
              </p>

              <div className="mt-6 space-y-3 border-t border-[rgba(198,184,163,0.46)] pt-5 text-sm">
                <div className="flex justify-between text-[var(--text-soft)]">
                  <span>
                    {formatCurrency(vehicle.pricePerDay, locale)} ×{" "}
                    {estimatedDays} {locale === "es" ? "días" : "days"}
                  </span>
                  <span>
                    {formatCurrency(
                      vehicle.pricePerDay * estimatedDays,
                      locale,
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-[var(--text-soft)]">
                  <span>
                    {locale === "es"
                      ? "Entrega estimada"
                      : "Estimated handoff fee"}
                  </span>
                  <span>+{formatCurrency(deliveryFee, locale)}</span>
                </div>
                <div className="flex justify-between border-t border-[rgba(198,184,163,0.46)] pt-3 font-semibold text-[var(--foreground)]">
                  <span>
                    {locale === "es" ? "Total estimado" : "Estimated total"}
                  </span>
                  <span>{formatCurrency(totalEstimate, locale)}</span>
                </div>
              </div>

              <div className="mt-6 rounded-[1.4rem] bg-[var(--surface-alt)] p-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image
                      alt={vehicle.host.name}
                      className="object-cover"
                      fill
                      sizes="44px"
                      src={vehicle.host.avatar}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                      {dictionary.vehicle.host}
                    </p>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {vehicle.host.name}
                    </p>
                    <p className="text-xs text-[var(--text-soft)]">
                      {getLocalizedText(locale, vehicle.host.responseTime)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-14">
          <h2 className="text-fluid-h3 font-black text-[var(--foreground)]">
            {dictionary.vehicle.related}
          </h2>
          <div className="mt-6 grid gap-5 xl:grid-cols-3">
            {related.map((item) => (
              <VehicleCard
                href={`/vehicle/${item.slug}?${createQueryString(searchState)}`}
                key={item.slug}
                locale={locale}
                vehicle={item}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="surface-panel fixed bottom-4 left-4 right-4 z-20 rounded-[1.6rem] p-4 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xl font-black text-[var(--foreground)]">
              {formatCurrency(vehicle.pricePerDay, locale)}
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              {dictionary.vehicle.perDay}
            </p>
          </div>
          <Link className="btn-primary" href={`/checkout?${checkoutQuery}`}>
            {locale === "es" ? "Reservar" : "Book now"}
          </Link>
        </div>
      </div>
    </>
  );
}
