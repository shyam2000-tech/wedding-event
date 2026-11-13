import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-[#F1ECE5] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-b border-[#262626]/10 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
          Begin Your Journey
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#262626] font-normal leading-tight">
          Let's Make Your Special Day Unforgettable
        </h2>
        <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-xl mx-auto">
          Every beautiful celebration begins with a conversation. Fill out our bespoke enquiry form or reach out directly to our event concierge.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/about#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] hover:bg-[#B59B72] active:bg-[#9A8057] rounded-sm transition-all shadow-sm hover:shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send Event Enquiry</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
