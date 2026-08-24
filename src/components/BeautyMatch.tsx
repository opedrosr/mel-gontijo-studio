import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

type Question = {
  question: string;
  options: {
    label: string;
    value: string;
  }[];
};

const questions: Question[] = [
  {
    question: 'Qual resultado você procura?',
    options: [
      {
        label: 'Natural e delicado',
        value: 'natural',
      },
      {
        label: 'Marcante e sofisticado',
        value: 'marcante',
      },
      {
        label: 'Alongado e sensual',
        value: 'alongado',
      },
    ],
  },
  {
    question: 'O que você mais deseja valorizar?',
    options: [
      {
        label: 'Meu olhar',
        value: 'olhar',
      },
      {
        label: 'Minhas sobrancelhas',
        value: 'sobrancelhas',
      },
      {
        label: 'Minha expressão como um todo',
        value: 'expressao',
      },
    ],
  },
  {
    question: 'Como você prefere seu resultado?',
    options: [
      {
        label: 'Leve e natural',
        value: 'leve',
      },
      {
        label: 'Intenso e marcante',
        value: 'intenso',
      },
      {
        label: 'Elegante e equilibrado',
        value: 'elegante',
      },
    ],
  },
];

const recommendations: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  natural: {
    title: 'Volume Sirena',
    description:
      'Uma ótima escolha para quem busca um efeito mais natural. A técnica alonga o olhar do meio para o final dos olhos, trazendo um efeito delicado e elegante.',
  },

  marcante: {
    title: 'Volume Brasileiro',
    description:
      'Ideal para quem deseja cílios cheios, leves e alinhados, criando um equilíbrio perfeito entre volume e naturalidade.',
  },

  alongado: {
    title: 'Volume Fox Eyes',
    description:
      'Perfeito para quem deseja um olhar alongado, sensual e marcante, inspirado no característico olhar das raposas.',
  },

  olhar: {
    title: 'Volume Brasileiro',
    description:
      'Uma escolha versátil para valorizar o olhar com definição, volume e um acabamento sofisticado.',
  },

  sobrancelhas: {
    title: 'Brow Lamination',
    description:
      'Uma técnica que valoriza e organiza os fios das sobrancelhas, proporcionando um visual mais alinhado, moderno e expressivo.',
  },

  expressao: {
    title: 'Volume Sirena',
    description:
      'Uma excelente escolha para valorizar a expressão com leveza, delicadeza e um efeito alongado que harmoniza naturalmente com o olhar.',
  },

  leve: {
    title: 'Volume Sirena',
    description:
      'Ideal para quem prefere um resultado mais natural e delicado, com um efeito alongado e elegante no olhar.',
  },

  intenso: {
    title: 'Volume Luxo',
    description:
      'O substituto moderno do Volume Russo. Proporciona um volume intenso com acabamento leve e natural para um olhar marcante.',
  },

  elegante: {
    title: 'Volume Brasileiro',
    description:
      'Uma escolha elegante e versátil, que combina volume, leveza e definição para criar um olhar sofisticado e harmonioso.',
  },
};

