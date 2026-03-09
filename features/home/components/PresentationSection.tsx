"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Sun } from "lucide-react";

export default function PresentationSection() {
  const badgeTitle = "Energia Solar Residencial e Empresarial";
  const heroTitle = (
    <p className="lg:text-6xl text-white font-bold text-4xl text-start">
      Reduza sua conta de luz em até{" "}
      <span className="text-solar-warm">95%</span> com Energia Solar
    </p>
  );
  const heroDescription =
    "Descubra quanto você pode economizar com energia solar. Faça uma simulação gratuita e receba uma proposta personalizada para sua residência ou empresa.";
  return (
    <section
      className="w-full bg-[url('https://ec.europa.eu/eurostat/documents/4187653/15337359/hrui_AdobeStock_276818517_RV.jpg')] 
      bg-cover bg-center py-4 lg:pb-24 flex flex-col gap-y-8 px-8
      shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]"
    >
      <div className="lg:justify-start w-full flex justify-center items-center ">
        <div className="lg:w-fit w-full wrap-break-word h-full bg-transparent border-1 py-2 px-4 rounded-full border-solar-light text-solar-light flex items-center gap-x-2 bg-gradient-to-r from-solar-light/30 to-solar-dark/10">
          <Sun />
          <p className="text-md">{badgeTitle}</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-6">
        {heroTitle}
        <p className="text-white/80 text-lg">{heroDescription}</p>
      </div>
      <div className="lg:gap-x-4 lg:flex-row lg:items-center flex flex-col gap-y-8">
        <Button className="hover:from-white cursor-pointer hover:to-white hover:text-solar-dark border-1 border-sun lg:w-fit w-full h-12 rounded-xl text-lg bg-linear-to-r from-sun to-solar-glow-dark">
          Simular Economia Agora
        </Button>
        <Button className="w-full  lg:w-48 h-12 rounded-xl cursor-pointer hover:bg-white hover:text-black  text-lg bg-transparent border-white border-1">
          Saiba Mais <ArrowDown />
        </Button>
      </div>
      <div className="flex items-center text-center lg:justify-between lg:w-1/3">
        <div className="flex flex-col">
          <p className="text-solar-light font-semibold text-lg">+5.000</p>
          <p className="text-white/70">Customeres satisfeitos</p>
        </div>
        <div className="flex flex-col">
          <p className="text-solar-light font-semibold text-lg">95%</p>
          <p className="text-white/70">Economia média</p>
        </div>
        <div className="flex flex-col">
          <p className="text-solar-light font-semibold text-lg">25 anos</p>
          <p className="text-white/70">De garantia</p>
        </div>
      </div>
    </section>
  );
}
