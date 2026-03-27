/**
 * @file app/vehicle/[slug]/page.tsx
 * @description Vehicle detail page with Turo-inspired layout: image gallery, sticky booking card, reviews.
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
  const pricePerDay = vehicle.pricePerDay;
  const estimatedDays = 3;
  const deliveryFee = vehicle.deliveryOptions[0]?.fee ?? 28;

  return (
    <>
      {/* Image Gallery */}
      <div className="bg-[#F5F5F5]">
        <div className="page-grid py-4">
          <Link
            className="mb-3 inline-flex text-sm font-semibold text-[#7C3AED]"
            href={`/search?${createQueryString(searchState)}`}
          >
            ← {dictionary.common.backToSearch}
          </Link>

          <div className="relative">
            <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-[2fr_1fr_1fr]">
              {/* Main large image */}
              <div className="relative aspect-[4/3] md:aspect-[3/2]">
                <Image
                  alt={title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  src={vehicle.images[0]}
                />
              </div>

              {/* 2 smaller images on right (desktop only) */}
              <div className="hidden grid-rows-2 gap-2 md:grid">
                <div className="relative overflow-hidden rounded-tr-none">
                  <Image
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="20vw"
                    src={vehicle.images[1] ?? vehicle.images[0]}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="20vw"
                    src={vehicle.images[2] ?? vehicle.images[0]}
                  />
                </div>
              </div>

              {/* Placeholder third column for grid alignment */}
              <div className="hidden grid-rows-2 gap-2 md:grid">
                <div className="relative overflow-hidden">
                  <Image
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="20vw"
                    src={vehicle.images[3] ?? vehicle.images[0]}
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    alt={title}
                    className="object-cover"
                    fill
                    sizes="20vw"
                    src={vehicle.images[4] ?? vehicle.images[0]}
                  />
                </div>
              </div>
            </div>

            {/* "Ver todas las fotos" button overlay */}
            <button
              className="absolute bottom-3 right-3 flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#D4D4D4] bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-[#F5F5F5]"
              type="button"
            >
              <Grid2x2 className="h-4 w-4" /> Ver todas
            </button>
          </div>
        </div>
      </div>

      {/* Two-column content layout */}
      <div className="page-grid py-8 pb-24 lg:pb-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Vehicle Title */}
            <div>
              <h1 className="text-2xl font-bold text-[#231F20] md:text-3xl">
                {title}
              </h1>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />
                  <span className="font-semibold">{vehicle.rating}</span>
                  <span className="text-[#6B7280]">
                    ({vehicle.tripsCount} viajes)
                  </span>
                </div>

                {/* All-Star badge */}
                {vehicle.host.isSuperhost && (
                  <span className="flex items-center gap-1 rounded-full bg-[#EDE9FE] px-2 py-1 text-xs font-semibold text-[#4C1D95]">
                    <Award className="h-3.5 w-3.5" /> All-Star Host
                  </span>
                )}

                {/* City */}
                <span className="flex items-center gap-1 text-sm text-[#6B7280]">
                  <MapPin className="h-3.5 w-3.5" />
                  {vehicle.city === "orlando" ? "Orlando, FL" : "Miami, FL"}
                </span>
              </div>
            </div>

            {/* Host Card */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    alt={vehicle.host.name}
                    className="object-cover"
                    fill
                    src={vehicle.host.avatar}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#231F20]">
                    {vehicle.host.name}
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    {getLocalizedText(locale, vehicle.host.badge)}
                  </p>
                  <p className="text-sm text-[#6B7280]">
                    Responde en{" "}
                    {getLocalizedText(locale, vehicle.host.responseTime)}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#E5E5E5] pt-6 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <Users className="mb-1 h-5 w-5 text-[#7C3AED]" />
                <span className="text-sm font-medium">
                  {vehicle.seats} personas
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Settings2 className="mb-1 h-5 w-5 text-[#7C3AED]" />
                <span className="text-sm font-medium">
                  {vehicle.transmission}
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Fuel className="mb-1 h-5 w-5 text-[#7C3AED]" />
                <span className="text-sm font-medium">{vehicle.fuelType}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Route className="mb-1 h-5 w-5 text-[#7C3AED]" />
                <span className="text-sm font-medium">250 mi/día</span>
              </div>
            </div>

            {/* Description / Highlights */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <h2 className="mb-3 text-lg font-semibold">Sobre este auto</h2>
              <p className="leading-relaxed text-[#6B7280]">
                {getLocalizedText(locale, vehicle.intro)}
              </p>
              <ul className="mt-3 space-y-2">
                {vehicle.highlights.map((highlight) => (
                  <li
                    className="flex items-start gap-2 text-sm text-[#6B7280]"
                    key={highlight.es}
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#22C55E]" />
                    {getLocalizedText(locale, highlight)}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <h2 className="mb-4 text-lg font-semibold">Equipamiento</h2>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.features.map((feature) => (
                  <div
                    className="flex items-center gap-2 text-sm"
                    key={feature}
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#7C3AED]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Options */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <h2 className="mb-4 text-lg font-semibold">
                Opciones de entrega
              </h2>
              <div className="space-y-3">
                {vehicle.deliveryOptions.map((opt) => (
                  <div
                    className="flex items-start gap-3 rounded-xl bg-[#FAF5FF] p-3"
                    key={opt.label.es}
                  >
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#7C3AED]" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {getLocalizedText(locale, opt.label)}
                      </p>
                      <p className="mt-0.5 text-xs text-[#6B7280]">
                        {getLocalizedText(locale, opt.detail)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-[#231F20]">
                      +{formatCurrency(opt.fee, locale)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <h2 className="mb-4 text-lg font-semibold">Políticas</h2>
              <div className="space-y-4">
                {vehicle.policies.map((policy) => (
                  <div className="flex items-start gap-3" key={policy.title.es}>
                    <ShieldCheck className="h-5 w-5 flex-shrink-0 text-[#22C55E]" />
                    <div>
                      <p className="text-sm font-medium">
                        {getLocalizedText(locale, policy.title)}
                      </p>
                      <p className="text-sm text-[#6B7280]">
                        {getLocalizedText(locale, policy.detail)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="border-t border-[#E5E5E5] pt-6">
              <h2 className="mb-4 text-lg font-semibold">
                <Star className="mr-1 inline h-5 w-5 fill-[#22C55E] text-[#22C55E]" />
                {vehicle.rating} · {vehicle.reviews.length} reseñas
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {vehicle.reviews.map((review) => (
                  <div className="rounded-xl bg-[#F5F5F5] p-4" key={review.id}>
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-semibold text-white">
                        {review.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{review.author}</p>
                        <p className="text-xs text-[#6B7280]">{review.date}</p>
                      </div>
                      <div className="ml-auto flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            className={`h-3.5 w-3.5 ${i < Math.floor(review.rating) ? "fill-[#22C55E] text-[#22C55E]" : "text-[#E5E5E5]"}`}
                            // biome-ignore lint/suspicious/noArrayIndexKey: static render list
                            key={i}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#6B7280]">
                      {getLocalizedText(locale, review.comment)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Booking Card */}
          <div className="h-fit lg:sticky lg:top-24">
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 shadow-md">
              {/* Price */}
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#231F20]">
                  {formatCurrency(pricePerDay, locale)}
                </span>
                <span className="text-[#6B7280]">/día</span>
                <div className="ml-auto flex items-center gap-1">
                  <Star className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />
                  <span className="text-sm font-semibold">
                    {vehicle.rating}
                  </span>
                </div>
              </div>

              {/* Date inputs */}
              <div className="mb-3 overflow-hidden rounded-xl border border-[#E5E5E5]">
                <div className="flex divide-x divide-[#E5E5E5]">
                  <div className="flex-1 p-3">
                    <label className="mb-1 block text-xs font-semibold text-[#231F20]">
                      DESDE
                    </label>
                    <input
                      className="w-full cursor-pointer text-sm outline-none"
                      defaultValue={searchState.start}
                      type="date"
                    />
                  </div>
                  <div className="flex-1 p-3">
                    <label className="mb-1 block text-xs font-semibold text-[#231F20]">
                      HASTA
                    </label>
                    <input
                      className="w-full cursor-pointer text-sm outline-none"
                      defaultValue={searchState.end}
                      type="date"
                    />
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <Link
                className="block w-full cursor-pointer rounded-xl bg-[#7C3AED] py-3.5 text-center font-semibold text-white transition-colors hover:bg-[#6D28D9]"
                data-testid="booking-cta"
                href={`/checkout?${checkoutQuery}`}
              >
                Reservar
              </Link>
              <p className="mt-2 text-center text-xs text-[#6B7280]">
                No se cobra nada todavía
              </p>

              {/* Price breakdown */}
              <div className="mt-4 space-y-2 border-t border-[#E5E5E5] pt-4 text-sm">
                <div className="flex justify-between text-[#6B7280]">
                  <span>
                    {formatCurrency(pricePerDay, locale)} × {estimatedDays} días
                  </span>
                  <span>
                    {formatCurrency(pricePerDay * estimatedDays, locale)}
                  </span>
                </div>
                <div className="flex justify-between text-[#6B7280]">
                  <span>Entrega</span>
                  <span>+{formatCurrency(deliveryFee, locale)}</span>
                </div>
                <div className="flex justify-between border-t border-[#E5E5E5] pt-2 font-semibold text-[#231F20]">
                  <span>Total estimado</span>
                  <span>
                    {formatCurrency(
                      pricePerDay * estimatedDays + deliveryFee,
                      locale,
                    )}
                  </span>
                </div>
              </div>

              {/* Host mini-card */}
              <div className="mt-4 flex items-center gap-3 border-t border-[#E5E5E5] pt-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    alt={vehicle.host.name}
                    className="object-cover"
                    fill
                    src={vehicle.host.avatar}
                  />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280]">Host</p>
                  <p className="text-sm font-semibold text-[#231F20]">
                    {vehicle.host.name}
                  </p>
                  <p className="text-xs text-[#22C55E]">
                    {vehicle.host.responseRate} respuesta ·{" "}
                    {getLocalizedText(locale, vehicle.host.responseTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        <section className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-[#231F20]">
            {dictionary.vehicle.related}
          </h2>
          <div className="grid gap-5 xl:grid-cols-3">
            {related.map((item) => (
              <VehicleCard
                ctaLabel={locale === "es" ? "Ver detalle" : "See details"}
                href={`/vehicle/${item.slug}?${createQueryString(searchState)}`}
                key={item.slug}
                locale={locale}
                metaLabel={dictionary.common.instantBook}
                vehicle={item}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-[#E5E5E5] bg-white p-4 lg:hidden">
        <div>
          <span className="font-bold text-[#231F20]">
            {formatCurrency(pricePerDay, locale)}
          </span>
          <span className="text-sm text-[#6B7280]">/día</span>
        </div>
        <Link
          className="cursor-pointer rounded-xl bg-[#7C3AED] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#6D28D9]"
          href={`/checkout?${checkoutQuery}`}
        >
          Reservar
        </Link>
      </div>
    </>
  );
}
