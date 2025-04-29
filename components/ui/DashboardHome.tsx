"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
//import { Button } from "@/components/ui/button"
//import { Download, Send, FileText, Fingerprint, Map, Settings, AlertTriangle } from "lucide-react"
//import { useState } from "react"
import Link from "next/link"

export default function DashboardHome() {
  //onst [activeTab, setActiveTab] = useState("Available")

  // Datos de ejemplo para las transacciones
  const transactions = [
    { time: "12:30:45 ET", id: "TX123456", type: "Deposit", status: "Completed", amount: "$2,500.00" },
    { time: "11:15:22 ET", id: "TX123457", type: "Withdrawal", status: "Completed", amount: "-$1,200.00" },
    { time: "10:05:18 ET", id: "TX123458", type: "Transfer", status: "Pending", amount: "-$3,450.75" },
    { time: "09:45:33 ET", id: "TX123459", type: "Deposit", status: "Completed", amount: "$1,800.50" },
    { time: "08:30:12 ET", id: "TX123460", type: "Withdrawal", status: "Completed", amount: "-$500.00" },
    { time: "07:20:05 ET", id: "TX123461", type: "Transfer", status: "Pending", amount: "-$2,300.25" },
    { time: "06:15:40 ET", id: "TX123462", type: "Deposit", status: "Completed", amount: "$3,200.00" },
    { time: "05:10:30 ET", id: "TX123463", type: "Withdrawal", status: "Completed", amount: "-$1,500.00" },
    { time: "04:05:22 ET", id: "TX123464", type: "Transfer", status: "Pending", amount: "-$4,100.75" },
    { time: "03:00:15 ET", id: "TX123465", type: "Deposit", status: "Completed", amount: "$2,700.50" },
  ]

  // Datos para el heatmap
  // const heatmapDates = [
  //   "2025-01-04",
  //   "2025-01-03",
  //   "2025-01-02",
  //   "2025-01-01",
  //   "2024-12-31",
  //   "2024-12-30",
  //   "2024-12-29",
  //   "2024-12-28",
  //   "2024-12-27",
  //   "2024-12-26",
  // ]

  // Función para generar colores aleatorios para el heatmap
  //const getRandomHeatmapColor = (row: number, col: number) => {
    // Colores específicos para ciertas celdas para imitar la imagen
  //   if (row === 4 && col === 1) return "bg-gray-200" // La celda seleccionada
  //   if (row === 0 && col === 2) return "bg-red-200"
  //   if (row === 0 && col === 4) return "bg-teal-200"
  //   if (row === 1 && col === 0) return "bg-teal-200"
  //   if (row === 1 && col === 1) return "bg-red-100"
  //   if (row === 2 && col === 1) return "bg-red-200"
  //   if (row === 6 && col === 0) return "bg-teal-200"

  //   // Para el resto, usar transparente o colores aleatorios suaves
  //   const colors = ["bg-transparent", "bg-red-100", "bg-teal-100", "bg-blue-100"]
  //   return colors[Math.floor(Math.random() * colors.length)]
  // }

  return (
    <ScrollArea className="flex-1">
      <div className="p-6 bg-white min-h-screen">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Dashboard</h1>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-600 mb-1">Account Balance</h2>
              <p className="text-2xl font-bold text-gray-900">$1,990,100.44</p>
              <p className="text-xs text-gray-500 mt-1">as of 1/29/2025 10:00:03 ET</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-600 mb-1">Available Balance</h2>
              <p className="text-2xl font-bold text-gray-900">$1,890,100.44</p>
              <p className="text-xs text-gray-500 mt-1">as of 1/29/2025 10:00:03 ET</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-none shadow-sm">
            <CardContent className="p-4">
              <h2 className="text-sm font-medium text-gray-600 mb-1">Pending Transactions</h2>
              <p className="text-2xl font-bold text-red-600">-$100,000.00</p>
              <p className="text-xs text-gray-500 mt-1">as of 1/29/2025 10:00:03 ET</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-gray-50 border-none shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-sm font-medium text-gray-600 mb-4">Most Recent Transactions</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-600 border-b border-gray-200">
                    <th className="pb-2 font-medium">Time</th>
                    <th className="pb-2 font-medium">ID</th>
                    <th className="pb-2 font-medium">Type</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-3 text-gray-800">{transaction.time}</td>
                      <td className="py-3 text-gray-800">{transaction.id}</td>
                      <td className="py-3 text-gray-800">{transaction.type}</td>
                      <td className="py-3 text-gray-800">{transaction.status}</td>
                      <td
                        className={`py-3 text-right ${transaction.amount.startsWith("-") ? "text-red-600" : "text-gray-800"}`}
                      >
                        {transaction.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-4">
              <Link href="/transactions" className="text-xs text-gray-600 hover:text-gray-900">
                GO TO TRANSACTIONS
              </Link>
            </div>
          </CardContent>
        </Card>
        
      </div>
    </ScrollArea>
  )
}
