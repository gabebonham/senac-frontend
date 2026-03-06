"use client";

import { CardSimIcon, CreditCard, House, Sun, Zap } from "lucide-react";
import ExplanationCard from "./ExplanationCard";

export default function HowSolarEnergyWorks() {
  const title = (
    <h1 className="text-3xl font-bold text-solar-dark">
      Como funciona a <span className="text-sun">Energia Solar</span>
    </h1>
  );
  const description =
    "Um processo simples que transforma a luz do sol em economia real na sua conta de energia.";
  const card1Title = "Captação Solar";
  const card1Description =
    "Os painéis fotovoltaicos captam a luz solar e a transformam em energia elétrica de corrente contínua.";
  const card1Icon = (
    <Sun className="text-sun bg-solar-light/40 rounded-lg p-2 box-content" />
  );
  const card2Title = "Conversão de Energia";
  const card2Description =
    "O inversor solar converte a corrente contínua em corrente alternada, pronta para uso doméstico.";
  const card2Icon = (
    <Zap className="text-sun bg-solar-light/40 rounded-lg p-2 box-content" />
  );
  const card3Title = "Uso Residencial";
  const card3Description =
    "A energia é distribuída pela residência, alimentando todos os aparelhos elétricos normalmente.";
  const card3Icon = (
    <House className="text-sun bg-solar-light/40 rounded-lg p-2 box-content" />
  );
  const card4Title = "Créditos Energéticos";
  const card4Description =
    "O excedente de energia gerada é enviado à concessionária e vira crédito na sua conta de luz.";
  const card4Icon = (
    <CreditCard className="text-sun bg-solar-light/40 rounded-lg p-2 box-content" />
  );
  return (
    <section className="py-22 px-8 text-center flex flex-col gap-y-4 bg-background">
      {title}
      <p className="text-solar-dark/60">{description}</p>
      <div className="flex flex-col gap-y-6">
        <ExplanationCard
          title={card1Title}
          description={card1Description}
          icon={card1Icon}
        />
        <ExplanationCard
          title={card2Title}
          description={card2Description}
          icon={card2Icon}
        />
        <ExplanationCard
          title={card3Title}
          description={card3Description}
          icon={card3Icon}
        />
        <ExplanationCard
          title={card4Title}
          description={card4Description}
          icon={card4Icon}
        />
      </div>
    </section>
  );
}
