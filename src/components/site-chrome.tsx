/**
 * @file site-chrome.tsx
 * @description Global layout shell components — header, footer, search form, and shared UI primitives.
 * @module components/site-chrome
 * @exports SiteHeader, SiteFooter, SearchHeroForm, SectionHeading, PageIntro, ReviewHighlight, BookingSummaryStrip, AccountShell
 */

import {
  Calendar,
  ChevronRight,
  CircleUserRound,
  Mail,
  MapPin,
  MessageSquareMore,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { LocaleToggle } from "@/components/locale-toggle";
import { pickupOptions } from "@/data/mock";
import type { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { formatShortDate, getLocalizedText } from "@/lib/utils";

type Dictionary = ReturnType<typeof getDictionary>;

// ---------------------------------------------------------------------------
// SiteHeader
// ---------------------------------------------------------------------------

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Primary sticky site header with logo, nav links, locale toggle, and host CTA.
 *
 * @param locale - Active locale for i18n.
 * @param dictionary - Translated strings object.
 * @returns Sticky header element.
 *
 * @example
 * <SiteHeader locale="es" dictionary={dict} />
 */
export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-[#E5E5E5] bg-white">
      <div className="page-grid flex h-full items-center justify-between gap-6">
        {/* Logo */}
        <Link
          className="flex items-center gap-0.5 font-bold text-xl text-[#231F20]"
          href="/"
        >
          rentatelo<span className="text-[#7C3AED]">.</span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            className="text-sm text-[#6B7280] transition-colors hover:text-[#231F20]"
            href="/how-it-works"
          >
            {dictionary.nav.howItWorks}
          </Link>
          <Link
            className="text-sm text-[#6B7280] transition-colors hover:text-[#231F20]"
            href="/account/trips"
          >
            {dictionary.nav.trips}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LocaleToggle
            label={dictionary.actions.switchLocale}
            locale={locale}
          />
          <Link
            aria-label="Mi cuenta"
            className="flex h-[44px] w-[44px] items-center justify-center text-[#6B7280] transition-colors hover:text-[#231F20]"
            href="/account/trips"
          >
            <CircleUserRound className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// SiteFooter
// ---------------------------------------------------------------------------

interface SiteFooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

/**
 * Multi-column dark footer with company, support, and city links.
 *
 * @param locale - Active locale.
 * @param dictionary - Translated strings.
 * @returns Footer element.
 *
 * @example
 * <SiteFooter locale="es" dictionary={dict} />
 */
export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: "Empresa",
      links: [
        { href: "/about", label: locale === "es" ? "Sobre nosotros" : "About" },
        { href: "/how-it-works", label: dictionary.nav.howItWorks },
        { href: "/host", label: locale === "es" ? "Anfitriones" : "Hosts" },
      ],
    },
    {
      heading: "Soporte",
      links: [
        { href: "/help", label: locale === "es" ? "Ayuda" : "Help" },
        { href: "/safety", label: locale === "es" ? "Seguridad" : "Safety" },
        { href: "/insurance", label: locale === "es" ? "Seguro" : "Insurance" },
      ],
    },
    {
      heading: "Ciudades",
      links: [
        { href: "/search?pickup=mco", label: "Orlando" },
        { href: "/search?pickup=mia", label: "Miami" },
      ],
    },
  ];

  return (
    <footer className="bg-[#231F20] py-12 text-white">
      <div className="page-grid grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <p className="font-bold text-lg text-white">
            rentatelo<span className="text-[#7C3AED]">.</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-white/60">
            {dictionary.footer.tagline}
          </p>
          <p className="mt-4 text-xs text-white/35">{dictionary.footer.note}</p>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              {col.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-white/65 transition-colors hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="page-grid mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
        <p className="text-xs text-white/35">
          &copy; {year} rentatelo.{" "}
          {locale === "es"
            ? "Todos los derechos reservados."
            : "All rights reserved."}
        </p>
        <div className="flex gap-4">
          <Link
            className="text-xs text-white/40 hover:text-white/70"
            href="/terms"
          >
            {locale === "es" ? "Términos" : "Terms"}
          </Link>
          <Link
            className="text-xs text-white/40 hover:text-white/70"
            href="/privacy"
          >
            {locale === "es" ? "Privacidad" : "Privacy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// SearchHeroForm
// ---------------------------------------------------------------------------

interface SearchHeroFormProps {
  locale: Locale;
  dictionary: Dictionary;
  defaults?: {
    pickup?: string;
    start?: string;
    end?: string;
    time?: string;
    category?: string;
  };
  action?: string;
}

/**
 * Main search form rendered in the hero and search page. Submits as GET to /search.
 *
 * @param locale - Active locale.
 * @param dictionary - Translated strings.
 * @param defaults - Pre-filled field values.
 * @param action - Form action URL.
 * @returns Search form element.
 *
 * @example
 * <SearchHeroForm locale="es" dictionary={dict} />
 */
export function SearchHeroForm({
  locale,
  dictionary,
  defaults,
  action = "/search",
}: SearchHeroFormProps) {
  const pickupDefault = defaults?.pickup ?? "mco";
  const startDefault = defaults?.start ?? "2026-04-18";
  const endDefault = defaults?.end ?? "2026-04-22";
  const categoryDefault = defaults?.category ?? "";

  return (
    <form
      action={action}
      className="flex flex-col gap-2 rounded-xl border border-[#E5E5E5] bg-white p-2 shadow-md md:flex-row md:items-stretch"
      method="get"
    >
      {/* Location */}
      <FieldGroup
        icon={<MapPin className="h-4 w-4 text-[#7C3AED]" />}
        label={locale === "es" ? "¿Dónde?" : "Where?"}
      >
        <select
          className="w-full bg-transparent text-sm font-medium text-[#231F20] outline-none"
          defaultValue={pickupDefault}
          name="pickup"
        >
          {pickupOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {getLocalizedText(locale, option.label)}
            </option>
          ))}
        </select>
      </FieldGroup>

      {/* Start date */}
      <FieldGroup
        icon={<Calendar className="h-4 w-4 text-[#7C3AED]" />}
        label={locale === "es" ? "Desde" : "From"}
      >
        <input
          className="w-full bg-transparent text-sm font-medium text-[#231F20] outline-none"
          defaultValue={startDefault}
          name="start"
          type="date"
        />
      </FieldGroup>

      {/* End date */}
      <FieldGroup
        icon={<Calendar className="h-4 w-4 text-[#7C3AED]" />}
        label={locale === "es" ? "Hasta" : "Until"}
        isLast
      >
        <input
          className="w-full bg-transparent text-sm font-medium text-[#231F20] outline-none"
          defaultValue={endDefault}
          name="end"
          type="date"
        />
      </FieldGroup>

      {/* Hidden category default */}
      <input name="category" type="hidden" value={categoryDefault} />

      {/* Submit */}
      <button
        className="flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6D28D9]"
        data-testid="home-search-submit"
        type="submit"
      >
        <Search className="h-4 w-4" />
        {dictionary.actions.search}
      </button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// SectionHeading
// ---------------------------------------------------------------------------

/**
 * Section-level heading with optional eyebrow and subtitle.
 *
 * @param eyebrow - Small label above the title.
 * @param title - Main heading text.
 * @param subtitle - Supporting description.
 * @returns Heading group element.
 *
 * @example
 * <SectionHeading eyebrow="Destacados" title="Autos populares" />
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7C3AED]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-fluid-h2 mt-3 font-bold text-[#231F20]">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-base leading-relaxed text-[#6B7280]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

// ---------------------------------------------------------------------------
// PageIntro
// ---------------------------------------------------------------------------

/**
 * Page-level intro heading with eyebrow and subtitle. Wraps SectionHeading.
 *
 * @param eyebrow - Small label above the title.
 * @param title - Page heading.
 * @param subtitle - Page description.
 * @returns Section element with page-grid padding.
 *
 * @example
 * <PageIntro title="Buscar autos" subtitle="Encuentra el auto ideal para tu viaje." />
 */
export function PageIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="page-grid py-10 md:py-16">
      <SectionHeading eyebrow={eyebrow} subtitle={subtitle} title={title} />
    </section>
  );
}

// ---------------------------------------------------------------------------
// ReviewHighlight
// ---------------------------------------------------------------------------

/**
 * Turo-style review card with image, star rating, quote, and author info.
 *
 * @param image - Photo URL for the reviewer or car.
 * @param name - Reviewer name.
 * @param quote - Short review quote.
 * @param detail - Supporting context text.
 * @returns Review card article element.
 *
 * @example
 * <ReviewHighlight image="/img/user.jpg" name="Ana R." quote="Excelente servicio." detail="Rentó un SUV en Orlando." />
 */
export function ReviewHighlight({
  image,
  name,
  quote,
  detail,
}: {
  image: string;
  name: string;
  quote: string;
  detail: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm">
      <div className="grid md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-64">
          <Image
            alt={name}
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            src={image}
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-[#22C55E] text-[#22C55E]" />
            ))}
            <span className="ml-1 text-sm font-semibold text-[#231F20]">
              4.9
            </span>
          </div>
          <p className="mt-4 text-2xl font-bold leading-tight text-[#231F20]">
            {quote}
          </p>
          <p className="mt-4 text-base leading-7 text-[#6B7280]">{detail}</p>
          <p className="mt-6 text-sm font-semibold text-[#231F20]">{name}</p>
        </div>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// BookingSummaryStrip
// ---------------------------------------------------------------------------

/**
 * Sticky strip showing active booking parameters (location, dates).
 *
 * @param locale - Active locale for date formatting.
 * @param start - ISO start date string.
 * @param end - ISO end date string.
 * @param pickup - Pickup location label.
 * @returns Sticky summary bar element.
 *
 * @example
 * <BookingSummaryStrip locale="es" start="2026-04-18" end="2026-04-22" pickup="MCO" />
 */
export function BookingSummaryStrip({
  locale,
  start,
  end,
  pickup,
}: {
  locale: Locale;
  start: string;
  end: string;
  pickup: string;
}) {
  return (
    <div
      className="sticky top-20 z-20 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#E5E5E5] bg-white p-4"
      data-testid="search-summary"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm text-[#6B7280]">
          {pickup}
        </span>
        <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm text-[#6B7280]">
          {formatShortDate(start, locale)}
        </span>
        <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm text-[#6B7280]">
          {formatShortDate(end, locale)}
        </span>
      </div>
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#231F20] transition-colors hover:text-[#7C3AED]"
        href="/account/messages"
      >
        <MessageSquareMore className="h-4 w-4" />
        {locale === "es" ? "Contactar anfitrión" : "Contact host"}
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// AccountShell
// ---------------------------------------------------------------------------

/**
 * Two-column account layout with sidebar nav and demo mode notice.
 *
 * @param locale - Active locale.
 * @param dictionary - Translated strings.
 * @param current - Active nav item key.
 * @param children - Main content area.
 * @returns Account layout section.
 *
 * @example
 * <AccountShell locale="es" dictionary={dict} current="trips">...</AccountShell>
 */
export function AccountShell({
  locale,
  dictionary,
  current,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  current: "trips" | "messages" | "wishlist";
  children: ReactNode;
}) {
  const items = [
    {
      href: "/account/trips",
      label: dictionary.nav.trips,
      key: "trips",
      icon: Calendar,
    },
    {
      href: "/account/messages",
      label: dictionary.nav.messages,
      key: "messages",
      icon: Mail,
    },
    {
      href: "/account/wishlist",
      label: dictionary.nav.wishlist,
      key: "wishlist",
      icon: Star,
    },
  ] as const;

  return (
    <section className="page-grid py-8 md:py-14">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
          {/* Sidebar */}
          <aside>
            <div className="rounded-xl border border-[#E5E5E5] bg-white p-2">
              <nav className="space-y-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = current === item.key;

                  return (
                    <Link
                      className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#EDE9FE] font-semibold text-[#7C3AED]"
                          : "text-[#6B7280] hover:bg-[#F5F5F5]"
                      }`}
                      href={item.href}
                      key={item.href}
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </span>
                      <ChevronRight className="h-4 w-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Demo notice */}
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              {locale === "es"
                ? "Cuenta simulada para demostrar viajes, mensajes y guardados."
                : "Simulated account to showcase trips, messages, and saved cars."}
            </div>
          </aside>

          {/* Content */}
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// FieldGroup (private)
// ---------------------------------------------------------------------------

/**
 * Internal form field wrapper with icon and label for SearchHeroForm.
 *
 * @param label - Field label text.
 * @param icon - Optional leading icon.
 * @param children - Input or select element.
 * @param isLast - When true, suppresses the right border divider.
 * @returns Styled field group div.
 */
function FieldGroup({
  label,
  icon,
  children,
  isLast = false,
}: {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 cursor-pointer items-start gap-2 border-b px-3 py-2 md:border-b-0 md:border-r border-[#E5E5E5] ${isLast ? "border-b-0 md:border-r-0" : ""}`}
    >
      <div className="mt-0.5 shrink-0 text-[#7C3AED]">{icon}</div>
      <div className="min-w-0 flex-1">
        <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-[#6B7280]">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}
