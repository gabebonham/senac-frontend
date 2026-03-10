"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Pin, Sun, User } from "lucide-react";
import ConsumptionBandSelect from "./ConsumptionBandSelect";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { createCustomer } from "@/actions/customers.actions";
import { toast } from "sonner";
import { createLead } from "@/actions/leads.actions";

export default function FormCard() {
  const [optionId, setOptionId] = useState<string | undefined>();
  const options = [
    { id: "0", value: "Até R$300 (Pequeno porte)" },
    { id: "1", value: "R$300 a R$800 (Médio porte)" },
    { id: "2", value: "R$800 a R$2000 (Grande porte)" },
    { id: "3", value: "Acima de R$2000 (Empresas)" },
  ];
  const warning = "Seus dados estão protegidos. Não enviamos spam.";
  const handleCreateCustomer = async (formData: FormData) => {
    if (
      !formData.get("email") ||
      !formData.get("phone") ||
      !formData.get("cep") ||
      !optionId ||
      !formData.get("name")
    ) {
      setOptionId(undefined);
      toast("Campos faltando.");
      return;
    }

    if (formData.get("cep")?.valueOf()?.toString()?.length! > 10) {
      setOptionId(undefined);
      toast("CEP inválido.");
      return;
    }
    const data: any = {
      nome: formData.get("name"),
      telefone: formData.get("phone"),
      email: formData.get("email"),
      cep: formData.get("cep"),
      perfilDeConsumo: optionId,
    };

    const customer = await createLead(data);
    if (customer) {
      setOptionId(undefined);
      toast("Dados enviados com sucesso.");
    }
  };
  return (
    <Card className="px-6 shadow-xl">
      <form action={handleCreateCustomer} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="usernameInp" className="flex items-center gap-x-2">
            <User className="size-4 text-sun" />
            Nome completo
          </Label>
          <Input
            name="name"
            id="usernameInp"
            placeholder="Seu nome completo..."
            className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emailInp" className="flex items-center gap-x-2">
            <Mail className="size-4 text-sun" />
            Email
          </Label>
          <Input
            name="email"
            id="emailInp"
            placeholder="Seu email..."
            className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cicepInptyInp" className="flex items-center gap-x-2">
            <MapPin className="size-4 text-sun" />
            CEP
          </Label>
          <Input
            name="cep"
            id="cepInp"
            placeholder="Seu cep..."
            className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneInp" className="flex items-center gap-x-2">
            <Phone className="size-4 text-sun" />
            Celular
          </Label>
          <Input
            name="phone"
            id="phoneInp"
            placeholder="Seu celular..."
            className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phoneInp" className="flex items-center gap-x-2">
            <Sun className="size-4 text-sun" />
            Valor médio da conta de energia (R$/mês)
          </Label>
          <ConsumptionBandSelect
            optionId={optionId}
            options={options}
            setOptionId={setOptionId}
          />
        </div>
        <div>
          <Button
            type="submit"
            className="cursor-pointer bg-linear-to-r from-sun to-solar-glow-dark text-lg rounded-full h-12 px-6"
          >
            Simular Gratuítamente
          </Button>
        </div>
        <p className="text-solar-dark/50 lg:text-sm">{warning}</p>
      </form>
    </Card>
  );
}
