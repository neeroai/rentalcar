/**
 * @file account/messages/page.tsx
 * @description Account messages page — thread list with active thread view and message bubbles.
 * @module app/account/messages
 * @exports MessagesPage
 */

import { SendHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { AccountShell } from '@/components/site-chrome';
import { messageThreads, vehicles } from '@/data/mock';
import { getDictionary, getLocale } from '@/lib/i18n';
import { getLocalizedText, getVehicleBySlug } from '@/lib/utils';

/**
 * Messages account page with thread list, active thread header, bubbles, and input area.
 *
 * @returns Full-page server component.
 *
 * @example
 * // Rendered automatically at /account/messages
 */
export default async function MessagesPage() {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);
  const activeThread = messageThreads[0];
  const activeVehicle = getVehicleBySlug(vehicles, activeThread.vehicleSlug);

  return (
    <AccountShell current="messages" dictionary={dictionary} locale={locale}>
      <h1 className="mb-6 text-2xl font-bold text-[#231F20]">{dictionary.account.messagesTitle}</h1>

      <div className="grid gap-4 xl:grid-cols-[0.75fr_1.25fr]">
        {/* Thread list */}
        <div className="surface-panel rounded-[1.8rem] p-2">
          {messageThreads.map((thread) => {
            const isActive = thread.id === activeThread.id;

            return (
              <article
                className={`cursor-pointer rounded-lg p-3 transition-colors ${
                  isActive
                    ? 'border border-[var(--primary)] bg-[var(--primary-soft)]'
                    : 'border border-transparent hover:bg-[var(--surface-alt)]'
                }`}
                key={thread.id}
              >
                <div className="flex items-start gap-3">
                  <Image
                    alt={thread.hostName}
                    className="h-10 w-10 rounded-full object-cover"
                    height={40}
                    src={thread.hostAvatar}
                    width={40}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-[#231F20]">{thread.hostName}</p>
                      {thread.unread > 0 ? (
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[10px] font-bold text-white">
                          {thread.unread}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-xs text-[#6B7280]">
                      {getLocalizedText(locale, thread.subject)}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-[#6B7280]">
                      {getLocalizedText(locale, thread.preview)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Active thread */}
        <div className="surface-panel flex flex-col rounded-[1.8rem]">
          {/* Thread header */}
          <div className="flex items-start justify-between gap-4 border-b border-[#E5E5E5] px-6 py-4">
            <div>
              <h2 className="text-lg font-bold text-[#231F20]">{activeThread.hostName}</h2>
              {activeVehicle ? (
                <p className="mt-0.5 text-sm text-[#6B7280]">
                  {activeVehicle.year} {activeVehicle.make} {activeVehicle.model}
                </p>
              ) : null}
            </div>
            {activeVehicle ? (
              <Link
                className="cursor-pointer text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                href={`/vehicle/${activeVehicle.slug}`}
              >
                {locale === 'es' ? 'Ver auto' : 'View car'}
              </Link>
            ) : null}
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
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

          {/* Input area */}
          <div className="border-t border-[#E5E5E5] px-4 py-3">
            <div className="flex items-center gap-2 rounded-[1rem] border border-[rgba(198,184,163,0.58)] bg-white px-4 py-2">
              <input
                className="flex-1 bg-transparent text-sm text-[#231F20] outline-none placeholder:text-[#6B7280]"
                disabled
                placeholder={locale === 'es' ? 'Escribe un mensaje…' : 'Type a message…'}
                type="text"
              />
              <button
                aria-label={locale === 'es' ? 'Enviar mensaje' : 'Send message'}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[var(--primary)] text-white transition-colors hover:bg-[var(--primary-hover)]"
                disabled
                type="button"
              >
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AccountShell>
  );
}

/**
 * Single message bubble — right-aligned for user, left for host.
 *
 * @param align - "end" for user messages, "start" for host messages.
 * @param text - Message content.
 * @returns Message bubble div.
 *
 * @example
 * <MessageBubble align="end" text="Hola, ¿cómo estás?" />
 */
function MessageBubble({
  align,
  text,
}: {
  align: 'start' | 'end';
  text: string;
}): ReactNode {
  return (
    <div className={`flex ${align === 'end' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[24rem] rounded-xl px-4 py-2.5 text-sm leading-6 ${
          align === 'end'
            ? 'bg-[var(--primary)] text-white'
            : 'bg-[var(--surface-alt)] text-[#231F20]'
        }`}
      >
        {text}
      </div>
    </div>
  );
}
