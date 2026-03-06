"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SeparatorHorizontal,
  Sun,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Separator } from "radix-ui";

export default function Footer() {
  const title = "SolarBR";
  const description =
    "Transformando a energia do sol em economia e sustentabilidade para residências e empresas de todo o Brasil.";
  const location = "São Paulo, SP";
  const email = "contato@solarbr.com.br";
  const phone = "(11) 99999-9999";
  const link1 = { label: "Simulação Gratuita", link: "" };
  const link2 = { label: "Política de Privacidade", link: "" };
  const link3 = { label: "Termos de Uso", link: "" };
  const social1 = {
    icon: <Facebook className="box-content rounded-lg bg-white/20 p-2" />,
    link: "",
  };
  const social2 = {
    icon: <Instagram className="box-content rounded-lg bg-white/20 p-2" />,
    link: "",
  };
  const social3 = {
    icon: <Linkedin className="box-content rounded-lg bg-white/20 p-2" />,
    link: "",
  };
  const social4 = {
    icon: <Youtube className="box-content rounded-lg bg-white/20 p-2" />,
    link: "",
  };
  const rights = "© 2026 SolarBR. Todos os direitos reservados.";
  return (
    <footer className="space-y-6 text-start bg-solar-dark text-muted/50 px-8 py-16 text-sm">
      <div className="space-y-6 ">
        <h1 className="flex items-center gap-x-2 text-white text-xl font-bold">
          <Sun className="text-sun" />
          {title}
        </h1>
        <p>{description}</p>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold my-4">Contato</h1>
        <div className="flex flex-col gap-y-3 justify-start">
          <p className="flex items-center gap-x-2">
            <Phone className="size-4 text-sun" />
            {phone}
          </p>
          <p className="flex items-center gap-x-2">
            <Mail className="size-4 text-sun" />
            {email}
          </p>
          <p className="flex items-center gap-x-2">
            <MapPin className="size-4 text-sun" />
            {location}
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold my-4">Links</h1>
        <div className="flex flex-col justify-start">
          <Link href={link1.link}>{link1.label}</Link>
          <Link href={link2.link}>{link2.label}</Link>
          <Link href={link3.link}>{link3.label}</Link>
        </div>
      </div>
      <div>
        <h1 className="text-white text-lg font-bold my-4">Redes Sociais</h1>
        <div className="flex gap-x-2 items-center">
          <Link href={social1.link}>{social1.icon}</Link>
          <Link href={social2.link}>{social2.icon}</Link>
          <Link href={social3.link}>{social3.icon}</Link>
          <Link href={social4.link}>{social4.icon}</Link>
        </div>
      </div>
      <div className="text-center border-t-muted/50 border-t-1 py-4">
        {rights}
      </div>
    </footer>
  );
}
