import AdminCities from "@/components/admin/AdminCities";

export default function CitiesAdminPage() {
  return (
    <div className="space-y-4">
      <AdminCities />
    </div>
  );
}

export const metadata = {
  title: "Manage Cities — Admin",
};
