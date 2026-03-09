import { Sun } from "lucide-react";
import NavBarMenu from "./NavBarMenu";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const title = "SolarBR";
  const menuList = [
    {
      label: "Simulação",
      link: "#lead-form",
      isBtn: false,
    },
    {
      label: "Como funciona",
      link: "#explanation",
      isBtn: false,
    },
    {
      label: "Curiosidades",
      link: "#curiosities",
      isBtn: false,
    },
    {
      label: "Acessar Dashboard",
      link: "/admin/dashboard",
      isBtn: true,
    },
  ];
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-solar-dark to-solar-dark/90 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <Sun className="text-solar-glow" />
        <p className="font-bold text-white">{title}</p>
      </div>
      <div className="lg:hidden">
        <NavBarMenu />
      </div>
      <div className="hidden lg:flex items-center gap-x-6">
        {menuList.map((item, idx) =>
          item.isBtn ? (
            <Link key={idx} href={item.link} className="">
              <Button className="text-white cursor-pointer border-1 border-sun bg-sun rounded-xl hover:bg-transparent transition-all duration-200">
                {item.label}
              </Button>
            </Link>
          ) : (
            <Link
              key={idx}
              href={item.link}
              className="text-white/40 cursor-pointer hover:text-sun transition-all duration-200"
            >
              {item.label}
            </Link>
          ),
        )}
      </div>
    </header>
  );
}
