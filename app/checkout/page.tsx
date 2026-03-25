import { CreditCard, Shield, Sparkles, User } from 'lucide-react';
import Link from 'next/link';

import { PageIntro } from '@/components/site-chrome';
import { checkoutAddons, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { createQueryString, formatCurrency, getVehicleBySlug } from '@/lib/utils';

interface CheckoutPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const params = await searchParams;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const vehicle = getVehicleBySlug(vehicles, slug ?? vehicles[0].slug) ?? vehicles[0];
  const start = Array.isArray(params.start) ? params.start[0] : (params.start ?? '2026-04-18');
  const end = Array.isArray(params.end) ? params.end[0] : (params.end ?? '2026-04-22');
  const pickup = Array.isArray(params.pickup) ? params.pickup[0] : (params.pickup ?? 'mco');

  const tripSubtotal = vehicle.pricePerDay * 4;
  const fees = 42;
  const selectedAddons = checkoutAddons.slice(0, 2);
  const total = tripSubtotal + fees + selectedAddons.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <PageIntro
        eyebrow="Checkout"
        subtitle={dictionary.checkout.subtitle}
        title={dictionary.checkout.title}
      />

      <section className="page-grid pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="surface-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">
              {vehicle.year} {vehicle.make}
            </p>
            <h2 className="mt-3 font-display text-4xl">{vehicle.model}</h2>
            <div className="mt-6 space-y-4 rounded-[1.5rem] bg-[#f8f1e9] p-5 text-sm">
              <div className="flex justify-between gap-3">
                <span>{start}</span>
                <span>{end}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>{pickup.toUpperCase()}</span>
                <span>{vehicle.host.name}</span>
              </div>
            </div>
            <div className="mt-6 space-y-4 border-t border-black/8 pt-5 text-sm">
              <div className="flex justify-between gap-3">
                <span>{formatCurrency(vehicle.pricePerDay, locale)} x 4</span>
                <span>{formatCurrency(tripSubtotal, locale)}</span>
              </div>
              <div className="flex justify-between gap-3">
                <span>Platform + delivery</span>
                <span>{formatCurrency(fees, locale)}</span>
              </div>
              {selectedAddons.map((addon) => (
                <div className="flex justify-between gap-3" key={addon.id}>
                  <span>{addon.title[locale]}</span>
                  <span>{formatCurrency(addon.price, locale)}</span>
                </div>
              ))}
              <div className="flex justify-between gap-3 border-t border-black/8 pt-4 text-base font-semibold">
                <span>Total</span>
                <span>{formatCurrency(total, locale)}</span>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="font-display text-3xl">{dictionary.checkout.guestInfo}</h2>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" value="Valentina Gómez" />
                <Field label="WhatsApp" value="+57 300 555 0123" />
                <Field label="Airline / flight" value="Avianca AV 044" />
                <Field label="Hotel or address" value="Grand Floridian Resort" />
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="font-display text-3xl">{dictionary.checkout.payment}</h2>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Card number" value="4242 4242 4242 4242" />
                <Field label="Name on card" value="Valentina Gómez" />
                <Field label="Expiration" value="12/29" />
                <Field label="CVC" value="123" />
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="font-display text-3xl">Add-ons</h2>
              </div>
              <div className="mt-6 space-y-3">
                {checkoutAddons.map((addon, index) => (
                  <label
                    className="flex items-start justify-between gap-4 rounded-[1.4rem] border border-black/10 bg-[#fcf8f2] px-4 py-4"
                    key={addon.id}
                  >
                    <div>
                      <p className="font-semibold">{addon.title[locale]}</p>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">
                        {addon.detail[locale]}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(addon.price, locale)}</p>
                      <input defaultChecked={index < 2} type="checkbox" />
                    </div>
                  </label>
                ))}
              </div>
            </section>

            <section className="surface-strong rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="font-display text-3xl">{dictionary.checkout.protection}</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[color:var(--muted)]">
                <li>Flexible cancellation up to 48h before pickup.</li>
                <li>Host support via inbox and WhatsApp-style coordination.</li>
                <li>Demo protection summary included before confirmation.</li>
              </ul>
            </section>

            <Link
              className="inline-flex w-full items-center justify-center rounded-full bg-[#18130f] px-6 py-4 text-sm font-semibold text-white"
              data-testid="confirm-booking"
              href={`/booking/confirmed?${createQueryString({ slug: vehicle.slug, start, end, pickup })}`}
            >
              {dictionary.actions.confirm}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[color:var(--muted)]">{label}</span>
      <input
        className="w-full rounded-[1.25rem] border border-black/10 bg-[#fcf8f2] px-4 py-3"
        defaultValue={value}
        type="text"
      />
    </label>
  );
}
