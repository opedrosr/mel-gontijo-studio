import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Course from '@/components/Course';
import BeautyMatch from '@/components/BeautyMatch';
import Portfolio from '@/components/Portfolio';
import BeforeAfter from '@/components/BeforeAfter';
import WhyChooseMe from '@/components/WhyChooseMe';
import Location from '@/components/Location';
import Experience from '@/components/Experience';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900">
      <ScrollProgress />

      <Header />

      <main>
        <Hero />

        <About />

        <Portfolio />

        <Services />

        <Course />

        <BeautyMatch />

        <BeforeAfter />

        <WhyChooseMe />

        <Location />

        <Experience />

        <FAQ />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}