export default function BeautyMatch() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const currentQuestion = questions[step];

  const selectAnswer = (value: string) => {
    const nextAnswers = [...answers];
    nextAnswers[step] = value;

    setAnswers(nextAnswers);

    if (step < questions.length - 1) {
      setStep((current) => current + 1);
      return;
    }

    const firstAnswer = nextAnswers[0] || value;
    setResult(firstAnswer);
  };

  const goBack = () => {
    if (result) {
      setResult(null);
      setStep(questions.length - 1);
      return;
    }

    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
    setResult(null);
  };

  const recommendation =
    result && recommendations[result]
      ? recommendations[result]
      : recommendations.natural;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <section
      id="beauty-match"
      className="relative overflow-hidden bg-ink-900 px-5 py-28 text-cream-50 sm:px-8 lg:px-12 lg:py-40"
    >
      {/* =================================================
          ATMOSPHERE
      ================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-salmon-500/[0.045] blur-[150px]" />

        <div className="absolute inset-y-0 left-1/2 hidden w-px bg-cream-50/[0.035] lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* =================================================
            HEADER
        ================================================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={staggerItem}
            className="mb-7 flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-salmon-500/40" />

            <span className="text-[0.58rem] font-medium uppercase tracking-[0.35em] text-salmon-500">
              Descubra seu estilo
            </span>

            <span className="h-px w-10 bg-salmon-500/40" />
          </motion.div>

          <motion.h2
            variants={staggerItem}
            className="font-serif text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl"
          >
            Encontre o efeito ideal
            <br />
            <span className="italic text-salmon-500">
              para o seu olhar.
            </span>
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-7 max-w-xl text-sm leading-7 text-cream-50/45"
          >
            Responda algumas perguntas e descubra qual técnica da Mel
            Gontijo Studio combina melhor com o resultado que você deseja.
          </motion.p>
        </motion.div>

        {/* =================================================
            MATCH CARD
        ================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: easeLux,
          }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-cream-50/[0.08] bg-cream-50/[0.025] p-6 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-10 lg:p-12">
            {/* =================================================
                PROGRESS
            ================================================== */}
            <div className="mb-10">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[0.5rem] uppercase tracking-[0.25em] text-cream-50/30">
                  Mel Gontijo Studio
                </span>

                <span className="text-[0.5rem] uppercase tracking-[0.25em] text-salmon-500">
                  {result
                    ? 'Resultado'
                    : `${String(step + 1).padStart(2, '0')} / ${String(
                        questions.length
                      ).padStart(2, '0')}`}
                </span>
              </div>

              <div className="h-px overflow-hidden bg-cream-50/10">
                <motion.div
                  animate={{
                    width: result
                      ? '100%'
                      : `${((step + 1) / questions.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: easeLux,
                  }}
                  className="h-full bg-salmon-500"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key={`question-${step}`}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: easeLux,
                  }}
                >
                  <div className="mb-8">
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-salmon-500/20 bg-salmon-500/[0.06]">
                      <Sparkles
                        className="h-4 w-4 text-salmon-500"
                        strokeWidth={1.2}
                      />
                    </span>

                    <h3 className="font-serif text-2xl leading-tight sm:text-3xl">
                      {currentQuestion.question}
                    </h3>
                  </div>

                  <div className="grid gap-3">
                    {currentQuestion.options.map((option, index) => (
                      <motion.button
                        key={`${step}-${option.value}`}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.45,
                          ease: easeLux,
                        }}
                        whileHover={{
                          x: 4,
                        }}
                        whileTap={{
                          scale: 0.99,
                        }}
                        onClick={() => selectAnswer(option.value)}
                        className={`group flex w-full items-center justify-between rounded-2xl border px-5 py-5 text-left transition-all duration-300 ${
                          answers[step] === option.value
                            ? 'border-salmon-500/50 bg-salmon-500/10'
                            : 'border-cream-50/[0.08] bg-cream-50/[0.02] hover:border-salmon-500/30 hover:bg-salmon-500/[0.04]'
                        }`}
                      >
                        <span className="text-sm text-cream-50/75 transition-colors group-hover:text-cream-50">
                          {option.label}
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cream-50/10 transition-all group-hover:border-salmon-500/40 group-hover:text-salmon-500">
                          <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  {step > 0 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="mt-7 inline-flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.2em] text-cream-50/30 transition-colors hover:text-salmon-500"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Voltar
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: easeLux,
                  }}
                  className="text-center"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-salmon-500/10 ring-1 ring-salmon-500/25">
                    <Check
                      className="h-6 w-6 text-salmon-500"
                      strokeWidth={1.5}
                    />
                  </span>

                  <p className="mt-7 text-[0.55rem] uppercase tracking-[0.3em] text-salmon-500">
                    Seu Beauty Match
                  </p>

                  <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                    {recommendation.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-cream-50/45">
                    {recommendation.description}
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-full bg-salmon-500 px-7 py-4 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-ink-900 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      Quero esse atendimento
                      <ArrowRight className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex items-center justify-center rounded-full border border-cream-50/10 px-7 py-4 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-cream-50/50 transition-colors hover:border-salmon-500/30 hover:text-salmon-500"
                    >
                      Refazer teste
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="mt-7 inline-flex items-center gap-2 text-[0.55rem] uppercase tracking-[0.2em] text-cream-50/25 transition-colors hover:text-salmon-500"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Voltar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}