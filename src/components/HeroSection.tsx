import { Link } from 'react-router-dom';
import { weddingImages } from '../assets/images';

export default function HeroSection() {

  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden border-b border-[#262626]/10">
      {/* 1. Mobile Screen Layout (< md): Contained image, text outside the image */}
      <div className="block md:hidden px-4 sm:px-6 py-8 sm:py-12 space-y-6">
        {/* Contained Image (Not full fill) */}
        <div className="relative aspect-[4/3] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-md bg-[#F1ECE5]">
          <img
            src={weddingImages.heroBanner}
            alt="Bride and groom walking beneath an exquisite floral archway during an outdoor sunset ceremony"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content (Outside the image) */}
        <div className="space-y-4 text-center max-w-md mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
            Weddings & Events
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#262626] font-normal leading-[1.18] text-balance">
            Creating Beautiful Moments, Lasting Memories
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            We design and coordinate extraordinary weddings marked by timeless grace, exquisite floral architecture, and effortless celebration.
          </p>

          <div className="pt-2 flex flex-col gap-3">
            <Link
              to="/services"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] hover:bg-[#B59B72] active:bg-[#9A8057] rounded-sm transition-all shadow-sm"
            >
              Explore Our Services
            </Link>
            <Link
              to="/about#contact"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#262626] border border-[#262626]/30 hover:border-[#B59B72] hover:text-[#B59B72] rounded-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Desktop & Tablet Layout (>= md): Full-fill image with text overlaid inside */}
      <div className="hidden md:flex relative w-full min-h-[82vh] lg:min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Full-Fill Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={weddingImages.heroBanner}
            alt="Bride and groom walking beneath an exquisite floral archway during an outdoor sunset ceremony"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* Measured Contrast Scrim for Optimal Legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35"
            aria-hidden="true"
          />
        </div>

        {/* Main Text Content Overlaid on Image */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28 text-center text-white flex flex-col items-center">
          <div className="space-y-4 lg:space-y-6">
            <p className="text-xs lg:text-sm uppercase tracking-[0.35em] text-[#DFCBB1] font-semibold drop-shadow-sm">
              Weddings & Events
            </p>
            <h1 className="text-5xl lg:text-7xl font-serif font-normal leading-[1.12] text-balance text-white drop-shadow-md">
              Creating Beautiful Moments, Lasting Memories
            </h1>
            <p className="text-base lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-sm">
              We design and coordinate extraordinary weddings marked by timeless grace, exquisite floral architecture, and effortless celebration.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 lg:pt-10 flex flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#262626] bg-white hover:bg-[#B59B72] hover:text-white active:bg-[#9A8057] rounded-sm transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
            <Link
              to="/about#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-white/70 hover:bg-white/15 hover:border-white rounded-sm transition-all duration-200 backdrop-blur-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
