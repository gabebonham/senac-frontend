import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
export default function NavBarMenu() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Menu className="text-white size-4" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col gap-4 p-6">
          <Link href={"#lead-form"}>Simulação</Link>
          <Link href={"#explanation"}>Como funciona</Link>
          <Link href={"#curiosity"}>Curiosidades</Link>
          <Link href={"/admin/dashboard"} className="">
            <Button className="text-white cursor-pointer border-1 border-sun bg-sun rounded-xl hover:bg-transparent transition-all duration-200">
              Dashboard{" "}
            </Button>
          </Link>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
