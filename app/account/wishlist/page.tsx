/**
 * @file account/wishlist/page.tsx
 * @description Account wishlist page — saved vehicles grid with empty state.
 * @module app/account/wishlist
 * @exports WishlistPage
 */

import { Heart } from 'lucide-react';

import { VehicleCard } from '@/components/motion-ui';
import { AccountShell } from '@/components/site-chrome';
import { vehicles, wishlistedSlugs } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';

/**
 * Wishlist account page with VehicleCard grid and empty state fallback.
 *
 * @returns Full-page server component.
 *
 * @example
 * // Rendered automatically at /account/wishlist
 */
export default async function WishlistPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const savedVehicles = vehicles.filter((vehicle) => wishlistedSlugs.includes(vehicle.slug));

  return (
    <AccountShell current="wishlist" dictionary={dictionary} locale={locale}>
      <h1 className="mb-6 text-2xl font-bold text-[#231F20]">{dictionary.account.wishlistTitle}</h1>

      {savedVehicles.length === 0 ? (
        <div className="surface-panel flex flex-col items-center justify-center rounded-[1.8rem] py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary-soft)]">
            <Heart className="h-7 w-7 text-[var(--primary)]" />
          </div>
          <p className="mt-4 text-base font-semibold text-[#231F20]">
            {locale === 'es' ? 'Nada guardado aún' : 'Nothing saved yet'}
          </p>
          <p className="mt-2 max-w-xs text-sm text-[#6B7280]">
            {locale === 'es'
              ? 'Guarda los autos que te gustan para compararlos más tarde.'
              : 'Save the cars you like to compare them later.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {savedVehicles.map((vehicle) => (
            <VehicleCard
              ctaLabel={locale === 'es' ? 'Ver detalle' : 'See details'}
              href={`/vehicle/${vehicle.slug}`}
              key={vehicle.slug}
              locale={locale}
              metaLabel={dictionary.common.instantBook}
              vehicle={vehicle}
            />
          ))}
        </div>
      )}
    </AccountShell>
  );
}
