import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-white rounded-none border border-[#262626]/10 flex flex-col h-full hover:border-[#B59B72]/60 transition-all duration-300">
      {/* Visual Asset Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F1ECE5]">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-[#F1ECE5] animate-pulse" aria-hidden="true" />
        )}

        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#F1ECE5] text-[#737373]">
            <span className="font-serif text-lg text-[#262626]">{service.title}</span>
            <span className="text-xs uppercase tracking-widest mt-1 text-[#B59B72]">
              {service.category}
            </span>
          </div>
        ) : (
          <img
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          {/* Metadata without pills (Zero-Pill discipline) */}
          <div className="text-xs uppercase tracking-widest text-[#B59B72] font-medium">
            {service.category}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-[#262626] font-normal group-hover:text-[#B59B72] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm leading-relaxed text-[#737373]">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-6 mt-6 border-t border-[#262626]/8">
          <Link
            to="/about#contact"
            state={{
              eventType: service.title.includes('Reception')
                ? 'Reception'
                : service.title.includes('Engagement')
                ? 'Engagement'
                : 'Wedding',
              eventName: service.title,
              additionalNotes: `Interested in bespoke ${service.title} (${service.category}).`,
            }}
            className="inline-flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-[#262626] group-hover:text-[#B59B72] transition-colors py-1"
          >
            <span>Enquire for Event</span>
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
