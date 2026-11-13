import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';
import { servicesData } from '../data/services';
import { weddingImages } from '../assets/images';
import { Calendar, Sparkles, Gem, Heart } from 'lucide-react';

export default function HomePage() {
  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 3);

  const pillars = [
    {
      title: 'Professional Event Planning',
      description:
        'Structured production schedules, discreet vendor management, and rigorous budget supervision ensure an unflustered experience.',
      icon: Calendar,
    },
    {
      title: 'Creative Wedding Concepts',
      description:
        'Every couple has a distinct narrative. We translate your aesthetic preferences into bespoke spatial and floral installations.',
      icon: Sparkles,
    },
    {
      title: 'Attention to Detail',
      description:
        'From hand-calligraphed escort cards to precise candle spacing and acoustic balance, perfection resides in the subtleties.',
      icon: Gem,
    },
    {
      title: 'Memorable Experiences',
      description:
        'We craft celebrations that resonate deeply with both couples and guests, leaving an indelible impression long after the final dance.',
      icon: Heart,
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Introduction Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#F1ECE5] shadow-sm">
                <img
                  src={weddingImages.couplePortrait}
                  alt="Bride and groom sharing a serene intimate moment by a historic estate window"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
                About the Atelier
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal leading-tight">
                Devoted to Timeless Celebrations and Refined Craftsmanship
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#737373] leading-relaxed">
                <p>
                  At Aurelia, we believe weddings should feel authentic, elevated, and deeply personal. We operate with an editorial eye and an architect’s discipline, crafting bespoke weddings that honor your love story.
                </p>
                <p>
                  Rather than relying on templated ideas, our team collaborates closely with each couple to bring cohesive styling, effortless logistics, and heartfelt hospitality to every moment of the day.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#262626] border border-[#262626]/30 hover:border-[#B59B72] hover:text-[#B59B72] rounded-sm transition-colors"
                >
                  Know More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="space-y-3 max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
                Our Curated Offerings
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal">
                Featured Services
              </h2>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex items-center text-xs uppercase font-semibold tracking-wider text-[#262626] hover:text-[#B59B72] transition-colors"
              >
                <span>View All Services</span>
                <span className="ml-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              to="/services"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#262626] border border-[#262626]/30 rounded-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-20 sm:py-28 bg-[#F1ECE5]/60 border-b border-[#262626]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
              The Atelier Standard
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal">
              Why Couples Choose Aurelia
            </h2>
            <p className="text-base text-[#737373] leading-relaxed">
              We balance creative vision with impeccable operational precision, allowing you to immerse completely in every joyous moment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white p-8 border border-[#262626]/8 rounded-none space-y-4 hover:border-[#B59B72]/40 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center text-[#B59B72] bg-[#FAF8F5] border border-[#B59B72]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-serif text-[#262626] font-normal">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA Section */}
      <ContactSection />
    </div>
  );
}
