import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import TransactionsTable from "./TransactionsTable";
import { Settings, Badge } from "lucide-react";
import { Button } from "./button";


export default function DashboardHome() {

  return (
    <ScrollArea className="flex-1">
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-[#8a94a6]">
              <Settings className="h-5 w-5" />
            </Button>
            <Button className="bg-[#5e81ff] hover:bg-[#4a6eee] text-white">
              Today: April 29
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card className="bg-[#1e293b] border-[#2a3548] shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#8a94a6]">
                Account Balance
              </CardTitle>
              <div className="h-4"></div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-2xl font-bold">24.532</div>
                  <div className="flex items-center mt-1">
                    <Badge className="bg-[#2a8a46] text-white text-xs rounded px-1.5 py-0.5 mr-2">
                      +14%
                    </Badge>
                    <span className="text-xs text-[#8a94a6]">
                      Since last week
                    </span>
                  </div>
                </div>
                <div className="h-16 w-16">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/placeholder-ob7miW3mUreePYfXdVwkpFWHthzoR5.svg?height=64&width=64"
                    alt="Visitor illustration"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e293b] border-[#2a3548] shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#8a94a6]">
                Available Balance
              </CardTitle>
              <Badge className="bg-[#5e81ff] text-white text-xs rounded-md px-2 py-0.5">
                Annual
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">63.200</div>
              <div className="flex items-center mt-1">
                <Badge className="bg-[#a13333] text-white text-xs rounded px-1.5 py-0.5 mr-2">
                  -12%
                </Badge>
                <span className="text-xs text-[#8a94a6]">Since last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1e293b] border-[#2a3548] shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#8a94a6]">
                Pending Transactions
              </CardTitle>
              <Badge className="bg-[#5e81ff] text-white text-xs rounded-md px-2 py-0.5">
                Monthly
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.320</div>
              <div className="flex items-center mt-1">
                <Badge className="bg-[#a13333] text-white text-xs rounded px-1.5 py-0.5 mr-2">
                  -18%
                </Badge>
                <span className="text-xs text-[#8a94a6]">Since last week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Table */}
        <TransactionsTable />
      </main>
    </ScrollArea>
  );
}
