import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#262626]/10 pt-5 pb-5 md:pt-16 md:pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-3.5 md:gap-12 lg:gap-16 pb-3.5 md:pb-14 border-b border-[#262626]/10">
          {/* Brand & Mission Statement */}
          <div className="col-span-2 md:col-span-5 lg:col-span-5 space-y-1 md:space-y-4">
            <Link
              to="/"
              className="text-xl md:text-2xl font-serif tracking-[0.15em] uppercase text-[#262626] font-semibold block hover:text-[#B59B72] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-xs md:text-sm leading-relaxed text-[#737373] max-w-sm line-clamp-2 md:line-clamp-none">
              {siteConfig.shortDescription}
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#B59B72]">
              {siteConfig.location}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 space-y-1.5 md:space-y-4">
            <h3 className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-[#262626]">
              Explore
            </h3>
            <ul className="space-y-1 md:space-y-3 text-xs md:text-sm text-[#737373]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#262626] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Social */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 space-y-1.5 md:space-y-4">
            <h3 className="text-[11px] md:text-xs font-semibold uppercase tracking-widest text-[#262626]">
              Connect
            </h3>
            <div className="space-y-1 md:space-y-3 text-xs md:text-sm text-[#737373]">
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-[#B59B72] transition-colors font-medium text-[#262626] truncate max-w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59B72] shrink-0" aria-hidden="true" />
                  <span className="truncate">{siteConfig.displayPhone}</span>
                </a>
              </p>
              <p>
                <Link
                  to="/about#contact"
                  className="inline-flex items-center gap-1.5 hover:text-[#B59B72] transition-colors font-medium text-[#262626] truncate max-w-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B59B72] shrink-0" aria-hidden="true" />
                  <span className="truncate">Contact Atelier</span>
                </Link>
              </p>
              <p className="truncate">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#262626] transition-colors truncate block"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p className="truncate">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#262626] transition-colors truncate block"
                >
                  Instagram · @aureliaweddings
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-2.5 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-1 md:gap-4 text-[10px] md:text-xs text-[#737373]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-3 md:gap-6">
            <span>Bespoke Weddings & Events</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Atelier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
