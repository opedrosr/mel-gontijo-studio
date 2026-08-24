import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  Phone,
} from 'lucide-react';
import { easeLux } from '@/lib/animations';
import { siteConfig } from '@/config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-ink-950 px-5 pb-8 pt-20 sm:px-8 lg:px-12 lg:pt-28"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[550px] w-[550px] rounded-full bg-salmon-500/[0.045] blur-[140px]" />

        <div className="absolute -bottom-48 left-[-10%] h-[450px] w-[450px] rounded-full bg-salmon-500/[0.025] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px]">

        {/* Main footer */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:gap-20">

          {/* Brand */}
          <div>
            <motion.a
              href="#inicio"
              whileHover={{ x: 3 }}
              transition={{
                duration: 0.3,
                ease: easeLux,
              }}
              className="inline-flex items-center gap-4"
            >
              <span className="font-serif text-5xl italic text-salmon-500">
                {siteConfig.professional.logoInitial}
              </span>

              <span>
                <span className="block text-sm font-semibold uppercase tracking-[0.25em] text-cream-50">
                  {siteConfig.professional.name}
                </span>

                <span className="mt-1 block text-[0.5rem] uppercase tracking-[0.3em] text-cream-50/35">
                  {siteConfig.professional.profession}
                </span>
              </span>
            </motion.a>

            <p className="mt-8 max-w-md font-serif text-2xl leading-relaxed text-cream-50/75 sm:text-3xl">
              Beleza, técnica e cuidado em uma experiência criada para você.
            </p>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                x: 2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: easeLux,
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-salmon-500 px-6 py-3.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-ink-900"
            >
              <WhatsAppIcon className="h-4 w-4" />

              Agendar horário

              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
              Navegação
            </p>

            <nav className="flex flex-col items-start gap-4">
              {[
                ['Início', '#inicio'],
                ['Sobre Mim', '#sobre'],
                ['Serviços', '#servicos'],
                ['Portfólio', '#portfolio'],
                ['Depoimentos', '#depoimentos'],
                ['Perguntas', '#perguntas'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="group inline-flex items-center gap-2 text-xs text-cream-50/45 transition-colors duration-300 hover:text-salmon-500"
                >
                  <span className="h-px w-0 bg-salmon-500 transition-all duration-300 group-hover:w-4" />

                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-salmon-500">
              Contato
            </p>

            <div className="space-y-5">

              {/* Instagram */}
              <a
                href={siteConfig.professional.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-salmon-500" />

                <span>
                  <span className="block text-[0.5rem] uppercase tracking-[0.2em] text-cream-50/25">
                    Instagram
                  </span>

                  <span className="mt-1 block text-xs text-cream-50/60 transition-colors group-hover:text-salmon-500">
                    {siteConfig.professional.instagram}
                  </span>
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="group flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-salmon-500" />

                <span>
                  <span className="block text-[0.5rem] uppercase tracking-[0.2em] text-cream-50/25">
                    Telefone
                  </span>

                  <span className="mt-1 block text-xs text-cream-50/60 transition-colors group-hover:text-salmon-500">
                    {siteConfig.contact.phone}
                  </span>
                </span>
              </a>

              {/* Location */}
              <a
                href={siteConfig.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-salmon-500" />

                <span>
                  <span className="block text-[0.5rem] uppercase tracking-[0.2em] text-cream-50/25">
                    Studio
                  </span>

                  <span className="mt-1 block text-xs leading-5 text-cream-50/60 transition-colors group-hover:text-salmon-500">
                    {siteConfig.contact.city}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Large word */}
        <div className="pointer-events-none mt-20 overflow-hidden border-t border-cream-50/[0.07] pt-8 lg:mt-28">
          <p className="translate-y-[12%] whitespace-nowrap font-serif text-[18vw] leading-none tracking-[-0.06em] text-cream-50/[0.025]">
            {siteConfig.professional.name}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-cream-50/[0.07] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.5rem] uppercase tracking-[0.2em] text-cream-50/25">
            © {new Date().getFullYear()} {siteConfig.professional.name}.{' '}
            {siteConfig.footer.copyright}
          </p>

          <p className="text-[0.5rem] uppercase tracking-[0.2em] text-cream-50/20">
            {siteConfig.footer.developer}
          </p>
        </div>
      </div>
    </footer>
  );
}