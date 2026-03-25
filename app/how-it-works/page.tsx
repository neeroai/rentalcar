import { Clock3, MapPinned, Shield, Smartphone } from 'lucide-react';

import { PageIntro } from '@/components/site-chrome';
import { getDictionary, getLocale } from '@/lib/i18n';

export default async function HowItWorksPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const icons = [MapPinned, Smartphone, Clock3];

  return (
    <>
      <PageIntro
        eyebrow="Flow"
        subtitle={dictionary.howItWorks.subtitle}
        title={dictionary.howItWorks.title}
      />

      <section className="page-grid pb-16 md:pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {dictionary.howItWorks.steps.map((step, index) => {
            const Icon = icons[index] ?? Shield;

            return (
              <article className="surface-strong rounded-[1.9rem] p-6 md:p-8" key={step.title}>
                <Icon className="h-5 w-5 text-[var(--accent)]" />
                <h2 className="mt-5 font-display text-3xl leading-tight">{step.title}</h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">{step.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="surface-strong rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">{dictionary.howItWorks.trustTitle}</p>
            <h2 className="mt-4 font-display text-4xl">
              {locale === 'es'
                ? 'La confianza se construye antes del checkout.'
                : 'Trust gets built before checkout.'}
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-[color:var(--muted)]">
              <li>
                {locale === 'es'
                  ? 'Precio por día visible y sin categorías ambiguas.'
                  : 'Daily pricing stays visible with no ambiguous categories.'}
              </li>
              <li>
                {locale === 'es'
                  ? 'Host, tiempo de respuesta y políticas disponibles en la ficha.'
                  : 'Host profile, response time and policies are visible on the listing.'}
              </li>
              <li>
                {locale === 'es'
                  ? 'Entrega a aeropuerto, hotel y parques integrada al flujo.'
                  : 'Airport, hotel and theme-park handoffs are built into the flow.'}
              </li>
            </ul>
          </article>
          <article className="surface-strong rounded-[2rem] bg-[#18130f] p-6 text-white md:p-8">
            <p className="eyebrow text-[color:var(--accent-soft)]">Why it converts</p>
            <h2 className="mt-4 font-display text-4xl">
              {locale === 'es'
                ? 'Menos pasos irrelevantes, más contexto útil.'
                : 'Fewer irrelevant steps, more useful context.'}
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              {locale === 'es'
                ? 'El prototipo está pensado para que el usuario llegue rápido a una decisión sin perder señales de premium y confianza.'
                : 'The prototype is designed to move users quickly toward a decision without losing premium cues and trust.'}
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
