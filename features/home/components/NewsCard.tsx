"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  platform: string;
  link: string;
}
export default function NewsCard({ title, platform, link }: Props) {
  return (
    <Card className="shadow-lg px-6">
      <h1 className="text-solar-dark font-semibold text-sm text-start">
        {title}
      </h1>
      <Link
        href={link}
        className="text-black/60 flex justify-between items-center"
      >
        <p>{platform}</p>
        <ExternalLink className="size-4" />
      </Link>
    </Card>
  );
}
