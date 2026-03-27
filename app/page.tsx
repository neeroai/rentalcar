/**
 * @file page.tsx
 * @description Homepage for rentatelo.com — Turo-inspired layout with hero, browse sections, featured listings, and host CTA.
 * @module app/page
 * @exports HomePage
 */

import { Car, MessageCircle, Search, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HomeHeroIntro, VehicleCard } from "@/components/motion-ui";
import { SearchHeroForm, SectionHeading } from "@/components/site-chrome";
import { vehicles } from "@/data/mock";
import { getDictionary, getLocale } from "@/lib/i18n";
import { createQueryString } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Unique makes derived from vehicle data
// ---------------------------------------------------------------------------

const uniqueMakes = [...new Set(vehicles.map((v) => v.make))];

// ---------------------------------------------------------------------------
// Trust stats derived from vehicle data
// ---------------------------------------------------------------------------

const totalTrips = vehicles.reduce((sum, v) => sum + v.tripsCount, 0);
const avgRating = (
  vehicles.reduce((sum, v) => sum + v.rating, 0) / vehicles.length
).toFixed(2);
const totalHosts = new Set(vehicles.map((v) => v.host.name)).size;

// ---------------------------------------------------------------------------
// Experience categories
// ---------------------------------------------------------------------------

const experiences = [
  {
    label: "Familias",
    labelEn: "Families",
    href: "/search?category=suv",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Ejecutivo",
    labelEn: "Business",
    href: "/search?category=business",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Convertibles",
    labelEn: "Convertibles",
    href: "/search?category=convertible",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Económico",
    labelEn: "Economy",
    href: "/search?category=economy",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
  },
] as const;

// ---------------------------------------------------------------------------
// How it works steps
// ---------------------------------------------------------------------------

const howItWorksSteps = [
  {
    icon: Search,
    titleEs: "Elige tu auto",
    titleEn: "Choose your car",
    detailEs: "Busca por ciudad, fecha y tipo de vehículo",
    detailEn: "Search by city, date and vehicle type",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: MessageCircle,
    titleEs: "Conecta con el host",
    titleEn: "Connect with host",
    detailEs: "Confirma pickup y detalles directamente",
    detailEn: "Confirm pickup and details directly",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: Car,
    titleEs: "Disfruta el viaje",
    titleEn: "Enjoy the ride",
    detailEs: "Recibe el auto en tu hotel o aeropuerto",
    detailEn: "Receive the car at your hotel or airport",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
  },
] as const;

// ---------------------------------------------------------------------------
// HomePage
// ---------------------------------------------------------------------------

/**
 * Homepage server component — renders all sections from hero to host CTA.
 *
 * @returns Full homepage layout with hero, browse by make/destination/experience,
 *          featured listings, how it works, trust signals, and host CTA.
 *
 * @example
 * // Rendered automatically by Next.js at /
 * <HomePage />
 */
