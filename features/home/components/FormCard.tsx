"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Pin, Sun, User } from "lucide-react";
import ConsumptionBandSelect from "./ConsumptionBandSelect";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FormCard() {
  const [optionId, setOptionId] = useState<string | undefined>();
  const options = [
    { id: "0", value: "Até R$300 (Pequeno porte)" },
    { id: "1", value: "R$300 a R$800 (Médio porte)" },
    { id: "2", value: "R$800 a R$2000 (Grande porte)" },
    { id: "3", value: "Acima de R$2000 (Empresas)" },
  ];
  const warning = "Seus dados estão protegidos. Não enviamos spam.";
  return (
    <Card className="px-6 shadow-xl">
      <div className="space-y-2">
        <Label htmlFor="usernameInp" className="flex items-center gap-x-2">
          <User className="size-4 text-sun" />
          Nome completo
        </Label>
        <Input
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
          id="emailInp"
          placeholder="Seu email..."
          className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cityInp" className="flex items-center gap-x-2">
          <MapPin className="size-4 text-sun" />
          Cidade
        </Label>
        <Input
          id="cityInp"
          placeholder="Sua cidade..."
          className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phoneInp" className="flex items-center gap-x-2">
          <Phone className="size-4 text-sun" />
          Celular
        </Label>
        <Input
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
        <ConsumptionBandSelect options={options} setOptionId={setOptionId} />
      </div>
      <div>
        <Button className="bg-linear-to-r from-sun to-solar-glow-dark text-lg rounded-full h-12 px-6">
          Simular Gratuítamente
        </Button>
      </div>
      <p>{warning}</p>
    </Card>
  );
}
