import { VehicleCard } from '@/components/motion-ui';
import { AccountShell, PageIntro } from '@/components/site-chrome';
import { vehicles, wishlistedSlugs } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function WishlistPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const savedVehicles = vehicles.filter((vehicle) => wishlistedSlugs.includes(vehicle.slug));

  return (
    <>
      <PageIntro
        eyebrow="Account"
        subtitle={
          locale === 'es'
            ? 'Vehículos guardados para comparar más tarde.'
            : 'Saved vehicles to compare later.'
        }
        title={dictionary.account.wishlistTitle}
      />

      <AccountShell current="wishlist" dictionary={dictionary} locale={locale}>
        <div className="grid gap-5 xl:grid-cols-2">
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
      </AccountShell>
    </>
  );
}