export default async function HomePage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  const featuredVehicles = vehicles.slice(0, 6);
  const searchDefaults = {
    pickup: "mco",
    start: "2026-04-18",
    end: "2026-04-22",
    time: "10:00",
  };

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* SECTION 1: HERO                                                      */}
      {/* ------------------------------------------------------------------ */}
      <HomeHeroIntro locale={locale} />
      <div className="page-grid -mt-6 pb-6 relative z-10">
        <SearchHeroForm
          defaults={searchDefaults}
          dictionary={dictionary}
          locale={locale}
        />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 2: BROWSE BY MAKE                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-grid py-14">
        <SectionHeading
          eyebrow={dictionary.home.browseByMake}
          title={locale === "es" ? "Explora por marca" : "Browse by make"}
        />
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {uniqueMakes.map((make) => (
            <Link
              key={make}
              href={`/search?${createQueryString({ ...searchDefaults, make })}`}
              className="bg-white border border-[#E5E5E5] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-[#7C3AED] transition-colors cursor-pointer text-sm font-medium text-[#231F20] min-h-[44px] justify-center"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EDE9FE] text-base font-bold text-[#7C3AED]">
                {make[0]}
              </span>
              <span className="text-center leading-tight">{make}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 3: BROWSE BY DESTINATION                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-grid py-14">
        <SectionHeading
          eyebrow={dictionary.home.browseByDestination}
          title={
            locale === "es" ? "Explora por destino" : "Browse by destination"
          }
        />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Orlando */}
          <Link
            href={`/search?${createQueryString({ ...searchDefaults, pickup: "mco" })}`}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/3] cursor-pointer block"
          >
            <Image
              src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=800&q=80"
              alt="Orlando"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Orlando</h3>
              <p className="text-white/80 text-sm mt-1">
                {locale === "es"
                  ? "75M visitantes · Disney, Universal"
                  : "75M visitors · Disney, Universal"}
              </p>
            </div>
          </Link>

          {/* Miami */}
          <Link
            href={`/search?${createQueryString({ ...searchDefaults, pickup: "mco" })}`}
            className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[4/3] cursor-pointer block"
          >
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
              alt="Miami"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Miami</h3>
              <p className="text-white/80 text-sm mt-1">
                {locale === "es"
                  ? "28M visitantes · South Beach, Brickell"
                  : "28M visitors · South Beach, Brickell"}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 4: FEATURED LISTINGS                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-grid py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow={locale === "es" ? "Destacados" : "Featured"}
            title={
              locale === "es" ? "Vehículos destacados" : "Featured vehicles"
            }
          />
          <Link
            href="/search"
            className="text-sm font-semibold text-[#7C3AED] hover:text-[#6D28D9] transition-colors"
          >
            {dictionary.actions.exploreCars}
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.slug}
              locale={locale}
              vehicle={vehicle}
              href={`/vehicle/${vehicle.slug}?${createQueryString({ ...searchDefaults, slug: vehicle.slug })}`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 5: BROWSE BY EXPERIENCE                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="page-grid py-14">
        <SectionHeading
          eyebrow={dictionary.home.browseByExperience}
          title={
            locale === "es" ? "Explora por experiencia" : "Browse by experience"
          }
        />
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {experiences.map((exp) => (
            <Link
              key={exp.href}
              href={exp.href}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer block"
            >
              <Image
                src={exp.image}
                alt={locale === "es" ? exp.label : exp.labelEn}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-sm font-bold">
                  {locale === "es" ? exp.label : exp.labelEn}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 6: HOW IT WORKS                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#F5F5F5] py-16 md:py-20">
        <div className="page-grid">
          <SectionHeading
            eyebrow={dictionary.nav.howItWorks}
            title={locale === "es" ? "Cómo funciona" : "How it works"}
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.titleEs} className="flex flex-col gap-4">
                  {/* Step image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={step.image}
                      alt={locale === "es" ? step.titleEs : step.titleEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {index + 1}
                    </div>
                    <Icon className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#231F20] text-base">
                      {locale === "es" ? step.titleEs : step.titleEn}
                    </h3>
                    <p className="mt-1 text-sm text-[#6B7280] leading-relaxed">
                      {locale === "es" ? step.detailEs : step.detailEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SECTION 7: TRUST SIGNALS                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="section-gradient-down py-14">
        <div className="page-grid">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-6 bg-white border border-[#E5E5E5] rounded-xl">
              <Car className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-3xl font-bold text-[#7C3AED]">
                {totalTrips.toLocaleString()}+
              </p>
              <p className="text-[#6B7280] text-sm mt-1">
                {dictionary.home.trustTripsCount}
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-[#E5E5E5] rounded-xl">
              <Star className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-3xl font-bold text-[#7C3AED]">{avgRating}</p>
              <p className="text-[#6B7280] text-sm mt-1">
                {dictionary.home.trustRating}
              </p>
            </div>
            <div className="text-center p-6 bg-white border border-[#E5E5E5] rounded-xl">
              <Users className="w-6 h-6 text-[#7C3AED] mx-auto mb-2" />
              <p className="text-3xl font-bold text-[#7C3AED]">{totalHosts}</p>
              <p className="text-[#6B7280] text-sm mt-1">
                {dictionary.home.trustHostsCount}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
