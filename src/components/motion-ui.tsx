'use client';

/**
 * @file motion-ui.tsx
 * @description Hero and vehicle card UI with restrained motion for the Orlando-first MVP.
 * @module components/motion-ui
 * @exports HomeHeroIntro, VehicleCard
 */

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MapPinned,
  PlaneLanding,
  Sparkles,
  Star,
  Ticket,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { editorialImages } from '@/data/assets';
import type { Locale, Vehicle } from '@/lib/types';
import { getLocalizedText } from '@/lib/utils';

interface HomeHeroIntroProps {
  locale?: Locale;
}

export function HomeHeroIntro({ locale = 'es' }: HomeHeroIntroProps) {
  const pills =
    locale === 'es'
      ? [
          {
            label: 'Llegadas MCO',
            detail: 'Pickup claro al aterrizar, sin counter.',
            kicker: 'Arribo',
            href: '/search?pickup=mco',
            icon: PlaneLanding,
          },
          {
            label: 'Hoteles y resorts',
            detail: 'Entrega pensada para lobby, maletas y check-in.',
            kicker: 'Estadía',
            href: '/search?pickup=disney&category=minivan',
            icon: MapPinned,
          },
          {
            label: 'Epic + Universal',
            detail: 'Semanas de parques con flota y contexto real.',
            kicker: 'Park days',
            href: '/search?pickup=universal&category=compact-suv',
            icon: Ticket,
          },
          {
            label: 'Miami extensión',
            detail: 'Solo si el viaje combina ambos destinos.',
            kicker: 'Split trip',
            href: '/search?pickup=mia',
            icon: Sparkles,
          },
        ]
      : [
          {
            label: 'MCO arrivals',
            detail: 'A clean pickup flow the minute you land.',
            kicker: 'Arrival',
            href: '/search?pickup=mco',
            icon: PlaneLanding,
          },
          {
            label: 'Hotels and resorts',
            detail: 'Delivery shaped around lobby, luggage, and check-in.',
            kicker: 'Stay',
            href: '/search?pickup=disney&category=minivan',
            icon: MapPinned,
          },
          {
            label: 'Epic + Universal',
            detail: 'Park-week demand with the right fleet and context.',
            kicker: 'Park days',
            href: '/search?pickup=universal&category=compact-suv',
            icon: Ticket,
          },
          {
            label: 'Miami extension',
            detail: 'Only when the itinerary truly combines both markets.',
            kicker: 'Split trip',
            href: '/search?pickup=mia',
            icon: Sparkles,
          },
        ];

  const metrics =
    locale === 'es'
      ? ['MCO, hoteles y resorts', 'Epic, Disney y Universal', 'Familias LATAM primero']
      : ['MCO, hotels, and resorts', 'Epic, Disney, and Universal', 'LATAM families first'];

  return (
    <section className="relative isolate overflow-hidden" data-testid="home-hero">
      <div className="absolute inset-0">
        <Image
          alt={getLocalizedText(locale, editorialImages.homeHero.alt)}
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={editorialImages.homeHero.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(16,19,20,0.82)_0%,rgba(16,19,20,0.58)_38%,rgba(16,19,20,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,181,118,0.28),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,19,20,0.16)_0%,rgba(16,19,20,0.3)_58%,rgba(16,19,20,0.54)_100%)]" />
      </div>

      <div className="page-grid relative z-10 flex min-h-[calc(86svh-4rem)] items-end py-12 md:min-h-[calc(88svh-4.6rem)] md:items-center md:py-14">
        <div className="max-w-4xl">
          <p className="eyebrow animate-fade-in text-[var(--secondary)]">
            {locale === 'es'
              ? 'Orlando first · familias LATAM, hoteles y días de parques'
              : 'Orlando first · LATAM families, hotel stays, and park days'}
          </p>
          <h1 className="heading-balance animate-fade-up mt-4 max-w-3xl text-fluid-h1 font-black text-white">
            {locale === 'es'
              ? 'El viaje a Orlando empieza antes del primer parque.'
              : 'Your Orlando trip starts before the first park day.'}
          </h1>
          <p className="animate-fade-up-d1 mt-4 max-w-2xl text-lg leading-8 text-white/80 md:text-[1.1rem]">
            {locale === 'es'
              ? 'Piensa en llegada a MCO, maletas, hotel, Disney, Universal o Epic. Nosotros ordenamos la movilidad alrededor de ese plan real, sin counters ni categorías genéricas.'
              : 'Think MCO arrival, luggage, hotel check-in, Disney, Universal, or Epic. We organize mobility around that real plan, without counters or generic categories.'}
          </p>
          <div className="hero-metrics animate-fade-up-d1 mt-6">
            {metrics.map((metric) => (
              <span className="hero-metric" key={metric}>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                {metric}
              </span>
            ))}
          </div>
          <div className="hero-pill-grid animate-fade-up-d2 mt-6">
            {pills.map((pill) => (
              <Link
                className="hero-pill"
                href={pill.href}
                key={pill.href}
              >
                <span className="hero-pill-icon">
                  <pill.icon className="h-[1.125rem] w-[1.125rem]" />
                </span>
                <span className="hero-pill-copy">
                  <span className="hero-pill-kicker">{pill.kicker}</span>
                  <span className="hero-pill-title">{pill.label}</span>
                  <span className="hero-pill-detail">{pill.detail}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface VehicleCardProps {
  locale: Locale;
  vehicle: Vehicle;
  ctaLabel?: string;
  metaLabel?: string;
  href?: string;
}

export function VehicleCard({ locale, vehicle, href }: VehicleCardProps) {
  const [currentImg, setCurrentImg] = useState(0);
  const [saved, setSaved] = useState(false);

  const images = vehicle.images;
  const cardHref = href ?? `/vehicle/${vehicle.slug}`;

  const prev = (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentImg((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const next = (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentImg((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const toggleSaved = (event: React.MouseEvent) => {
    event.preventDefault();
    setSaved((value) => !value);
  };

  const categoryLabel =
    {
      economy: locale === 'es' ? 'Eficiente' : 'Efficient',
      'compact-suv': locale === 'es' ? 'SUV compacta' : 'Compact SUV',
      minivan: locale === 'es' ? 'Minivan' : 'Minivan',
      'three-row-suv': locale === 'es' ? 'SUV 3 filas' : '3-row SUV',
      premium: locale === 'es' ? 'Premium' : 'Premium',
    }[vehicle.category] ?? vehicle.category;

  return (
    <Link className="group block" href={cardHref}>
      <article className="surface-elevated overflow-hidden rounded-[1.7rem] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-alt)]">
          <Image
            alt={
              images[currentImg]
                ? getLocalizedText(locale, images[currentImg].alt)
                : `${vehicle.year} ${vehicle.make} ${vehicle.model}`
            }
            className="object-cover transition-transform duration-300 group-hover:scale-[1.035]"
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            src={images[currentImg]?.src ?? editorialImages.homeHero.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {vehicle.instantBook ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(20,25,23,0.82)] px-2.5 py-1 text-[11px] font-semibold text-white">
                <Zap className="h-3.5 w-3.5 fill-current" />
                {locale === 'es' ? 'Reserva inmediata' : 'Instant book'}
              </span>
            ) : null}
            {vehicle.airportPickup ? (
              <span className="inline-flex rounded-full bg-white/88 px-2.5 py-1 text-[11px] font-semibold text-[var(--accent-deep)]">
                MCO
              </span>
            ) : null}
          </div>

          <button
            aria-label={
              saved
                ? locale === 'es'
                  ? 'Quitar de guardados'
                  : 'Remove from saved'
                : locale === 'es'
                  ? 'Guardar vehículo'
                  : 'Save vehicle'
            }
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/88 text-[var(--foreground)] shadow-sm transition-transform hover:scale-110"
            onClick={toggleSaved}
            type="button"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${saved ? 'fill-[var(--primary)] text-[var(--primary)]' : ''}`}
            />
          </button>

          {images.length > 1 ? (
            <>
              <button
                aria-label={locale === 'es' ? 'Imagen anterior' : 'Previous image'}
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--foreground)] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                onClick={prev}
                type="button"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label={locale === 'es' ? 'Siguiente imagen' : 'Next image'}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/88 text-[var(--foreground)] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
                onClick={next}
                type="button"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          ) : null}

          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.18em] text-white/68">
                {vehicle.city === 'miami' ? 'Miami extension' : 'Orlando trip ready'}
              </p>
              <p className="truncate text-sm font-semibold">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </p>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-[rgba(20,25,23,0.7)] px-2.5 py-1 text-xs font-semibold">
              <Star className="h-3.5 w-3.5 fill-[var(--secondary)] text-[var(--secondary)]" />
              {vehicle.rating}
            </div>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--text-soft)]">
            <span className="rounded-full bg-[var(--surface-alt)] px-2.5 py-1">
              {categoryLabel}
            </span>
            <span className="rounded-full bg-[var(--surface-alt)] px-2.5 py-1">
              {vehicle.seats} {locale === 'es' ? 'asientos' : 'seats'}
            </span>
            <span className="rounded-full bg-[var(--surface-alt)] px-2.5 py-1">
              {vehicle.transmission}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-sm leading-6 text-[var(--muted)]">
                {locale === 'es'
                  ? vehicle.airportPickup
                    ? 'Entrega en MCO, hoteles y resorts cercanos.'
                    : 'Ideal para moverse por Orlando con más flexibilidad.'
                  : vehicle.airportPickup
                    ? 'Delivery to MCO, hotels and nearby resorts.'
                    : 'Ideal for moving around Orlando with more flexibility.'}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-2xl font-black tracking-[-0.04em] text-[var(--foreground)]">
                ${vehicle.pricePerDay}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                {locale === 'es' ? 'por día' : 'per day'}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
