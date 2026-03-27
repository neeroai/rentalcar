"use client";

/**
 * @file motion-ui.tsx
 * @description Animated UI components — hero section and Turo-style vehicle listing card.
 * @module components/motion-ui
 * @exports HomeHeroIntro, VehicleCard
 */

import { ChevronLeft, ChevronRight, Heart, Star, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Locale, Vehicle } from "@/lib/types";

// ---------------------------------------------------------------------------
// HomeHeroIntro
// ---------------------------------------------------------------------------

interface HomeHeroIntroProps {
  locale?: Locale;
}

/**
 * Full-width hero section with animated headline, subtitle, and popular search pills.
 * The search form is rendered externally by the homepage page.tsx via children slot.
 *
 * @param locale - Active locale (reserved for future i18n use).
 * @returns Hero section element with entrance animations.
 *
 * @example
 * <HomeHeroIntro locale="es" />
 */
export function HomeHeroIntro({ locale: _locale }: HomeHeroIntroProps) {
  const pills = [
    { label: "Orlando · MCO", href: "/search?pickup=mco" },
    { label: "Miami · MIA", href: "/search?pickup=mia" },
    { label: "Disney Resorts", href: "/search?pickup=mco&category=suv" },
    { label: "SUVs familiares", href: "/search?category=suv" },
  ];

  return (
    <section
      className="relative flex min-h-[560px] items-center overflow-hidden"
      data-testid="home-hero"
    >
      {/* Background image */}
      <Image
        alt="SUV en carretera abierta, Florida"
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="page-grid relative z-10 w-full py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="animate-fade-up text-fluid-h1 font-bold text-white">
            Encuentra tu auto ideal
          </h1>

          <p className="animate-fade-up-d1 mt-4 text-lg text-white/80">
            Vehículos curados con entrega en tu hotel o aeropuerto. Orlando y
            Miami.
          </p>

          {/* Pills */}
          <div className="animate-fade-up-d2 mt-6 flex flex-wrap justify-center gap-2">
            {pills.map((pill) => (
              <Link
                className="cursor-pointer rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-sm text-white/90 transition-colors hover:bg-white/20"
                href={pill.href}
                key={pill.href}
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// VehicleCard
// ---------------------------------------------------------------------------

interface VehicleCardProps {
  locale: Locale;
  vehicle: Vehicle;
  /** @deprecated Use vehicle.slug directly — kept for backwards compat */
  ctaLabel?: string;
  /** @deprecated Not used in new design */
  metaLabel?: string;
  href?: string;
}

/**
 * Turo-style listing card with image carousel, rating, price, and save button.
 * Images cycle via arrow buttons (visible on group-hover) and dot indicators.
 *
 * @param locale - Active locale for i18n text.
 * @param vehicle - Vehicle data object from @/lib/types.
 * @param href - Optional override for the card link destination.
 * @returns Clickable vehicle listing card.
 *
 * @example
 * <VehicleCard locale="es" vehicle={vehicle} />
 */
export function VehicleCard({ locale, vehicle, href }: VehicleCardProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const [saved, setSaved] = useState(false);

  const images =
    vehicle.images.length > 0 ? vehicle.images : ["/placeholder-car.jpg"];
  const cardHref = href ?? `/vehicle/${vehicle.slug}`;

  /**
   * Navigate to the previous image in the carousel.
   *
   * @param e - Mouse event (prevents default link navigation).
   */
  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  /**
   * Navigate to the next image in the carousel.
   *
   * @param e - Mouse event (prevents default link navigation).
   */
  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImg((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  /**
   * Toggle the saved/wishlist state for this vehicle.
   *
   * @param e - Mouse event (prevents default link navigation).
   */
  const toggleSaved = (e: React.MouseEvent) => {
    e.preventDefault();
    setSaved((s) => !s);
  };

  const categoryLabel =
    {
      suv: "SUV",
      convertible: "Convertible",
      luxury: locale === "es" ? "Lujo" : "Luxury",
      economy: locale === "es" ? "Económico" : "Economy",
      van: "Van",
      business: locale === "es" ? "Ejecutivo" : "Business",
    }[vehicle.category] ?? vehicle.category;

  return (
    <Link className="block cursor-pointer" href={cardHref}>
      <div className="animate-fade-up group overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
        {/* ---------------------------------------------------------------- */}
        {/* IMAGE CAROUSEL                                                     */}
        {/* ---------------------------------------------------------------- */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
          <Image
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            fill
            sizes="(max-width: 640px) 100vw, 400px"
            src={images[currentImg]}
          />

          {/* InstantBook badge */}
          {vehicle.instantBook && (
            <div className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-full bg-[#231F20] px-2 py-0.5 text-[10px] font-semibold text-white">
              <Zap className="h-3 w-3 fill-white" />
              {locale === "es" ? "Reserva ya" : "Book now"}
            </div>
          )}

          {/* Heart / save button */}
          <button
            aria-label={saved ? "Quitar de guardados" : "Guardar"}
            className="absolute right-2 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow transition-transform hover:scale-110"
            onClick={toggleSaved}
            type="button"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${saved ? "fill-[#7C3AED] text-[#7C3AED]" : "text-[#231F20]"}`}
            />
          </button>

          {/* Prev arrow */}
          {images.length > 1 && (
            <button
              aria-label="Imagen anterior"
              className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 shadow transition-opacity group-hover:opacity-100"
              onClick={prev}
              type="button"
            >
              <ChevronLeft className="h-4 w-4 text-[#231F20]" />
            </button>
          )}

          {/* Next arrow */}
          {images.length > 1 && (
            <button
              aria-label="Siguiente imagen"
              className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white opacity-0 shadow transition-opacity group-hover:opacity-100"
              onClick={next}
              type="button"
            >
              <ChevronRight className="h-4 w-4 text-[#231F20]" />
            </button>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1">
              {images.map((_, i) => (
                <div
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${i === currentImg ? "bg-white" : "bg-white/50"}`}
                  key={i}
                />
              ))}
            </div>
          )}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* CARD INFO                                                          */}
        {/* ---------------------------------------------------------------- */}
        <div className="p-3">
          {/* Line 1: Make + Model + Year */}
          <h3 className="text-sm font-semibold leading-snug text-[#231F20]">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </h3>

          {/* Line 2: Rating + trips + superhost */}
          <div className="mt-1 flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#22C55E] text-[#22C55E]" />
            <span className="text-xs font-semibold text-[#231F20]">
              {vehicle.rating}
            </span>
            <span className="text-xs text-[#6B7280]">
              ({vehicle.tripsCount} {locale === "es" ? "viajes" : "trips"})
            </span>
            {vehicle.host.isSuperhost && (
              <span className="ml-1 rounded-full bg-[#EDE9FE] px-1.5 py-0.5 text-[10px] font-semibold text-[#7C3AED]">
                All-Star
              </span>
            )}
          </div>

          {/* Line 3: Category + transmission */}
          <p className="mt-0.5 text-xs text-[#6B7280]">
            {categoryLabel} · {vehicle.transmission}
          </p>

          {/* Line 4: Price */}
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-base font-bold text-[#231F20]">
              ${vehicle.pricePerDay}
            </span>
            <span className="text-xs text-[#6B7280]">
              {locale === "es" ? "/día" : "/day"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
