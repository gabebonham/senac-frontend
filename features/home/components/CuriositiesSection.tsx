"use client";

import { Battery, Globe, Leaf, TrendingUp } from "lucide-react";
import CuriosityCard from "./CuriosityCard";

export default function CuriositySection() {
  const title = (
    <h1 className="text-3xl font-bold text-solar-dark">
      Curiosidades sobre <span className="text-sun">Energia Solar</span>
    </h1>
  );
  const description = "Fatos que mostram por que a energia solar é o futuro.";
  const card1Title = "Potencial Solar Brasileiro";
  const card1Description =
    "O Brasil é um dos países com maior potencial solar do mundo, recebendo mais radiação solar que Alemanha, líder europeia no setor.";
  const card1Icon = (
    <Globe className="text-white bg-solar-sky rounded-lg p-2 box-content" />
  );
  const card2Title = "100% Renovável";
  const card2Description =
    "A energia solar é limpa, renovável e sustentável. Uma residência com painéis solares evita a emissão de toneladas de CO₂ por ano.";
  const card2Icon = (
    <Leaf className="text-white bg-solar-sky rounded-lg p-2 box-content" />
  );
  const card3Title = "Valoriza seu Imóvel";
  const card3Description =
    "Imóveis com sistema solar instalado podem valorizar até 8%, além de serem mais atrativos para compradores conscientes.";
  const card3Icon = (
    <Battery className="text-white bg-solar-sky rounded-lg p-2 box-content" />
  );
  const card4Title = "Durabilidade Impressionante";
  const card4Description =
    "Os painéis solares têm vida útil de mais de 25 anos, com manutenção mínima e garantia de eficiência ao longo do tempo.";
  const card4Icon = (
    <TrendingUp className="text-white bg-solar-sky rounded-lg p-2 box-content" />
  );
  const card5Title = "Retorno do Investimento";
  const card5Description =
    "O investimento em energia solar se paga em média de 3 a 5 anos, gerando economia por mais de duas décadas.";
  const card5Icon = (
    <TrendingUp className="text-white bg-solar-sky rounded-lg p-2 box-content" />
  );
  return (
    <section className="py-22 px-8 text-center flex flex-col gap-y-4 bg-muted">
      {title}
      <p className="text-solar-dark/60">{description}</p>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4  flex flex-col gap-y-6">
        <CuriosityCard
          title={card1Title}
          description={card1Description}
          icon={card1Icon}
        />
        <CuriosityCard
          title={card2Title}
          description={card2Description}
          icon={card2Icon}
        />
        <CuriosityCard
          title={card3Title}
          description={card3Description}
          icon={card3Icon}
        />
        <CuriosityCard
          title={card4Title}
          description={card4Description}
          icon={card4Icon}
        />
        <CuriosityCard
          title={card5Title}
          description={card5Description}
          icon={card5Icon}
        />
      </div>
    </section>
  );
}
