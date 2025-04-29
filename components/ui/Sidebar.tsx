"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";
import Logo from "./Logo";
import {
  Landmark,
  LayoutDashboard,
  Headset,
  FileText,
  ArrowRightLeft,
} from "lucide-react";

function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/home", label: "Dashboard", icon: LayoutDashboard },
    {
      href: "/transactions",
      label: "Transactions",
      icon: ArrowRightLeft,
    },
    { href: "/positions", label: "Positions", icon: Landmark },
    { href: "/documents", label: "Documents", icon: FileText },
    { href: "/support", label: "Support", icon: Headset },
  ];

  return (
    <div className="w-[220px] border-r border-[#2a3548] flex flex-col">
      <div className="p-2 flex items-center gap-2 border-b border-[#2a3548]">
        <div className="text-white font-bold text-2xl flex items-center px-2">
          <Logo />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-3 py-4 space-y-1">
          {menuItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} passHref>
              <Button
                variant={pathname === href ? "secondary" : "ghost"}
                className={`w-full justify-start text-sm ${
                  pathname === href ? "bg-[#2a3548]" : ""
                }`}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Sidebar;
