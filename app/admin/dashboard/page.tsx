import { getCustomers } from "@/actions/customers.actions";
import { getLeads } from "@/actions/leads.actions";
import AdminDashboardPage from "@/features/admin-dashboard/AdminDashboardPage";

export default async function AdminDashboard() {
  const customers = await getCustomers();
  const leads = await getLeads();

  return <AdminDashboardPage leads={leads} customers={customers} />;
}
