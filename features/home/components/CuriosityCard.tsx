"use client";

import { Card } from "@/components/ui/card";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export default function CuriosityCard({ title, description, icon }: Props) {
  return (
    <Card className="shadow-lg px-6 flex flex-row justify-start rounded-2xl text-start">
      <div className="">{icon}</div>
      <div className="w-fit">
        <h1 className="text-lg font-bold ">{title}</h1>
        <p className="text-sm text-solar-dark/60 ">{description}</p>
      </div>
    </Card>
  );
}
