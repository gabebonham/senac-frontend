import { Sun } from "lucide-react";
import NavBarMenu from "./NavBarMenu";

export default function Header() {
  const title = "SolarBR";
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-solar-dark to-solar-dark/90 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Sun className="text-solar-glow" />
        <p className="font-bold text-white">{title}</p>
      </div>
      <div>
        <NavBarMenu />
      </div>
    </header>
  );
}
