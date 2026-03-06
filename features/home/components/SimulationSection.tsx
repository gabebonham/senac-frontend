"use client";

import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import FormCard from "./FormCard";

export default function SimulationSection() {
  const title = (
    <h1 className="text-shadow-solar-dark font-bold text-3xl w-2/3">
      Descubra sua <span className="text-sun">economia</span>
    </h1>
  );
  const badgeTitle = "Simulação Gratuita";
  const description =
    "Preencha o formulário abaixo e receba uma simulação personalizada de economia com energia solar.";
  return (
    <section className="text-center py-22 flex flex-col items-center gap-y-6 w-full px-8 bg-muted">
      <div className="flex flex-col items-center w-full gap-y-4">
        <Badge className="bg-linear-to-r from-sun to-solar-glow-dark text-sm px-4 py-1">
          <Zap /> {badgeTitle}
        </Badge>
        {title}
        <p className="text-solar-dark/60">{description}</p>
      </div>
      <div>
        <FormCard />
      </div>
    </section>
  );
}
