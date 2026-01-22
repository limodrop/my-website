import AdminCountries from "@/components/admin/AdminCountries";

export default function CountriesAdminPage() {
  return (
    <div className="space-y-4">
      <AdminCountries />
    </div>
  );
}

export const metadata = {
  title: "Manage Countries — Admin",
};
