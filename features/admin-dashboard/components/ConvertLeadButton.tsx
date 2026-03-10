"use client";

import { createCustomer } from "@/actions/customers.actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Customer, getCustomerColumns } from "./CustomerColumns";
import { useState } from "react";
import { convertLead } from "@/actions/leads.actions";
import { CustomerDataTable } from "./CustomerTable";

export default function ConvertLeadButton({
  customers,
  leadId,
}: {
  customers: Customer[];
  leadId: number;
}) {
  const [customerId, setCustomerId] = useState<number | undefined>();
  const handleConvertLead = async () => {
    if (!customerId) {
      toast("Customer não selecionado.");
      return;
    }
  };
  const customerColumns = getCustomerColumns(leadId);
  return (
    <Dialog>
      <DialogTrigger className="lg:w-fit w-full">
        <Button className="lg:w-fit w-full cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun">
          Converter Lead
        </Button>
      </DialogTrigger>
      <DialogContent className=" w-full">
        <div className="space-y-4 overflow-x-auto w-full">
          <CustomerDataTable columns={customerColumns} data={customers} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
