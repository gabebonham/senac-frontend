"use client";

import { Play } from "lucide-react";
import VideoCard from "./VideoCard";

export default function ContentSection() {
  const title = (
    <h1 className="text-3xl font-bold text-solar-dark">
      Conteúdos sobre <span className="text-sun">Energia Solar</span>
    </h1>
  );
  const description =
    "Vídeos, notícias e informações para você ficar por dentro.";
  const video1Title = "Como funciona a energia solar fotovoltaica?";
  const video1Link = "https://www.youtube.com/watch?v=0elhIcPVtKE";
  const video1Img = "https://img.youtube.com/vi/0elhIcPVtKE/hqdefault.jpg";
  const video2Title = "Vale a pena instalar energia solar em 2025?";
  const video2Link = "https://www.youtube.com/watch?v=K6cLx4qHiZg";
  const video2Img = "https://img.youtube.com/vi/K6cLx4qHiZg/hqdefault.jpg";
  const video3Title = "Energia solar: tudo que você precisa saber";
  const video3Link = "https://www.youtube.com/watch?v=xKxrkht7CpY";
  const video3Img = "https://img.youtube.com/vi/xKxrkht7CpY/hqdefault.jpg";
  return (
    <section className="py-22 px-8 text-center flex flex-col gap-y-4">
      {title}
      <p className="text-solar-dark/60">{description}</p>
      <div className="flex flex-col gap-y-6">
        <h1 className="font-bold text-xl flex items-center gap-x-2 mt-10">
          <Play className="text-sun" />
          Vídeos
        </h1>
        <VideoCard img={video1Img} link={video1Link} title={video1Title} />
        <VideoCard img={video2Img} link={video2Link} title={video2Title} />
        <VideoCard img={video3Img} link={video3Link} title={video3Title} />
      </div>
    </section>
  );
}
