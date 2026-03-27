/**
 * @file site-chrome.tsx
 * @description Global shell components shared by the Orlando-first MVP.
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

interface SiteHeaderProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(198,184,163,0.32)] bg-[rgba(252,250,246,0.72)] backdrop-blur-2xl">
      <div className="page-grid flex h-[4.6rem] items-center justify-between gap-4">
        <Link
          className="text-[1.58rem] font-black tracking-[-0.085em] text-[#1f2724] transition-opacity hover:opacity-90 md:text-[1.82rem]"
          href="/"
        >
          rentatelo<span className="text-[var(--primary)]">.</span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[rgba(198,184,163,0.5)] bg-white/66 p-1 shadow-[var(--shadow-sm)] lg:flex">
          <Link
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--text-soft)] transition-colors hover:bg-white hover:text-[var(--foreground)]"
            href="/search"
          >
            {dictionary.nav.search}
          </Link>
          <Link
            className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--text-soft)] transition-colors hover:bg-white hover:text-[var(--foreground)]"
            href="/how-it-works"
          >
            {dictionary.nav.howItWorks}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LocaleToggle
            label={dictionary.actions.switchLocale}
            locale={locale}
          />
          <Link
            aria-label={locale === "es" ? "Abrir cuenta" : "Open account"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(198,184,163,0.55)] bg-white/80 text-[var(--text-soft)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            href="/account/trips"
          >
            <CircleUserRound className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

interface SiteFooterProps {
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: locale === "es" ? "Plataforma" : "Platform",
      links: [
        { href: "/search", label: dictionary.nav.search },
        { href: "/how-it-works", label: dictionary.nav.howItWorks },
      ],
    },
    {
      heading: locale === "es" ? "Cuenta" : "Account",
      links: [
        { href: "/account/trips", label: dictionary.nav.trips },
        { href: "/account/messages", label: dictionary.nav.messages },
        { href: "/account/wishlist", label: dictionary.nav.wishlist },
      ],
    },
    {
      heading: locale === "es" ? "Ciudades" : "Cities",
      links: [
        { href: "/search?pickup=mco", label: "Orlando" },
        { href: "/search?pickup=mia", label: "Miami" },
      ],
    },
  ];

  return (
    <footer className="mt-16 bg-[#1f2724] py-14 text-white">
      <div className="page-grid grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.45fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="text-lg font-black tracking-[-0.06em]">
            rentatelo<span className="text-[var(--secondary)]">.</span>
          </p>
          <p className="mt-4 text-sm leading-7 text-white/72">
            {dictionary.footer.tagline}
          </p>
          <p className="mt-4 text-xs leading-6 text-white/45">
            {dictionary.footer.note}
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
              {column.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-sm text-white/72 transition-colors hover:text-white"
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

      <div className="page-grid flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-white/38">
        <p>
          &copy; {year} rentatelo.{" "}
          {locale === "es"
            ? "Demo Orlando-first para validación comercial."
            : "Orlando-first demo for commercial validation."}
        </p>
        <div className="flex gap-4">
          <Link className="transition-colors hover:text-white/72" href="/terms">
            {locale === "es" ? "Términos" : "Terms"}
          </Link>
          <Link
            className="transition-colors hover:text-white/72"
            href="/privacy"
          >
            {locale === "es" ? "Privacidad" : "Privacy"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

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
      className="surface-panel surface-elevated flex flex-col gap-2 rounded-[2rem] p-2.5 md:flex-row md:items-stretch"
      method="get"
    >
      <FieldGroup
        icon={<MapPin className="h-4 w-4 text-[var(--primary)]" />}
        isLast={false}
        label={locale === "es" ? "Llegada" : "Arrival"}
      >
        <select
          aria-label={
            locale === "es"
              ? "Selecciona punto de llegada"
              : "Select pickup point"
          }
          className="w-full bg-transparent text-sm font-semibold text-[var(--foreground)] outline-none"
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

      <FieldGroup
        icon={<Calendar className="h-4 w-4 text-[var(--primary)]" />}
        isLast={false}
        label={locale === "es" ? "Desde" : "From"}
      >
        <input
          aria-label={locale === "es" ? "Fecha inicial" : "Start date"}
          className="w-full bg-transparent text-sm font-semibold text-[var(--foreground)] outline-none"
          defaultValue={startDefault}
          name="start"
          type="date"
        />
      </FieldGroup>

      <FieldGroup
        icon={<Calendar className="h-4 w-4 text-[var(--primary)]" />}
        isLast
        label={locale === "es" ? "Hasta" : "Until"}
      >
        <input
          aria-label={locale === "es" ? "Fecha final" : "End date"}
          className="w-full bg-transparent text-sm font-semibold text-[var(--foreground)] outline-none"
          defaultValue={endDefault}
          name="end"
          type="date"
        />
      </FieldGroup>

      <input name="category" type="hidden" value={categoryDefault} />

      <button
        className="btn-primary min-w-[15.5rem] px-6 text-sm md:text-[0.95rem]"
        data-testid="home-search-submit"
        type="submit"
      >
        <Search className="h-4 w-4" />
        {dictionary.actions.search}
      </button>
    </form>
  );
}

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
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="heading-balance mt-3 text-fluid-h2 font-black text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-[1.03rem] leading-7 text-[var(--muted)]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

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
    <article className="surface-panel surface-elevated overflow-hidden rounded-[2rem]">
      <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-72">
          <Image
            alt={name}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            src={image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
        </div>
        <div className="p-7 md:p-10">
          <div className="flex items-center gap-1 text-[var(--cta-success)]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                aria-hidden="true"
                className="h-4 w-4 fill-current"
              />
            ))}
            <span className="ml-2 text-sm font-semibold text-[var(--foreground)]">
              4.9
            </span>
          </div>
          <p className="heading-balance mt-5 text-fluid-h3 font-black text-[var(--foreground)]">
            {quote}
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            {detail}
          </p>
          <p className="mt-6 text-sm font-semibold text-[var(--foreground)]">
            {name}
          </p>
        </div>
      </div>
    </article>
  );
}

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
      className="surface-panel surface-elevated sticky top-20 z-20 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] p-4"
      data-testid="search-summary"
    >
      <div className="flex flex-wrap items-center gap-2">
        <SummaryChip>{pickup}</SummaryChip>
        <SummaryChip>{formatShortDate(start, locale)}</SummaryChip>
        <SummaryChip>{formatShortDate(end, locale)}</SummaryChip>
      </div>
      <Link
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
        href="/account/messages"
      >
        <MessageSquareMore className="h-4 w-4" />
        {locale === "es" ? "Contactar host" : "Contact host"}
      </Link>
    </div>
  );
}

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
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
          <aside className="space-y-4">
            <div className="surface-panel surface-elevated rounded-[1.6rem] p-3">
              <nav className="space-y-1">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = current === item.key;

                  return (
                    <Link
                      className={`flex items-center justify-between rounded-[1.1rem] px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                          : "text-[var(--text-soft)] hover:bg-[var(--surface-alt)] hover:text-[var(--foreground)]"
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

            <div className="rounded-[1.4rem] border border-[rgba(240,181,118,0.55)] bg-[rgba(240,181,118,0.16)] p-4 text-sm leading-6 text-[#6a563e]">
              {locale === "es"
                ? "Cuenta simulada para demostrar coordinación con host, seguimiento del viaje y guardados."
                : "Simulated account to demonstrate host coordination, trip tracking and saved cars."}
            </div>
          </aside>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

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
      className={`flex min-w-0 flex-1 items-center gap-3 rounded-[1.35rem] px-4 py-3 transition-colors hover:bg-[rgba(244,238,227,0.52)] ${
        isLast
          ? "border-transparent"
          : "border border-transparent md:border-r md:border-r-[rgba(198,184,163,0.46)]"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)]">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

function SummaryChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-[rgba(198,184,163,0.38)] bg-[var(--surface-alt)] px-3 py-1 text-sm font-medium text-[var(--text-soft)]">
      {children}
    </span>
  );
}
