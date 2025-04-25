"use client";

import {
  ChevronDown,
  ChevronRight,
  Landmark,
  LayoutDashboard,
  Headset,
  FileText,
  ArrowRightLeft,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { Button } from "./button";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="w-[220px] border-r border-[#2a3548] flex flex-col">
      <div className="p-4 flex items-center gap-2 border-b border-[#2a3548]">
        <div className="text-[#5e81ff] font-bold text-2xl flex items-center">
          INDX
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <div className="space-y-1">
            <Button
              variant={activeTab === "dashboard" ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${
                activeTab === "dashboard" ? "bg-[#2a3548]" : ""
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
              <ChevronDown className="ml-auto h-4 w-4" />
            </Button>
            <Button
              variant={activeTab === "pages" ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${
                activeTab === "pages" ? "bg-[#2a3548]" : ""
              }`}
              onClick={() => setActiveTab("pages")}
            >
              <ArrowRightLeft className="mr-2 h-4 w-4" />
              Transactions
              <ChevronRight className="ml-auto h-4 w-4" />
            </Button>
            <Button
              variant={activeTab === "projects" ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${
                activeTab === "projects" ? "bg-[#2a3548]" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <Landmark className="mr-2 h-4 w-4" />
              Positions
            </Button>
            <Button
              variant={activeTab === "orders" ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${
                activeTab === "orders" ? "bg-[#2a3548]" : ""
              }`}
              onClick={() => setActiveTab("orders")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </Button>
            <Button
              variant={activeTab === "products" ? "secondary" : "ghost"}
              className={`w-full justify-start text-sm ${
                activeTab === "products" ? "bg-[#2a3548]" : ""
              }`}
              onClick={() => setActiveTab("products")}
            >
              <Headset className="mr-2 h-4 w-4" />
              Support
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default Sidebar;
