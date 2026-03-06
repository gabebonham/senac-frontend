"use client";

import { FileText, Play } from "lucide-react";
import NewsCard from "./NewsCard";

export default function NewsSection() {
  const news1Title = "Brasil bate recorde de geração de energia solar em 2025";
  const news1Link = "https://www.portalsolar.com.br/";
  const news1platform = "Portal Solar";
  const news2Title =
    "Energia solar cresce 50% e se consolida como segunda fonte de matriz elétrica";
  const news2Link = "https://www.absolar.org.br/";
  const news2platform = "ABSOLAR";
  const news3Title =
    "Governo amplia incentivos para micro e minigeração distribuída";
  const news3Link = "https://www.gov.br/pt-br";
  const news3platform = "Gov.br";
  return (
    <section className="pb-22 px-8 text-center flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-bold text-xl flex items-center gap-x-2 mt-10">
          <FileText className="text-solar-sky" />
          Notícias
        </h1>
        <NewsCard
          platform={news1platform}
          link={news1Link}
          title={news1Title}
        />
        <NewsCard
          platform={news2platform}
          link={news2Link}
          title={news2Title}
        />
        <NewsCard
          platform={news3platform}
          link={news3Link}
          title={news3Title}
        />
      </div>
    </section>
  );
}
