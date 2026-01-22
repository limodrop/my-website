import { Icons } from "@/app/components/Icons";

export function Differentiators() {
  const points = [
    {
      icon: Icons.dollarSign,
      text: "Fixed, transparent pricing — no surge"
    },
    {
      icon: Icons.user,
      text: "Professionally trained chauffeurs"
    },
    {
      icon: Icons.car,
      text: "Immaculate, late-model vehicles"
    },
    {
      icon: Icons.clock,
      text: "Punctuality guaranteed"
    },
    {
      icon: Icons.star,
      text: "Personalized service (not a rideshare)"
    }
  ];

  return (
    <section className="py-10 sm:py-16 bg-[var(--background)]">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text)] mb-3">
          Why Choose Oregon Town Car
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-[var(--textMuted)] max-w-2xl mx-auto">
          Experience the difference of true professional chauffeur service
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <li
                key={index}
                className="
                  flex items-start gap-4
                  p-4 sm:p-5 rounded-lg
                  bg-[var(--surface)]
                  border border-[var(--border)]
                  transition-all duration-200
                  hover:border-[var(--primary)]
                "
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--primary)]" />
                </div>
                <span className="text-sm sm:text-base text-[var(--text)] font-medium pt-1 sm:pt-2">
                  {point.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
