export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-[var(--text)] mb-2">
          Welcome to Admin Dashboard
        </h2>
        <p className="text-[var(--textMuted)]">
          Manage your regions, countries, cities, services, and fleet from here.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Regions", count: 6, icon: "🗺️" },
          { label: "Countries", count: 13, icon: "🌍" },
          { label: "Cities", count: 50, icon: "🏙️" },
          { label: "Services", count: 4, icon: "💼" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-xl"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-[var(--text)] mb-1">
              {stat.count}
            </div>
            <div className="text-sm text-[var(--textMuted)]">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryHover)] transition text-left">
            ➕ Add New City
          </button>
          <button className="px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryHover)] transition text-left">
            🚗 Add New Vehicle
          </button>
          <button className="px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryHover)] transition text-left">
            📝 Update SEO
          </button>
          <button className="px-4 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primaryHover)] transition text-left">
            📊 View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
