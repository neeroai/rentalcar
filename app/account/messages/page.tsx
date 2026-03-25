import Image from 'next/image';
import Link from 'next/link';

import { AccountShell, PageIntro } from '@/components/site-chrome';
import { messageThreads, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { getLocalizedText, getVehicleBySlug } from '@/lib/utils';

export default async function MessagesPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const activeThread = messageThreads[0];
  const activeVehicle = getVehicleBySlug(vehicles, activeThread.vehicleSlug);

  return (
    <>
      <PageIntro
        eyebrow="Account"
        subtitle={
          locale === 'es'
            ? 'Inbox mock para coordinación con hosts.'
            : 'Mock inbox for host coordination.'
        }
        title={dictionary.account.messagesTitle}
      />

      <AccountShell current="messages" dictionary={dictionary} locale={locale}>
        <div className="grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
          <div className="surface-strong rounded-[1.8rem] p-4">
            {messageThreads.map((thread) => (
              <article
                className={`rounded-[1.35rem] p-4 ${thread.id === activeThread.id ? 'bg-[#18130f] text-white' : 'hover:bg-black/4'}`}
                key={thread.id}
              >
                <div className="flex items-start gap-3">
                  <Image
                    alt={thread.hostName}
                    className="h-12 w-12 rounded-2xl object-cover"
                    height={48}
                    src={thread.hostAvatar}
                    width={48}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold">{thread.hostName}</p>
                      {thread.unread > 0 ? (
                        <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 text-xs text-white">
                          {thread.unread}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm opacity-80">
                      {getLocalizedText(locale, thread.subject)}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm opacity-70">
                      {getLocalizedText(locale, thread.preview)}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="surface-strong rounded-[1.8rem] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Active thread</p>
                <h2 className="mt-3 font-display text-4xl">{activeThread.hostName}</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  {activeVehicle
                    ? `${activeVehicle.year} ${activeVehicle.make} ${activeVehicle.model}`
                    : ''}
                </p>
              </div>
              {activeVehicle ? (
                <Link
                  className="text-sm font-semibold text-[var(--accent)]"
                  href={`/vehicle/${activeVehicle.slug}`}
                >
                  Open vehicle
                </Link>
              ) : null}
            </div>

            <div className="mt-8 space-y-4">
              <MessageBubble
                align="start"
                text={
                  locale === 'es'
                    ? 'Hola Valentina, quedamos para entrega en garage C. Te envío foto exacta 20 minutos antes.'
                    : 'Hi Valentina, we are set for garage C. I will send the exact handoff photo 20 minutes before arrival.'
                }
              />
              <MessageBubble
                align="end"
                text={
                  locale === 'es'
                    ? 'Perfecto, viajo con dos niños y una maleta grande. Gracias.'
                    : 'Perfect, I am traveling with two children and one large suitcase. Thank you.'
                }
              />
              <MessageBubble
                align="start"
                text={
                  locale === 'es'
                    ? 'Todo cabe bien en esta SUV. Si quieres, dejo una silla infantil lista.'
                    : 'Everything fits comfortably in this SUV. If needed, I can leave a child seat installed.'
                }
              />
            </div>
          </div>
        </div>
      </AccountShell>
    </>
  );
}

function MessageBubble({ align, text }: { align: 'start' | 'end'; text: string }) {
  return (
    <div className={`flex ${align === 'end' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[32rem] rounded-[1.35rem] px-4 py-3 text-sm leading-6 ${
          align === 'end'
            ? 'bg-[#18130f] text-white'
            : 'border border-black/10 bg-[#fcf8f2] text-[#18130f]'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
