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

export default function CreateClientButton() {
  const handleCreateCustomer = async (formData: FormData) => {
    if (
      !formData.get("name") ||
      !formData.get("phone") ||
      !formData.get("email")
    ) {
      toast("Dados incompletos.");
    } else {
      const data: any = {
        name: formData.get("name")?.valueOf(),
        telefone: formData.get("phone")?.valueOf(),
        email: formData.get("email")?.valueOf(),
      };
      const res = await createCustomer(data);
      if (res != null) {
        toast("Cliente criado com sucesso!");
      } else {
        toast("Erro ao criar cliente!");
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="lg:w-fit w-full">
        {" "}
        <Button className="lg:w-fit w-full cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun">
          Criar Cliente
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <form
            action={handleCreateCustomer}
            method="post"
            className="space-y-4"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input name="name" id="name" />
              </div>{" "}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input name="phone" id="phone" />
              </div>{" "}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" />
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="cursor-pointer bg-sun hover:bg-transparent border-1 border-sun hover:text-sun"
              >
                Criar Cliente
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
