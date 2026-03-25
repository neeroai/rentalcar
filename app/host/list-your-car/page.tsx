import { HostOnboardingWizard } from '@/components/host-tools';
import { PageIntro } from '@/components/site-chrome';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function HostListYourCarPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow="Host wizard"
        subtitle={
          locale === 'es'
            ? 'Mock multi-step para alta de vehículo.'
            : 'Multi-step mock for new vehicle onboarding.'
        }
        title={dictionary.host.wizardTitle}
      />

      <section className="page-grid pb-16 md:pb-20">
        <HostOnboardingWizard locale={locale} />
      </section>
    </>
  );
}
