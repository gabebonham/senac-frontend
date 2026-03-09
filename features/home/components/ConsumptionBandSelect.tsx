"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
interface Props {
  options: { id: string; value: string }[];
  setOptionId: (value: string | undefined) => void;
  optionId: string | undefined;
}
export default function ConsumptionBandSelect({
  optionId,
  setOptionId,
  options,
}: Props) {
  return (
    <Select value={optionId} onValueChange={(id) => setOptionId(id)}>
      <SelectTrigger className="lg:w-full focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-sun">
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
