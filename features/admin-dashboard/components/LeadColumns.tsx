"use client";

import { convertLead, deleteLead } from "@/actions/leads.actions";
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

export type Lead = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  perfilDeConsumo: number;
};

export const leadColumns: ColumnDef<Lead>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    id: "convert",
    header: "Converção",
    cell: ({ row }) => {
      const lead = row.original;

      return (
        <Button
          onClick={() => convertLead(1, lead.id)}
          className="cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun"
        >
          Converter Lead
        </Button>
      );
    },
  },
  {
    id: "delete",
    header: "Deletar",
    cell: ({ row }) => {
      const lead = row.original;

      return (
        <Button
          onClick={() => deleteLead(lead.id)}
          className="bg-transparent hover:bg-transparent cursor-pointer"
        >
          <Trash className="text-red-500" />
        </Button>
      );
    },
  },
];
