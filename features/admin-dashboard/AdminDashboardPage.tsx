"use client";

import { Button } from "@/components/ui/button";
import { Customer, getCustomerColumns } from "./components/CustomerColumns";
import { CustomerDataTable } from "./components/CustomerTable";
import { Lead, getLeadColumns } from "./components/LeadColumns";
import { LeadDataTable } from "./components/LeadTable";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import CreateClientButton from "./components/CreateClientButton";
interface Props {
  customers: Customer[] | null;
  leads: Lead[] | null;
}
export default function AdminDashboardPage({ customers, leads }: Props) {
  const title = "Admin Dashboard";
  const handleSendLeads = () => {
    toast("Leads enviados com sucesso.");
  };
  const leadColumns = getLeadColumns({ customers: customers ?? [] });
  const customerColumns = getCustomerColumns();
  return (
    <section className="px-8 py-18 flex flex-col gap-y-8">
      <div className="space-y-4">
        <Link href={"/"} className="text-sun flex items-center">
          <ArrowLeft />
          Voltar
        </Link>
        <h1 className="text-sun text-4xl font-bold">{title}</h1>
      </div>
      <div className="lg:flex-row flex-col flex items-start lg:items-center gap-6">
        <div className="lg:w-1/2 text-start overflow-x-auto w-full">
          <h1 className="font-bold lg:text-2xl py-3">Leads</h1>
          <LeadDataTable columns={leadColumns} data={leads ?? []} />
        </div>
        <div className="lg:w-1/2 text-start overflow-auto w-full">
          <h1 className="font-bold lg:text-2xl py-3">Customers</h1>
          <CustomerDataTable columns={customerColumns} data={customers ?? []} />
        </div>
      </div>
      <div className="lg:space-x-4 space-y-4">
        <Button
          onClick={() => handleSendLeads()}
          className="cursor-pointer bg-sun hover:bg-transparent border-1 lg:w-fit w-full border-sun hover:text-sun"
        >
          Enviar Leads
        </Button>
        <CreateClientButton />
      </div>
    </section>
  );
}
