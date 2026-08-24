
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

type QuizArea = 'lashes' | 'brows' | null;

type QuizChoice = {
  id: string;
  title: string;
  description: string;
};

const lashChoices: QuizChoice[] = [
  {
    id: 'brasileiro',
    title: 'Cheio e equilibrado',
    description: 'Quero cílios mais cheios, leves e bem alinhados.',
  },
  {
    id: 'luxo',
    title: 'Intenso e marcante',
    description: 'Amo volume e quero um olhar mais poderoso.',
  },
  {
    id: 'fox',
    title: 'Alongado e sensual',
    description: 'Quero um efeito que alongue e valorize o formato dos olhos.',
  },
  {
    id: 'sirena',
    title: 'Delineado e elegante',
    description:
      'Quero um efeito alongado, mais natural e com aparência de delineado.',
  },
];

const browChoices: QuizChoice[] = [
  {
    id: 'natural',
    title: 'Valorizar o formato natural',
    description:
      'Quero organizar e valorizar minhas sobrancelhas sem mudar demais o formato.',
  },
  {
    id: 'lamination',
    title: 'Fios alinhados e mais definidos',
    description:
      'Quero alinhar os fios e deixar minhas sobrancelhas com um visual mais moderno.',
  },
];

export default function Experience() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  const [area, setArea] = useState<QuizArea>(null);
  const [choice, setChoice] = useState<string | null>(null);

  const selectedService = useMemo(() => {
    if (!choice) return null;

    const serviceMap: Record<string, string> = {
      brasileiro: 'volume-brasileiro',
      luxo: 'volume-luxo',
      fox: 'volume-fox-eyes',
      sirena: 'volume-sirena',
      natural: 'design-natural',
      lamination: 'brow-lamination',
    };

    const serviceId = serviceMap[choice];

    return siteConfig.services.items.find(
      (service) => service.id === serviceId
    );
  }, [choice]);

  const currentChoices =
    area === 'lashes' ? lashChoices : browChoices;

  const resetQuiz = () => {
    setArea(null);
    setChoice(null);
  };

  const selectArea = (selectedArea: QuizArea) => {
    setArea(selectedArea);
    setChoice(null);
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-cream-100 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-salmon-500/[0.035] blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <motion.div
              variants={staggerItem}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-salmon-500" />

              <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-600">
                {siteConfig.experience.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-ink-700 sm:text-5xl lg:text-6xl"
            >
              Descubra o procedimento

              <br />

              <span className="italic text-salmon-500">
                ideal para você.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-sm leading-8 text-ink-700/45 lg:pb-2"
          >
            Responda algumas perguntas rápidas e descubra qual procedimento
            combina melhor com o resultado que você procura.
          </motion.p>
        </motion.div>

        {/* QUIZ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: easeLux,
          }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-6 sm:p-10 lg:p-14">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-salmon-500/[0.07] blur-[100px]" />

            <div className="relative">
              {/* QUIZ HEADER */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-salmon-500" />

                    <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                      Teste personalizado
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-cream-50 sm:text-4xl">
                    Qual resultado você{' '}
                    <span className="italic text-salmon-500">
                      procura?
                    </span>
                  </h3>
                </div>

                {area && (
                  <button
                    type="button"
                    onClick={resetQuiz}
                    className="flex w-fit items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-cream-50/35 transition-colors duration-300 hover:text-salmon-500"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Reiniciar
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {/* STEP 1 */}
                {!area && (
                  <motion.div
                    key="area"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: easeLux }}
                    className="mt-10 grid gap-4 sm:grid-cols-2"
                  >
                    <button
                      type="button"
                      onClick={() => selectArea('lashes')}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-cream-50/10 bg-cream-50/[0.035] p-6 text-left transition-all duration-500 hover:border-salmon-500/50 hover:bg-cream-50/[0.06] sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-3xl italic text-salmon-500">
                          Cílios
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/10 transition-all duration-500 group-hover:border-salmon-500 group-hover:bg-salmon-500">
                          <ArrowRight className="h-4 w-4 text-cream-50 transition-colors group-hover:text-ink-900" />
                        </div>
                      </div>

                      <p className="mt-5 max-w-sm text-sm leading-6 text-cream-50/40">
                        Encontre a extensão que combina com o efeito que você
                        deseja para o seu olhar.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => selectArea('brows')}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-cream-50/10 bg-cream-50/[0.035] p-6 text-left transition-all duration-500 hover:border-salmon-500/50 hover:bg-cream-50/[0.06] sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-3xl italic text-salmon-500">
                          Sobrancelhas
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/10 transition-all duration-500 group-hover:border-salmon-500 group-hover:bg-salmon-500">
                          <ArrowRight className="h-4 w-4 text-cream-50 transition-colors group-hover:text-ink-900" />
                        </div>
                      </div>

                      <p className="mt-5 max-w-sm text-sm leading-6 text-cream-50/40">
                        Descubra o procedimento mais adequado para o efeito
                        que você quer nas suas sobrancelhas.
                      </p>
                    </button>
                  </motion.div>
                )}

                {/* STEP 2 */}
                {area && !choice && (
                  <motion.div
                    key="choice"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: easeLux }}
                    className="mt-10"
                  >
                    <p className="mb-6 text-[0.6rem] uppercase tracking-[0.25em] text-cream-50/35">
                      {area === 'lashes'
                        ? 'Como você quer seu olhar?'
                        : 'Qual resultado você procura?'}
                    </p>

                    <div className="grid gap-3">
                      {currentChoices.map((item, index) => (
                        <motion.button
                          key={item.id}
                          type="button"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.06,
                            ease: easeLux,
                          }}
                          onClick={() => setChoice(item.id)}
                          className="group flex w-full items-center justify-between gap-5 rounded-[1.25rem] border border-cream-50/10 bg-cream-50/[0.025] p-5 text-left transition-all duration-500 hover:border-salmon-500/50 hover:bg-salmon-500/[0.06] sm:p-6"
                        >
                          <div>
                            <h4 className="font-serif text-xl text-cream-50 sm:text-2xl">
                              {item.title}
                            </h4>

                            <p className="mt-2 max-w-2xl text-xs leading-6 text-cream-50/35 sm:text-sm">
                              {item.description}
                            </p>
                          </div>

                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-50/10 transition-all duration-500 group-hover:border-salmon-500 group-hover:bg-salmon-500">
                            <ArrowRight className="h-4 w-4 text-cream-50/50 transition-colors group-hover:text-ink-900" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* RESULT */}
                {area && choice && selectedService && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 25, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: easeLux }}
                    className="mt-10"
                  >
                    <div className="overflow-hidden rounded-[1.5rem] border border-cream-50/10 bg-cream-50/[0.035]">
                      <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
                        {/* IMAGE */}
                        <div className="relative min-h-[280px] overflow-hidden bg-ink-800 lg:min-h-[420px]">
                          <img
                            src={selectedService.image}
                            alt={selectedService.title}
                            className="absolute inset-0 h-full w-full object-cover"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

                          <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink-900/60 px-4 py-2 backdrop-blur-md">
                            <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-cream-50">
                              Sua sugestão
                            </span>
                          </div>
                        </div>

                        {/* RESULT CONTENT */}
                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                            {selectedService.category}
                          </span>

                          <h4 className="mt-3 font-serif text-3xl text-cream-50 sm:text-4xl lg:text-5xl">
                            {selectedService.title}
                          </h4>

                          <p className="mt-5 text-sm leading-7 text-cream-50/45">
                            {selectedService.description}
                          </p>

                          <div className="mt-7 flex items-center justify-between border-t border-cream-50/10 pt-6">
                            <span className="text-[0.55rem] uppercase tracking-[0.25em] text-cream-50/30">
                              Investimento
                            </span>

                            <span className="font-serif text-2xl text-salmon-500">
                              {selectedService.price}
                            </span>
                          </div>

                          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <motion.a
                              href={`${whatsappUrl}?text=${encodeURIComponent(
                                `Olá, Mel! Fiz o teste no seu site e gostaria de agendar o ${selectedService.title}.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileTap={{ scale: 0.97 }}
                              className="inline-flex items-center justify-center gap-3 rounded-full bg-salmon-500 px-6 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-ink-900"
                            >
                              <WhatsAppIcon className="h-4 w-4" />
                              Agendar este procedimento
                            </motion.a>

                            <button
                              type="button"
                              onClick={() => setChoice(null)}
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/10 px-6 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream-50/50 transition-colors duration-300 hover:border-salmon-500/50 hover:text-salmon-500"
                            >
                              Refazer escolha
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PROGRESS */}
              <div className="mt-8 flex items-center gap-2">
                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    area ? 'bg-salmon-500' : 'bg-cream-50/10'
                  }`}
                />

                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    choice ? 'bg-salmon-500' : 'bg-cream-50/10'
                  }`}
                />

                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    selectedService ? 'bg-salmon-500' : 'bg-cream-50/10'
                  }`}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {[
            siteConfig.schedule.weekdays,
            siteConfig.schedule.saturday,
            siteConfig.contact.city,
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-[0.5rem] uppercase tracking-[0.2em] text-ink-700/35"
            >
              <Check className="h-3.5 w-3.5 text-salmon-500" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
