'use client';

import { ChevronLeft, ChevronRight, FileDown, Filter } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function BankPositions() {
  const bankPositions = [
    {
      bankName: "Bank of America",
      id: "BOA12345",
      city: "New York",
      state: "NY",
      amount: "$12,345.67",
    },
    {
      bankName: "Chase",
      id: "CHASE6789",
      city: "Chicago",
      state: "IL",
      amount: "$45,678.90",
    },
    {
      bankName: "Wells Fargo",
      id: "WF98765",
      city: "San Francisco",
      state: "CA",
      amount: "$98,765.43",
    },
    {
      bankName: "Citibank",
      id: "CITI4321",
      city: "Miami",
      state: "FL",
      amount: "$23,456.78",
    },
    {
      bankName: "TD Bank",
      id: "TD56789",
      city: "Boston",
      state: "MA",
      amount: "$34,567.89",
    },
    {
      bankName: "PNC Bank",
      id: "PNC7890",
      city: "Pittsburgh",
      state: "PA",
      amount: "$67,890.12",
    },
    {
      bankName: "US Bank",
      id: "USB1234",
      city: "Minneapolis",
      state: "MN",
      amount: "$12,345.67",
    },
    {
      bankName: "Capital One",
      id: "CAP5678",
      city: "Richmond",
      state: "VA",
      amount: "$56,789.01",
    },
    {
      bankName: "Truist",
      id: "TRU9012",
      city: "Charlotte",
      state: "NC",
      amount: "$90,123.45",
    },
    {
      bankName: "Fifth Third Bank",
      id: "FTB3456",
      city: "Cincinnati",
      state: "OH",
      amount: "$34,567.89",
    },
    {
      bankName: "KeyBank",
      id: "KEY7890",
      city: "Cleveland",
      state: "OH",
      amount: "$78,901.23",
    },
    {
      bankName: "Regions Bank",
      id: "REG1234",
      city: "Birmingham",
      state: "AL",
      amount: "$12,345.67",
    },
    {
      bankName: "M&T Bank",
      id: "MT5678",
      city: "Buffalo",
      state: "NY",
      amount: "$56,789.01",
    },
    {
      bankName: "Citizens Bank",
      id: "CIT9012",
      city: "Providence",
      state: "RI",
      amount: "$90,123.45",
    },
    {
      bankName: "BMO Harris",
      id: "BMO3456",
      city: "Chicago",
      state: "IL",
      amount: "$34,567.89",
    },
    {
      bankName: "Huntington",
      id: "HUN7890",
      city: "Columbus",
      state: "OH",
      amount: "$78,901.23",
    },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <ScrollArea className="flex-1">
      <div className="bg-[#e5e7eb] min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-black">Bank Positions</h1>

          <div className="bg-[#f3f4f6] rounded-md shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-black">
                All My Bank Positions as of {currentDate}
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
                    <th className="text-left py-2 px-4 font-medium">
                      Bank Name
                    </th>
                    <th className="text-left py-2 px-4 font-medium">ID</th>
                    <th className="text-left py-2 px-4 font-medium">City</th>
                    <th className="text-left py-2 px-4 font-medium">State</th>
                    <th className="text-right py-2 px-4 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bankPositions.map((position, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-300 bg-[#d1d5db] hover:bg-[#c7ccd4]"
                    >
                      <td className="py-3 px-4">{position.bankName}</td>
                      <td className="py-3 px-4">{position.id}</td>
                      <td className="py-3 px-4">{position.city}</td>
                      <td className="py-3 px-4">{position.state}</td>
                      <td className="py-3 px-4 text-right">
                        {position.amount}
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
        </div>
      </div>
    </ScrollArea>
  );
}
