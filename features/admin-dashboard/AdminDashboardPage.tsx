"use client";

import { Button } from "@/components/ui/button";
import { Customer, customerColumns } from "./components/CustomerColumns";
import { CustomerDataTable } from "./components/CustomerTable";
import { Lead, leadColumns } from "./components/LeadColumns";
import { LeadDataTable } from "./components/LeadTable";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
interface Props {
  customers: Customer[] | null;
  leads: Lead[] | null;
}
export default function AdminDashboardPage({ customers, leads }: Props) {
  const title = "Admin Dashboard";
  return (
    <section className="px-8 py-18 flex flex-col gap-y-8">
      <div className="space-y-4">
        <Link href={"/"} className="text-sun flex items-center">
          <ArrowLeft />
          Voltar
        </Link>
        <h1 className="text-sun text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="w-1/2">
          <LeadDataTable columns={leadColumns} data={leads ?? []} />
        </div>
        <div className="w-1/2">
          <CustomerDataTable columns={customerColumns} data={customers ?? []} />
        </div>
      </div>
      <div>
        <Button className="cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun">
          Enviar Leads
        </Button>
      </div>
    </section>
  );
}
