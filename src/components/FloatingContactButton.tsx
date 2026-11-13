/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, useLocation } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function FloatingContactButton() {
  const location = useLocation();

  // If already on the About page (where the contact form lives), hide the floating button to keep the form unblocked
  if (location.pathname === '/about') {
    return null;
  }

  return (
    <aside
      aria-label="Direct Contact"
      className="fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40 print:hidden"
    >
      <Link
        to="/about#contact"
        aria-label="Contact Aurelia Atelier"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#262626] hover:bg-[#B59B72] active:bg-[#9A8057] text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B59B72]/40 cursor-pointer"
      >
        <Mail className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-200" />
      </Link>
    </aside>
  );
}
