"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  img: string;
  link: string;
}
export default function VideoCard({ title, img, link }: Props) {
  return (
    <Link href={link}>
      <Card className={`shadow-lg pt-0`}>
        <Image
          className="bg-cover rounded-t-xl"
          src={img}
          alt={`${title}-img `}
          width={800}
          height={300}
        />
        <div className="px-8">
          <h1 className="font-semibold text-start">{title}</h1>
        </div>
      </Card>
    </Link>
  );
}
