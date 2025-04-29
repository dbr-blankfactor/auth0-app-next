'use client';

import { ChevronLeft, ChevronRight, Eye, Download } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function DocumentsPage() {
  const statements = [
    { month: "April 2023", year: "2023" },
    { month: "March 2023", year: "2023" },
    { month: "February 2023", year: "2023" },
    { month: "January 2023", year: "2023" },
    { month: "December 2022", year: "2022" },
    { month: "November 2022", year: "2022" },
    { month: "October 2022", year: "2022" },
    { month: "September 2022", year: "2022" },
    { month: "August 2022", year: "2022" },
    { month: "July 2022", year: "2022" },
    { month: "June 2022", year: "2022" },
    { month: "May 2022", year: "2022" },
    { month: "April 2022", year: "2022" },
    { month: "March 2022", year: "2022" },
    { month: "February 2022", year: "2022" },
    { month: "January 2022", year: "2022" },
  ];

  // Datos de ejemplo para declaraciones de impuestos
  const taxStatements = [
    { yearEnd: "December 31, 2022" },
    { yearEnd: "December 31, 2021" },
    { yearEnd: "December 31, 2020" },
    { yearEnd: "December 31, 2019" },
    { yearEnd: "December 31, 2018" },
    { yearEnd: "December 31, 2017" },
  ];

  // Datos de ejemplo para otros documentos
  const otherDocuments = [
    { item: "Account Agreement", dateAdded: "January 15, 2023" },
    { item: "Privacy Policy", dateAdded: "January 15, 2023" },
    { item: "Terms of Service", dateAdded: "January 15, 2023" },
    { item: "Fee Schedule", dateAdded: "January 15, 2023" },
    { item: "Account Application", dateAdded: "January 15, 2023" },
    { item: "Identity Verification", dateAdded: "January 15, 2023" },
  ];

  return (
    <ScrollArea className="flex-1">
      <div className="bg-[#e5e7eb] min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6 text-black">Documents</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Statements Section */}
            <div className="bg-white rounded-md shadow p-4">
              <h2 className="text-lg font-medium mb-4 text-black">
                Statements
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-black">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-medium">Month</th>
                      <th className="text-left py-2 px-4 font-medium">Year</th>
                      <th className="text-center py-2 px-4 font-medium">
                        View
                      </th>
                      <th className="text-center py-2 px-4 font-medium">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {statements.map((statement, index) => (
                      <tr
                        key={index}
                        className="border-b bg-[#f3f4f6] hover:bg-[#e5e7eb]"
                      >
                        <td className="py-2 px-4">{statement.month}</td>
                        <td className="py-2 px-4">{statement.year}</td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 text-black">
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span>Page 1</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm">SHOW 16 ITEMS</div>
              </div>
            </div>

            {/* Tax Statement Section */}
            <div className="bg-white rounded-md shadow p-4">
              <h2 className="text-lg font-medium mb-4 text-black">
                Tax Statement
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-black">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-medium">
                        Year End
                      </th>
                      <th className="text-center py-2 px-4 font-medium">
                        View
                      </th>
                      <th className="text-center py-2 px-4 font-medium">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {taxStatements.map((statement, index) => (
                      <tr
                        key={index}
                        className="border-b bg-[#f3f4f6] hover:bg-[#e5e7eb]"
                      >
                        <td className="py-2 px-4">{statement.yearEnd}</td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 text-black">
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span>Page 1</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm">SHOW 6 ITEMS</div>
              </div>
            </div>

            {/* Other Account Documents Section */}
            <div className="bg-white rounded-md shadow p-4 lg:col-span-2">
              <h2 className="text-lg font-medium mb-4 text-black">
                Other Account Documents
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-black">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-medium">Item</th>
                      <th className="text-left py-2 px-4 font-medium">
                        Date Added
                      </th>
                      <th className="text-center py-2 px-4 font-medium">
                        View
                      </th>
                      <th className="text-center py-2 px-4 font-medium">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {otherDocuments.map((doc, index) => (
                      <tr
                        key={index}
                        className="border-b bg-[#f3f4f6] hover:bg-[#e5e7eb]"
                      >
                        <td className="py-2 px-4">{doc.item}</td>
                        <td className="py-2 px-4">{doc.dateAdded}</td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </td>
                        <td className="py-2 px-4 text-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 bg-[#4b5563] text-white rounded"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 text-black">
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span>Page 1</span>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm">SHOW 6 ITEMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
