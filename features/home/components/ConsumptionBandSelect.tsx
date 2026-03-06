"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
interface Props {
  options: { id: string; value: string }[];
  setOptionId: (value: string | undefined) => void;
}
export default function ConsumptionBandSelect({ setOptionId, options }: Props) {
  return (
    <Select onValueChange={(id) => setOptionId(id)}>
      <SelectTrigger className="focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun">
        <SelectValue placeholder="Selecione a faixa de consumo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem value={option.id}>{option.value}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
