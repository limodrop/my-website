import { Icons } from "@/app/components/Icons";

export function SocialProof() {
  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-3">
          Trusted by Business Travelers & Locals
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Stat 1 - Total Rides */}
        <div className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-[var(--primary)] mb-2">
            10,000+
          </div>
          <p className="text-sm sm:text-base text-[var(--textMuted)]">
            Rides Completed
          </p>
        </div>

        {/* Stat 2 - Rating */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icons.star
                key={star}
                className="w-5 h-5 sm:w-6 sm:h-6 fill-[var(--primary)] text-[var(--primary)]"
              />
            ))}
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-[var(--text)] mb-1">
            4.9/5
          </div>
          <p className="text-sm sm:text-base text-[var(--textMuted)]">
            Average Rating
          </p>
        </div>

        {/* Testimonial 1 */}
        <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-5 text-center md:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icons.star
                key={star}
                className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[var(--textMuted)] italic mb-3">
            "Professional, punctual, and pristine vehicles. Best chauffeur service in Portland."
          </p>
          <p className="text-xs font-semibold text-[var(--text)]">
            — Sarah M., Corporate Client
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[var(--background)] border border-[var(--border)] rounded-lg p-5 text-center md:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Icons.star
                key={star}
                className="w-4 h-4 fill-[var(--primary)] text-[var(--primary)]"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-[var(--textMuted)] italic mb-3">
            "Never late to PDX. Fixed pricing means no surprises. Highly recommend!"
          </p>
          <p className="text-xs font-semibold text-[var(--text)]">
            — Michael T., Frequent Traveler
          </p>
        </div>
      </div>
    </section>
  );
}
