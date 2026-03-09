"use client";

import { Card } from "@/components/ui/card";
import React from "react";

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export default function ExplanationCard({ title, description, icon }: Props) {
  return (
    <Card className="shadow-lg text-center px-4 flex flex-col items-center justify-center rounded-2xl">
      {icon}
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm text-solar-dark/60">{description}</p>
    </Card>
  );
}
