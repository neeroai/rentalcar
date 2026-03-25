import { ArrowRight, CircleCheckBig, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { HomeHeroIntro, StickyJourneyStory, VehicleCard } from '@/components/motion-ui';
import { ReviewHighlight, SearchHeroForm, SectionHeading } from '@/components/site-chrome';
import { vehicleCategories, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import type { VehicleCategory } from '@/lib/types';
import { createQueryString, getLocalizedText } from '@/lib/utils';

const categoryVisuals: Record<VehicleCategory, string> = {
  suv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
  convertible:
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
  luxury:
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
  economy:
    'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
  van: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?auto=format&fit=crop&w=1200&q=80',
  business:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
};

export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const featuredVehicles = vehicles.slice(0, 3);
  const searchDefaults = {
    pickup: 'mco',
    start: '2026-04-18',
    end: '2026-04-22',
    time: '10:00',
  };

  const stickySteps = [
    {
      title:
        locale === 'es'
          ? 'Aterrizas en MCO y ya sabes exactamente dónde recibirás el auto.'
          : 'Land at MCO and know exactly where the car handoff will happen.',
      detail:
        locale === 'es'
          ? 'La experiencia prioriza claridad logística desde la búsqueda. No dependes de un counter genérico ni de llamadas improvisadas.'
          : 'The flow prioritizes logistical clarity from the search step. No generic counter and no improvised calls.',
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title:
        locale === 'es'
          ? 'Si te hospedas en Disney o International Drive, el auto llega al ritmo de tu itinerario.'
          : 'If you are staying near Disney or International Drive, delivery follows the rhythm of your itinerary.',
      detail:
        locale === 'es'
          ? 'El producto integra hoteles, resorts y parques como puntos de entrega naturales, no como excepciones.'
          : 'The product treats hotels, resorts and parks as natural handoff points, not edge cases.',
      image:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    },
    {
      title:
        locale === 'es'
          ? 'Antes de pagar ves políticas, reputación y señales de confianza reales.'
          : 'Before checkout you see policies, reputation and meaningful trust signals.',
      detail:
        locale === 'es'
          ? 'La interfaz elimina ambigüedad para familias, parejas y viajeros de negocio que necesitan decidir rápido.'
          : 'The interface removes ambiguity for families, couples and business travelers who need to decide quickly.',
      image:
        'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  return (
    <>
      <HomeHeroIntro
        eyebrow={dictionary.hero.eyebrow}
        primaryLabel={dictionary.hero.primaryCta}
        secondaryLabel={dictionary.hero.secondaryCta}
        subtitle={dictionary.hero.subtitle}
        title={dictionary.hero.title}
      >
        <SearchHeroForm dictionary={dictionary} locale={locale} />
      </HomeHeroIntro>

      <section className="page-grid py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {dictionary.home.valueProps.map((item, index) => {
            const Icon = [Plane, Sparkles, ShieldCheck][index] ?? CircleCheckBig;

            return (
              <article className="surface-strong rounded-[1.75rem] p-6 md:p-8" key={item.title}>
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="mt-5 font-display text-3xl leading-tight">{item.title}</h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-grid pb-20 md:pb-28">
        <SectionHeading
          eyebrow="Curated categories"
          subtitle={dictionary.home.categoriesSubtitle}
          title={dictionary.home.categoriesTitle}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {vehicleCategories.map((category) => (
            <Link
              className="group relative isolate overflow-hidden rounded-[2rem] border border-black/8"
              href={`/search?${createQueryString({ ...searchDefaults, category: category.value })}`}
              key={category.value}
            >
              <Image
                alt={getLocalizedText(locale, category.label)}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src={categoryVisuals[category.value as VehicleCategory]}
                width={1200}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100c09] via-[#100c09]/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="font-display text-3xl leading-tight">
                  {getLocalizedText(locale, category.label)}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  {dictionary.actions.exploreCars}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-divider py-20 md:py-28">
        <div className="page-grid">
          <SectionHeading
            eyebrow="Arrival story"
            subtitle={dictionary.home.convenienceSubtitle}
            title={dictionary.home.convenienceTitle}
          />
          <div className="mt-12">
            <StickyJourneyStory steps={stickySteps} />
          </div>
        </div>
      </section>

      <section className="page-grid py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Featured picks"
            title={
              locale === 'es'
                ? 'Vehículos pensados para casos de uso reales.'
                : 'Vehicles tuned to real trip scenarios.'
            }
          />
          <Link className="text-sm font-semibold text-[var(--accent)]" href="/search">
            {dictionary.actions.exploreCars}
          </Link>
        </div>
        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              ctaLabel={locale === 'es' ? 'Ver detalle' : 'See details'}
              href={`/vehicle/${vehicle.slug}?${createQueryString({ ...searchDefaults, slug: vehicle.slug })}`}
              key={vehicle.slug}
              locale={locale}
              metaLabel={dictionary.common.instantBook}
              vehicle={vehicle}
            />
          ))}
        </div>
      </section>

      <section className="section-divider py-20 md:py-28">
        <div className="page-grid grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Trust"
            subtitle={dictionary.home.trustSubtitle}
            title={dictionary.home.trustTitle}
          />
          <ReviewHighlight
            detail={
              locale === 'es'
                ? 'Los detalles operativos aparecen donde realmente reducen ansiedad: pickup, entregas, tiempo de respuesta y políticas visibles.'
                : 'Operational details appear where they reduce anxiety the most: pickup, delivery, response time and visible policies.'
            }
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            name={
              locale === 'es'
                ? 'Familia Gutiérrez · Bogotá a Orlando'
                : 'The Gutierrez family · Bogotá to Orlando'
            }
            quote={
              locale === 'es'
                ? '“Reservar se sintió tan claro como escoger un buen hotel.”'
                : '"Booking felt as clear as choosing a good hotel."'
            }
          />
        </div>
      </section>

      <section className="page-grid py-20 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          subtitle={dictionary.home.finalSubtitle}
          title={dictionary.home.howTitle}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {dictionary.home.howSteps.map((step, index) => (
            <article
              className="rounded-[1.75rem] border border-black/8 bg-[#f7f1e8] p-6 md:p-8"
              key={step.title}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-grid pb-20 md:pb-28">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#18130f] px-6 py-10 text-white md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow text-[color:var(--accent-soft)]">rentatelo.com</p>
              <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.03em] md:text-6xl">
                {dictionary.home.finalTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                {dictionary.home.finalSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#18130f]"
                href="/search"
              >
                {dictionary.actions.exploreCars}
              </Link>
              <Link
                className="rounded-full border border-white/16 px-6 py-3 text-sm font-semibold"
                href="/host"
              >
                {dictionary.actions.becomeHost}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
