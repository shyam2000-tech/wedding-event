interface PageHeaderProps {
  title: string;
  subtitle: string;
  tagline?: string;
}

export default function PageHeader({ title, subtitle, tagline }: PageHeaderProps) {
  return (
    <section className="bg-[#F1ECE5] border-b border-[#262626]/10 py-16 sm:py-24 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-4">
        {tagline && (
          <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
            {tagline}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#262626] font-normal leading-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
