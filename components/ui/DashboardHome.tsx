"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Download,
  Send,
  FileText,
  Fingerprint,
  Map,
  Settings,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export default function DashboardHome() {
  const [activeTab, setActiveTab] = useState("Available");

  // Datos de ejemplo para las transacciones
  const transactions = [
    {
      id: "*vhwj",
      time: "2025-01-04 18:11:40",
      type: "Send",
      counterparty: "Biscayne Trading LLC",
      amount: "-$1,499,100.00",
      isNegative: true,
    },
    {
      id: "*3hCk",
      time: "2025-01-04 12:44:11",
      type: "Dep",
      counterparty: "Self - JP Morgan Chase",
      amount: "+$250,000.00",
      isNegative: false,
    },
    {
      id: "*p001",
      time: "2025-01-03 14:11:78",
      type: "With",
      counterparty: "Self - JP Morgan Chase",
      amount: "-$1,499,100.00",
      isNegative: true,
    },
    {
      id: "*vh31",
      time: "2025-01-03 02:11:11",
      type: "Recv",
      counterparty: "Clearinghouse LLC",
      amount: "+$756,000.11",
      isNegative: false,
    },
    {
      id: "*q551",
      time: "2025-01-02 11:30:32",
      type: "Recv",
      counterparty: "S4 Markets LLC",
      amount: "+$600,111.32",
      isNegative: false,
    },
  ];

  // Datos para el heatmap
  const heatmapDates = [
    "2025-01-04",
    "2025-01-03",
    "2025-01-02",
    "2025-01-01",
    "2024-12-31",
    "2024-12-30",
    "2024-12-29",
    "2024-12-28",
    "2024-12-27",
    "2024-12-26",
  ];

  // Función para generar colores aleatorios para el heatmap
  const getRandomHeatmapColor = (row: number, col: number) => {
    // Colores específicos para ciertas celdas para imitar la imagen
    if (row === 4 && col === 1) return "bg-gray-200"; // La celda seleccionada
    if (row === 0 && col === 2) return "bg-red-200";
    if (row === 0 && col === 4) return "bg-teal-200";
    if (row === 1 && col === 0) return "bg-teal-200";
    if (row === 1 && col === 1) return "bg-red-100";
    if (row === 2 && col === 1) return "bg-red-200";
    if (row === 6 && col === 0) return "bg-teal-200";

    // Para el resto, usar transparente o colores aleatorios suaves
    const colors = [
      "bg-transparent",
      "bg-red-100",
      "bg-teal-100",
      "bg-blue-100",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ScrollArea className="flex-1">
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Balance History Section */}
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Balance History
                </h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs bg-gray-100 text-gray-700"
                  >
                    CSV
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs bg-gray-100 text-gray-700"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </Button>
                  <div className="relative">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs bg-teal-100 text-teal-800 flex items-center gap-1"
                    >
                      6 MONTHS
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-2">Account Balances</div>

              <div className="flex border-b mb-4">
                <button
                  className={`px-4 py-2 text-sm ${
                    activeTab === "Available"
                      ? "border-b-2 border-blue-500 font-medium text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Available")}
                >
                  Available
                </button>
                <button
                  className={`px-4 py-2 text-sm ${
                    activeTab === "Pending"
                      ? "border-b-2 border-blue-500 font-medium text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Pending")}
                >
                  Pending
                </button>
                <button
                  className={`px-4 py-2 text-sm ${
                    activeTab === "Total"
                      ? "border-b-2 border-blue-500 font-medium text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("Total")}
                >
                  Total
                </button>
              </div>

              <div className="relative h-48">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 200"
                  preserveAspectRatio="none"
                >
                  {/* Línea verde (Total) */}
                  <path
                    d="M0,150 C50,120 100,80 150,90 C200,100 250,130 300,140 C350,150 400,120 450,70 C500,20 550,10 600,0"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  {/* Línea azul claro (Pending) */}
                  <path
                    d="M0,120 C50,140 100,160 150,150 C200,140 250,100 300,90 C350,80 400,100 450,120 C500,140 550,130 600,120"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="2"
                  />
                  {/* Línea azul oscuro (Available) */}
                  <path
                    d="M0,100 C50,130 100,160 150,170 C200,180 250,170 300,140 C350,110 400,90 450,80 C500,70 550,70 600,70"
                    fill="none"
                    stroke="#1E40AF"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute left-[35%] top-[45%] transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 px-3 py-1 rounded-md shadow-sm">
                  <span className="font-medium text-gray-800">$956,001</span>
                </div>
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <div>$1.5M</div>
                  <div>$1.0M</div>
                  <div>$0.5M</div>
                  <div>$0</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                  <div>Jan</div>
                  <div>Feb</div>
                  <div>Mar</div>
                  <div>Apr</div>
                  <div>May</div>
                  <div>Jun</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Section */}
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download account history
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-teal-100 hover:bg-teal-200 text-teal-800"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send instant transfer
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-blue-100 hover:bg-blue-200 text-blue-800"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Get deposit instructions
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-blue-200 hover:bg-blue-300 text-blue-800"
                >
                  <Fingerprint className="h-4 w-4 mr-2" />
                  Authorize transfer
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-teal-100 hover:bg-teal-200 text-teal-800"
                >
                  <Map className="h-4 w-4 mr-2" />
                  View bank map
                </Button>
                <Button
                  variant="outline"
                  className="justify-start h-10 bg-gray-100 hover:bg-gray-200 text-gray-800"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Authorize account integrations
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Net Flows Section */}
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                Net Flows
              </h2>
              <div className="relative h-48">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <div>$0.4M</div>
                  <div>$0.2M</div>
                  <div>$0</div>
                  <div className="text-red-500">-$0.2M</div>
                  <div className="text-red-500">-$0.4M</div>
                </div>
                <div className="absolute bottom-0 left-12 right-0 flex justify-between items-end h-32">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-10 bg-teal-100 rounded-t"></div>
                    <div className="mt-2 text-xs text-gray-500">Jan</div>
                  </div>
                  <div className="flex flex-col items-center relative">
                    <div className="w-8 h-24 bg-teal-200 rounded-t"></div>
                    <div className="absolute top-0 -mt-6 bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">
                      $355,101
                    </div>
                    <div className="mt-2 text-xs text-gray-500">Feb</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-12 bg-red-200 rounded-b mt-20"></div>
                    <div className="mt-2 text-xs text-gray-500">Mar</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-6 bg-teal-100 rounded-t"></div>
                    <div className="mt-2 text-xs text-gray-500">Apr</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-16 bg-red-200 rounded-b mt-16"></div>
                    <div className="mt-2 text-xs text-gray-500">May</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-red-200 rounded-b mt-24"></div>
                    <div className="mt-2 text-xs text-gray-500">Jun</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transactions Section */}
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Transactions
                </h2>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md flex items-center text-xs">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  [3] transactions need approval
                </div>
              </div>

              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Latest Transactions
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2 font-medium">ID</th>
                      <th className="pb-2 font-medium">Settled Time</th>
                      <th className="pb-2 font-medium">Type</th>
                      <th className="pb-2 font-medium">Counterparty</th>
                      <th className="pb-2 font-medium text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-b border-gray-100"
                      >
                        <td className="py-3 text-blue-600">{transaction.id}</td>
                        <td className="py-3">{transaction.time}</td>
                        <td className="py-3">{transaction.type}</td>
                        <td className="py-3 max-w-[150px] truncate">
                          {transaction.counterparty}
                        </td>
                        <td
                          className={`py-3 text-right ${
                            transaction.isNegative
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-sm font-medium text-gray-500 mt-6 mb-3">
                Summary Heatmap
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <tbody>
                    {heatmapDates.map((date, dateIndex) => (
                      <tr key={date}>
                        <td className="py-1 pr-2 text-gray-500 whitespace-nowrap">
                          {date}
                        </td>
                        {[...Array(7)].map((_, i) => (
                          <td key={i} className="p-0">
                            <div
                              className={`w-6 h-6 ${getRandomHeatmapColor(
                                dateIndex,
                                i
                              )}`}
                            ></div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Transaction Detail Popup */}
              <div
                className="absolute bg-gray-900 text-white p-3 rounded shadow-lg text-xs"
                style={{ bottom: "150px", right: "150px", width: "220px" }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">ID:</span>
                  <span>38vucv983jv0-223jkc</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">TIME:</span>
                  <span>2024-12-31 02:24:24</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">TYPE:</span>
                  <span>Instant Receive</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">PARTY:</span>
                  <span>BitLock Trading LLC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AMT:</span>
                  <span className="text-green-400">+$3,444,016.27</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deposit Map Section */}
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800">
                  Deposit Map
                </h2>
                <div className="text-xs text-gray-500">
                  Positions reallocated: 2025-01-04
                </div>
              </div>

              <div className="relative h-[300px] mb-4">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 800 500"
                  className="text-gray-200"
                >
                  {/* Simplified US map outline */}
                  <path
                    d="M155,190 L190,190 L210,170 L245,170 L280,190 L310,190 L340,170 L360,170 L380,190 L420,190 L440,170 L460,170 L480,190 L540,190 L560,170 L580,170 L600,190 L640,190 L650,210 L650,250 L630,270 L630,290 L650,310 L650,350 L630,370 L630,390 L650,410 L650,450 L630,470 L580,470 L560,450 L540,450 L520,470 L460,470 L440,450 L420,450 L400,470 L340,470 L320,450 L300,450 L280,470 L220,470 L200,450 L180,450 L160,470 L100,470 L80,450 L80,410 L100,390 L100,370 L80,350 L80,310 L100,290 L100,270 L80,250 L80,210 L100,190 L155,190 Z"
                    fill="currentColor"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  {/* Alaska simplificado */}
                  <path
                    d="M50,400 L120,400 L120,470 L50,470 Z"
                    fill="currentColor"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  {/* Puntos en el mapa */}
                  <circle
                    cx="150"
                    cy="250"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="250"
                    cy="300"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="350"
                    cy="250"
                    r="15"
                    fill="#2C7A7B"
                    opacity="0.9"
                  />{" "}
                  {/* Wisconsin */}
                  <circle
                    cx="450"
                    cy="280"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="550"
                    cy="200"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="500"
                    cy="350"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="600"
                    cy="400"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="200"
                    cy="400"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                  <circle
                    cx="100"
                    cy="430"
                    r="10"
                    fill="#4FD1C5"
                    opacity="0.7"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">FI NAME</div>
                <div className="text-gray-800">Wisconsin National Bank, NA</div>

                <div className="text-gray-500">FI HQ CITY, ST</div>
                <div className="text-gray-800">Westshire, WI</div>

                <div className="text-gray-500">FI REG ID</div>
                <div className="text-gray-800">#55501</div>

                <div className="text-gray-500">BALANCE</div>
                <div className="text-gray-800">$231,000.12</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-500">
          <p>
            INDX Processing, LLC - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla eu dignissim erat, quis varius augue. Nunc a
            ipsum ac magna tincidunt condimentum. Fusce convallis lectus tellus,
            quis tincidunt velit tempor non. Aenean feugiat est sed massa
            venenatis, ac laoreet nisl elementum. Nulla sit amet nisl dictum,
            porttitor sapien volutpat, faucibus lorem. Donec sit amet magna
            mollis, posuere metus at, tempor augue. Pellentesque interdum
            finibus libero, eget rhoncus ipsum maximus et. Vestibulum convallis
            mauris sapien, in faucibus ipsum pretium nec. Nullam bibendum, leo
            quis elementum euismod, libero purus finibus augue, sit amet
            bibendum ligula augue ac ligula. Cras nec tortor turpis. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla eu dignissim
            erat, quis varius augue.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}
