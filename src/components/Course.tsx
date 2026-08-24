import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  Coffee,
  GraduationCap,
  Heart,
  MessageCircle,
  Package,
  Quote,
  Sparkles,
  Users,
} from 'lucide-react';
import {
  easeLux,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';

const courseOptions = [
  {
    id: 'basic',
    eyebrow: 'OPÇÃO 01',
    name: 'Curso Basic',
    description:
      'Uma opção completa para quem quer iniciar na área Lash e já possui ou prefere adquirir os próprios materiais.',
    price: 'R$ 900,00',
    featured: false,
    includes: [
      {
        icon: Coffee,
        label: 'Coffee break',
      },
      {
        icon: BookOpen,
        label: 'Apostila completa',
      },
      {
        icon: MessageCircle,
        label: 'Suporte pós-curso',
      },
      {
        icon: Camera,
        label: 'Dicas de fotos e edição',
      },
    ],
  },
  {
    id: 'premium',
    eyebrow: 'OPÇÃO 02',
    name: 'Curso Premium',
    description:
      'Uma experiência completa para você começar na área Lash com mais praticidade, já recebendo um kit de materiais para iniciar seus atendimentos.',
    price: 'R$ 1.200,00',
    featured: true,
    includes: [
      {
        icon: Coffee,
        label: 'Coffee break',
      },
      {
        icon: BookOpen,
        label: 'Apostila completa',
      },
      {
        icon: Package,
        label: 'Kit de materiais',
      },
      {
        icon: MessageCircle,
        label: 'Suporte pós-curso',
      },
      {
        icon: Camera,
        label: 'Dicas de fotos e edição',
      },
    ],
  },
];

export default function Course() {
  const getWhatsAppUrl = (option: string) =>
    `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
      `Olá, Mel! Gostaria de saber mais sobre o ${option} — Curso Iniciante Lash By Mel Gontijo.`
    )}`;

  return (
    <section
      id="curso"
      className="relative overflow-hidden bg-cream-100 px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[10%] h-[550px] w-[550px] rounded-full bg-salmon-500/[0.045] blur-[150px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-salmon-500/[0.035] blur-[160px]" />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
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
                FORMAÇÃO PROFISSIONAL
              </span>
            </motion.div>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-ink-700 sm:text-5xl lg:text-6xl"
            >
              Comece sua jornada
              <br />

              <span className="italic text-salmon-500">
                no universo Lash.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={staggerItem}
            className="max-w-xl text-sm leading-8 text-ink-700/50 lg:pb-2"
          >
            Quer começar na área de extensão de cílios do zero e sair pronta
            para iniciar seus atendimentos? Escolha a experiência que mais
            combina com o seu momento e dê o primeiro passo rumo à sua carreira
            Lash.
          </motion.p>
        </motion.div>

        {/* COURSE INTRO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: easeLux,
          }}
          className="relative mt-16 overflow-hidden rounded-[2rem] bg-ink-900 p-7 sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-salmon-500/[0.08] blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-salmon-500/30 bg-salmon-500/[0.08]">
                <GraduationCap
                  className="h-6 w-6 text-salmon-500"
                  strokeWidth={1.2}
                />
              </div>

              <p className="mt-10 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                CURSO INICIANTE
              </p>

              <h3 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-cream-50 sm:text-5xl lg:text-6xl">
                Lash By
                <br />

                <span className="italic text-salmon-500">
                  Mel Gontijo.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-cream-50/50 sm:text-base">
                Uma formação pensada para quem deseja começar do zero na área
                de extensão de cílios, desenvolvendo conhecimento, técnica e
                segurança para dar os primeiros passos na profissão.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="border border-cream-50/10 bg-cream-50/[0.035] p-6 sm:p-7">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-salmon-500">
                  Carga horária
                </span>

                <p className="mt-3 font-serif text-2xl italic text-cream-50 sm:text-3xl">
                  2 dias de formação
                </p>
              </div>

              <div className="border border-cream-50/10 bg-cream-50/[0.035] p-6 sm:p-7">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-salmon-500">
                  Primeiro dia
                </span>

                <p className="mt-3 text-sm leading-7 text-cream-50/55">
                  Parte teórica + treino prático.
                </p>
              </div>

              <div className="border border-cream-50/10 bg-cream-50/[0.035] p-6 sm:p-7">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.25em] text-salmon-500">
                  Segundo dia
                </span>

                <p className="mt-3 text-sm leading-7 text-cream-50/55">
                  Atendimento em modelo com acompanhamento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OPTIONS HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: easeLux,
          }}
          className="mt-20 text-center lg:mt-28"
        >
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-600">
            ESCOLHA SUA EXPERIÊNCIA
          </span>

          <h3 className="mt-5 font-serif text-3xl text-ink-700 sm:text-4xl lg:text-5xl">
            Duas formas de dar o
            <br />

            <span className="italic text-salmon-500">
              primeiro passo.
            </span>
          </h3>
        </motion.div>

        {/* COURSE OPTIONS */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {courseOptions.map((course, index) => {
            const Icon = course.featured ? Sparkles : Heart;

            return (
              <motion.article
                key={course.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: easeLux,
                }}
                className={`relative flex flex-col overflow-hidden border p-7 sm:p-10 lg:p-12 ${
                  course.featured
                    ? 'border-salmon-500/40 bg-ink-900'
                    : 'border-ink-900/10 bg-cream-50'
                }`}
              >
                {course.featured && (
                  <div className="absolute right-0 top-0 bg-salmon-500 px-5 py-2">
                    <span className="text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-ink-900">
                      Experiência completa
                    </span>
                  </div>
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                    course.featured
                      ? 'border-salmon-500/30 bg-salmon-500/[0.08]'
                      : 'border-ink-900/10 bg-cream-100'
                  }`}
                >
                  <Icon
                    className="h-5 w-5 text-salmon-500"
                    strokeWidth={1.2}
                  />
                </div>

                <span
                  className={`mt-9 text-[0.5rem] font-semibold uppercase tracking-[0.3em] ${
                    course.featured
                      ? 'text-salmon-500'
                      : 'text-salmon-600'
                  }`}
                >
                  {course.eyebrow}
                </span>

                <h4
                  className={`mt-4 font-serif text-4xl sm:text-5xl ${
                    course.featured ? 'text-cream-50' : 'text-ink-700'
                  }`}
                >
                  {course.name}
                </h4>

                <p
                  className={`mt-6 min-h-[96px] text-sm leading-8 ${
                    course.featured
                      ? 'text-cream-50/50'
                      : 'text-ink-700/50'
                  }`}
                >
                  {course.description}
                </p>

                <div
                  className={`mt-10 border-t pt-8 ${
                    course.featured
                      ? 'border-cream-50/10'
                      : 'border-ink-900/10'
                  }`}
                >
                  <p
                    className={`text-[0.5rem] font-semibold uppercase tracking-[0.25em] ${
                      course.featured
                        ? 'text-cream-50/30'
                        : 'text-ink-700/35'
                    }`}
                  >
                    Incluso na experiência
                  </p>

                  <ul className="mt-6 space-y-4">
                    {course.includes.map((item) => {
                      const IncludeIcon = item.icon;

                      return (
                        <li
                          key={item.label}
                          className={`flex items-center gap-4 text-sm ${
                            course.featured
                              ? 'text-cream-50/65'
                              : 'text-ink-700/65'
                          }`}
                        >
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                              course.featured
                                ? 'bg-cream-50/[0.05]'
                                : 'bg-salmon-500/[0.08]'
                            }`}
                          >
                            <IncludeIcon
                              className="h-3.5 w-3.5 text-salmon-500"
                              strokeWidth={1.4}
                            />
                          </span>

                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div
                  className={`mt-10 border-t pt-8 ${
                    course.featured
                      ? 'border-cream-50/10'
                      : 'border-ink-900/10'
                  }`}
                >
                  <p
                    className={`text-[0.5rem] uppercase tracking-[0.25em] ${
                      course.featured
                        ? 'text-cream-50/30'
                        : 'text-ink-700/35'
                    }`}
                  >
                    Investimento
                  </p>

                  <p className="mt-3 font-serif text-4xl italic text-salmon-500 sm:text-5xl">
                    {course.price}
                  </p>
                </div>

                <motion.a
                  href={getWhatsAppUrl(course.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group mt-10 inline-flex items-center justify-center gap-3 px-6 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    course.featured
                      ? 'bg-salmon-500 text-ink-900 hover:bg-salmon-400'
                      : 'bg-ink-900 text-cream-50 hover:bg-ink-800'
                  }`}
                >
                  Quero esta opção

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </motion.article>
            );
          })}
        </div>

        {/* RESULTADO DA ALUNA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            ease: easeLux,
          }}
          className="mt-24 lg:mt-32"
        >
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-salmon-500" />

                <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-600">
                  RESULTADO REAL
                </span>
              </div>

              <h3 className="mt-6 font-serif text-4xl leading-[1.05] text-ink-700 sm:text-5xl lg:text-6xl">
                Do primeiro contato
                <br />

                <span className="italic text-salmon-500">
                  ao primeiro resultado.
                </span>
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-8 text-ink-700/50 lg:pb-2 sm:text-base">
              Uma das experiências mais especiais da formação é acompanhar o
              desenvolvimento de cada aluna. Estas imagens mostram o resultado
              obtido por uma aluna em seu primeiro contato com a extensão de
              cílios.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.4,
                ease: easeLux,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-ink-900"
            >
              <img
                src="/images/resultado1.jpeg"
                alt="Primeiro resultado de uma aluna do curso Lash By Mel Gontijo"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                  RESULTADO 01
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.4,
                delay: 0.05,
                ease: easeLux,
              }}
              className="group relative aspect-[4/5] overflow-hidden bg-ink-900"
            >
              <img
                src="/images/resultado2.jpeg"
                alt="Resultado de uma aluna após a formação Lash By Mel Gontijo"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                  RESULTADO 02
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* DEPOIMENTO */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            ease: easeLux,
          }}
          className="relative mt-20 overflow-hidden bg-ink-900 p-7 sm:mt-24 sm:p-10 lg:mt-32 lg:p-14"
        >
          <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-salmon-500/[0.06] blur-[140px]" />

          <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-salmon-500/25 bg-salmon-500/[0.08]">
                <Quote
                  className="h-5 w-5 text-salmon-500"
                  strokeWidth={1.2}
                />
              </div>

              <span className="mt-8 block text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
                EXPERIÊNCIA REAL
              </span>

              <h3 className="mt-5 font-serif text-4xl leading-[1.05] text-cream-50 sm:text-5xl">
                A experiência de quem
                <br />

                <span className="italic text-salmon-500">
                  viveu o curso.
                </span>
              </h3>

              <p className="mt-7 max-w-lg text-sm leading-8 text-cream-50/50 sm:text-base">
                Nada representa melhor uma formação do que a experiência de
                quem participou dela. Confira o depoimento real de uma aluna
                sobre sua vivência no Curso Lash By Mel Gontijo.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-3 border border-salmon-500/10" />

              <div className="relative overflow-hidden border border-cream-50/10 bg-cream-50/[0.035] p-3 sm:p-5">
                <img
                  src="/images/depoimento.jpeg"
                  alt="Depoimento de uma aluna sobre o Curso Lash By Mel Gontijo"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* KIT PREMIUM */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{
            duration: 0.9,
            ease: easeLux,
          }}
          className="mt-24 lg:mt-32"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.4,
                    ease: easeLux,
                  }}
                  className="group relative aspect-[4/5] overflow-hidden bg-ink-900"
                >
                  <img
                    src="/images/kitfoto1.jpeg"
                    alt="Kit de materiais do Curso Premium Lash By Mel Gontijo"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05,
                    ease: easeLux,
                  }}
                  className="group relative mt-8 aspect-[4/5] overflow-hidden bg-ink-900 sm:mt-12"
                >
                  <img
                    src="/images/kitfoto2.jpeg"
                    alt="Materiais inclusos no Curso Premium Lash By Mel Gontijo"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-salmon-500/30 bg-salmon-500/[0.08]">
                <Package
                  className="h-6 w-6 text-salmon-500"
                  strokeWidth={1.2}
                />
              </div>

              <span className="mt-8 block text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-600">
                EXCLUSIVO DO PREMIUM
              </span>

              <h3 className="mt-5 font-serif text-4xl leading-[1.05] text-ink-700 sm:text-5xl lg:text-6xl">
                Comece sua jornada
                <br />

                <span className="italic text-salmon-500">
                  já preparada.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-8 text-ink-700/50 sm:text-base">
                No Curso Premium, além de toda a formação, você recebe um kit
                de materiais pensado para que possa iniciar seus atendimentos
                com muito mais praticidade.
              </p>

              <div className="mt-9 border-y border-ink-900/10 py-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-salmon-500/[0.1]">
                    <Check
                      className="h-4 w-4 text-salmon-600"
                      strokeWidth={1.5}
                    />
                  </span>

                  <div>
                    <p className="text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-ink-700/35">
                      CURSO PREMIUM
                    </p>

                    <p className="mt-1 text-sm text-ink-700/70">
                      Formação completa + kit de materiais para começar.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl('Curso Premium')}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-3 bg-ink-900 px-6 py-4 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-cream-50 transition-colors duration-300 hover:bg-salmon-500 hover:text-ink-900"
              >
                Quero saber mais sobre o Premium

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* FINAL CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewportOnce}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: easeLux,
          }}
          className="mt-24 border-y border-ink-900/10 py-12 text-center sm:mt-32 sm:py-16"
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <Users
              className="h-6 w-6 text-salmon-500"
              strokeWidth={1.2}
            />

            <h3 className="mt-6 font-serif text-3xl text-ink-700 sm:text-4xl">
              Você escolhe a opção que mais
              <br />

              <span className="italic text-salmon-500">
                combina com o seu momento.
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-8 text-ink-700/50">
              Dê o primeiro passo rumo à sua carreira Lash e comece sua jornada
              com uma formação pensada para quem deseja entrar na área do zero.
            </p>

            <a
              href={getWhatsAppUrl('Curso Iniciante Lash By Mel Gontijo')}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink-700 transition-colors duration-300 hover:text-salmon-600"
            >
              Tirar dúvidas sobre o curso

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 transition-all duration-300 group-hover:border-salmon-500 group-hover:bg-salmon-500">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}