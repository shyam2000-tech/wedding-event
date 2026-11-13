import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';
import { servicesData } from '../data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <PageHeader
        tagline="Comprehensive Wedding Atelier"
        title="Our Services"
        subtitle="From grand architectural mandaps and romantic imperial banquet styling to intimate coordination, explore our tailored wedding event services."
      />

      {/* Services Grid Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#B59B72] font-semibold">
              Bespoke Execution
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#262626] font-normal">
              Tailored for Every Element of Your Day
            </h2>
            <p className="text-sm text-[#737373]">
              All services can be booked individually or harmonized into a complete master celebration package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
