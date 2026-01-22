import { Icons } from "@/app/components/Icons";

export function ClarityBlock() {
  return (
    <section className="py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1 - What We Do */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:border-[var(--primary)] transition-all">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
            <Icons.car className="w-7 h-7 text-[var(--primary)]" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            What We Do
          </h3>
          <p className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed">
            Premium chauffeur service for airport, corporate, wine tours & events
          </p>
        </div>

        {/* Card 2 - Why We're Better */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:border-[var(--primary)] transition-all">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
            <Icons.star className="w-7 h-7 text-[var(--primary)]" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            Why We're Better
          </h3>
          <p className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed">
            Fixed pricing, immaculate vehicles, professional chauffeurs, on‑time guarantee
          </p>
        </div>

        {/* Card 3 - How to Book */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 text-center hover:border-[var(--primary)] transition-all">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
            <Icons.checkCircle className="w-7 h-7 text-[var(--primary)]" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-3">
            How to Book
          </h3>
          <div className="text-sm sm:text-base text-[var(--textMuted)] leading-relaxed space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary)] text-white text-xs flex items-center justify-center font-semibold">1</span>
              <span>Choose Service</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icons.arrow className="w-4 h-4 text-[var(--textMuted)]" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary)] text-white text-xs flex items-center justify-center font-semibold">2</span>
              <span>Select Vehicle</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icons.arrow className="w-4 h-4 text-[var(--textMuted)]" />
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary)] text-white text-xs flex items-center justify-center font-semibold">3</span>
              <span>Confirm Instantly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
