import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, Info } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function BottomNavbar() {
  const location = useLocation();

  const getIcon = (path: string) => {
    switch (path) {
      case '/':
        return Home;
      case '/services':
        return Sparkles;
      case '/about':
        return Info;
      default:
        return Home;
    }
  };

  return (
    <aside
      aria-label="Bottom Navigation Dock"
      className="fixed bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-1.5rem)] print:hidden"
    >
      <nav
        aria-label="Quick Navigation"
        className="flex items-center gap-1 sm:gap-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#262626]/15 rounded-full shadow-lg shadow-black/8"
      >
        {siteConfig.navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          const Icon = getIcon(link.path);

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-200 select-none ${
                isActive
                  ? 'bg-[#262626] text-white shadow-sm'
                  : 'text-[#737373] hover:text-[#262626] hover:bg-[#F1ECE5]'
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
