"use client";

import { deleteCustomer } from "@/actions/customers.actions";
import { convertLead } from "@/actions/leads.actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash } from "lucide-react";
import { toast } from "sonner";

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};
export function getCustomerColumns(leadId?: number) {
  const handleConvert = async (customerId: number) => {
    if (!leadId) return;
    const res = await convertLead(customerId, leadId);
    if (res != null) {
      toast("Lead convertido com sucesso!");
    } else {
      toast("Erro ao converter lead!");
    }
  };
  const customerColumns: ColumnDef<Customer>[] = [
    {
      accessorKey: "name",
      header: "Nome",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Telefone",
    },
  ];
  if (leadId) {
    customerColumns.push({
      id: "convert",
      header: "Converter",
      cell: ({ row }) => {
        const client = row.original;

        return (
          <Button
            onClick={() => handleConvert(client.id)}
            className="lg:w-fit w-full cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun"
          >
            Selecionar Customer
          </Button>
        );
      },
    });
  } else {
    customerColumns.push({
      id: "delete",
      header: "Deletar",
      cell: ({ row }) => {
        const client = row.original;

        return (
          <Button
            onClick={() => deleteCustomer(client.id)}
            className="bg-transparent hover:bg-transparent cursor-pointer"
          >
            <Trash className="text-red-500" />
          </Button>
        );
      },
    });
  }
  return customerColumns;
}
