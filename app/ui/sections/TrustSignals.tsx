import { Icons } from "@/app/components/Icons";

export function TrustSignals() {
  const signals = [
    {
      icon: Icons.shield,
      title: "Licensed & Insured",
      description: "Fully certified and protected"
    },
    {
      icon: Icons.user,
      title: "Professional Chauffeurs",
      description: "Trained and background-checked"
    },
    {
      icon: Icons.clock,
      title: "On-Time Guarantee",
      description: "Punctuality you can count on"
    },
    {
      icon: Icons.phone,
      title: "24/7 Availability",
      description: "Always ready when you need us"
    }
  ];

  return (
    <section className="py-8 sm:py-10 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <div
              key={index}
              className="text-center flex flex-col items-center gap-3"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[var(--background)] flex items-center justify-center">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-[var(--text)]">
                {signal.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--textMuted)]">
                {signal.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
