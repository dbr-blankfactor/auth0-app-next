"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TransactionsPage() {
  // Estado para el monto de retiro
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  // Calcular el nuevo saldo disponible
  const totalCurrentBalance = 1990100.44;
  const pendingTransactions = 100000.0;
  const availableBalance = totalCurrentBalance - pendingTransactions;

  // Calcular nuevo saldo disponible basado en el monto de retiro
  const withdrawalAmountNum = Number.parseFloat(withdrawalAmount) || 0;
  const newAvailableBalance = availableBalance - withdrawalAmountNum;

  // Formatear números como moneda
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Datos de ejemplo para el historial de transacciones
  const transactionHistory = [
    {
      time: "2023-04-23 14:30",
      id: "TX123456",
      type: "Deposit",
      status: "Completed",
      amount: "$2,500.00",
    },
    {
      time: "2023-04-21 10:15",
      id: "TX123457",
      type: "Withdrawal",
      status: "Completed",
      amount: "$1,200.00",
    },
    {
      time: "2023-04-20 09:45",
      id: "TX123458",
      type: "Purchase",
      status: "Completed",
      amount: "$3,450.75",
    },
    {
      time: "2023-04-18 16:20",
      id: "TX123459",
      type: "Dividend",
      status: "Completed",
      amount: "$125.50",
    },
    {
      time: "2023-04-15 11:30",
      id: "TX123460",
      type: "Transfer",
      status: "Pending",
      amount: "$5,000.00",
    },
    {
      time: "2023-04-12 13:45",
      id: "TX123461",
      type: "Deposit",
      status: "Completed",
      amount: "$1,750.00",
    },
    {
      time: "2023-04-10 09:15",
      id: "TX123462",
      type: "Withdrawal",
      status: "Completed",
      amount: "$800.00",
    },
    {
      time: "2023-04-08 14:50",
      id: "TX123463",
      type: "Purchase",
      status: "Completed",
      amount: "$2,345.67",
    },
    {
      time: "2023-04-05 10:30",
      id: "TX123464",
      type: "Dividend",
      status: "Completed",
      amount: "$78.90",
    },
    {
      time: "2023-04-03 15:20",
      id: "TX123465",
      type: "Transfer",
      status: "Completed",
      amount: "$3,500.00",
    },
    {
      time: "2023-04-01 12:10",
      id: "TX123466",
      type: "Deposit",
      status: "Completed",
      amount: "$4,200.00",
    },
    {
      time: "2023-03-28 09:45",
      id: "TX123467",
      type: "Withdrawal",
      status: "Completed",
      amount: "$1,500.00",
    },
    {
      time: "2023-03-25 16:30",
      id: "TX123468",
      type: "Purchase",
      status: "Completed",
      amount: "$678.90",
    },
    {
      time: "2023-03-22 11:15",
      id: "TX123469",
      type: "Dividend",
      status: "Completed",
      amount: "$45.67",
    },
    {
      time: "2023-03-20 14:40",
      id: "TX123470",
      type: "Transfer",
      status: "Completed",
      amount: "$2,100.00",
    },
    {
      time: "2023-03-18 10:20",
      id: "TX123471",
      type: "Deposit",
      status: "Completed",
      amount: "$3,200.00",
    },
  ];

  // Datos de ejemplo para transacciones pendientes de aprobación
  const pendingApprovalTransactions = [
    {
      time: "2023-04-24 09:15",
      id: "TX123472",
      type: "Wire Transfer",
      amount: "$10,000.00",
    },
  ];

  return (
    <ScrollArea className="flex-1">
      <div className="bg-[#e5e7eb] min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-black">Transactions</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Transaction History Section */}
            <div className="bg-[#f3f4f6] rounded-md shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-black">
                  Transaction History
                </h2>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    className="bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center"
                  >
                    <FileDown className="h-4 w-4 mr-2" />
                    EXPORT CSV
                  </Button>
                  <Button
                    variant="ghost"
                    className="bg-white text-black border border-gray-300 hover:bg-gray-100 flex items-center"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    FILTER
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-black">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-4 font-medium">Time</th>
                      <th className="text-left py-2 px-4 font-medium">ID</th>
                      <th className="text-left py-2 px-4 font-medium">Type</th>
                      <th className="text-left py-2 px-4 font-medium">
                        Status
                      </th>
                      <th className="text-right py-2 px-4 font-medium">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactionHistory.map((transaction, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-300 bg-[#d1d5db] hover:bg-[#c7ccd4]"
                      >
                        <td className="py-3 px-4">{transaction.time}</td>
                        <td className="py-3 px-4">{transaction.id}</td>
                        <td className="py-3 px-4">{transaction.type}</td>
                        <td className="py-3 px-4">{transaction.status}</td>
                        <td className="py-3 px-4 text-right">
                          {transaction.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-4 text-black">
                <div className="flex-1"></div>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span>Page 1</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 text-right text-sm">SHOW 16 ITEMS</div>
              </div>
            </div>

            {/* Right Column - Transactions for Approval and Withdrawal Request */}
            <div className="space-y-6">
              {/* Transactions for Approval Section */}
              <div className="bg-[#f3f4f6] rounded-md shadow p-4">
                <h2 className="text-lg font-medium mb-4 text-black">
                  Transactions for Approval
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-black">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-4 font-medium">
                          Time
                        </th>
                        <th className="text-left py-2 px-4 font-medium">ID</th>
                        <th className="text-left py-2 px-4 font-medium">
                          Type
                        </th>
                        <th className="text-right py-2 px-4 font-medium">
                          Amount
                        </th>
                        <th className="text-center py-2 px-4 font-medium">
                          Approve
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingApprovalTransactions.map((transaction, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-300 bg-[#d1d5db] hover:bg-[#c7ccd4]"
                        >
                          <td className="py-3 px-4">{transaction.time}</td>
                          <td className="py-3 px-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 p-1 bg-[#4b5563] text-white rounded"
                            >
                              Modal Pop
                            </Button>
                          </td>
                          <td className="py-3 px-4">{transaction.type}</td>
                          <td className="py-3 px-4 text-right">
                            {transaction.amount}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 p-1 bg-[#4b5563] text-white rounded"
                            >
                              Click to App
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Withdrawal Request Section */}
              <div className="bg-[#f3f4f6] rounded-md shadow p-4">
                <h2 className="text-lg font-medium mb-4 text-black">
                  Withdrawal Request
                </h2>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-black">Total Current Balance</div>
                    <div className="text-black font-medium text-right">
                      {formatCurrency(totalCurrentBalance)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-black">Pending Transactions</div>
                    <div className="text-black font-medium text-right text-red-600">
                      -{formatCurrency(pendingTransactions)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-2">
                    <div className="text-black">Available Balance</div>
                    <div className="text-black font-medium text-right">
                      {formatCurrency(availableBalance)}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-black">Withdrawal Amount</div>
                    <div>
                      <Input
                        type="text"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        className="bg-[#4b5563] text-white border-none h-8 text-right"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-2">
                    <div className="text-black">New Available Balance</div>
                    <div className="text-black font-medium text-right">
                      {withdrawalAmount
                        ? formatCurrency(newAvailableBalance)
                        : "$X,XXX,XXX.XX"}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button
                      variant="ghost"
                      className="bg-[#4b5563] text-white hover:bg-[#374151]"
                    >
                      Cancel Req
                    </Button>
                    <Button
                      variant="ghost"
                      className="bg-[#4b5563] text-white hover:bg-[#374151]"
                    >
                      Submit Req
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
