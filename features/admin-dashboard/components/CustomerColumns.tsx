"use client";

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

export type Customer = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const customerColumns: ColumnDef<Customer>[] = [
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

  {
    id: "delete",
    header: "Deletar",
    cell: ({ row }) => {
      const client = row.original;

      return (
        <Button className="bg-transparent hover:bg-transparent cursor-pointer">
          <Trash className="text-red-500" />
        </Button>
      );
    },
  },
];
