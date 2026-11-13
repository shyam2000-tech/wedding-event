import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#262626]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-center">
        {/* Refined Brand Wordmark Centered */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-serif tracking-[0.25em] uppercase text-[#262626] font-semibold hover:text-[#B59B72] transition-colors text-center"
        >
          {siteConfig.name}
        </Link>
      </div>
    </header>
  );
}
