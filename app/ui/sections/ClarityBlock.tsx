export function ClarityBlock() {
  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* What We Do */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            What We Do
          </h3>
          <p className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed">
            We provide premium chauffeur service for airport transfers, corporate travel, wine tours, weddings, and special events across Oregon.
          </p>
        </div>

        {/* Why We're Better */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            Why We're Better
          </h3>
          <p className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed">
            We deliver a higher standard of service with professional chauffeurs, fixed transparent pricing, immaculate vehicles, and guaranteed punctuality.
          </p>
        </div>

        {/* How to Book */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            How to Book
          </h3>
          <p className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed">
            Choose your service → Select your vehicle → Confirm instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
