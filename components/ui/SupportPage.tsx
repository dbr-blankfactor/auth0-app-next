"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SupportPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, message });
  };

  const handleClear = () => {
    setName("");
    setMessage("");
  };

  return (
    <ScrollArea className="flex-1">
      <main className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Support</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulario de Contacto */}
          <Card className="bg-[#f5f5f5] border-none shadow-none text-black">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] items-center">
                  <span className="font-medium">Call Us:</span>
                  <span>888 900 1010</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] items-center">
                  <span className="font-medium">Email Us:</span>
                  <a
                    href="mailto:helpme@indxisgreat.com"
                    className="text-blue-600 hover:underline"
                  >
                    helpme@indxisgreat.com
                  </a>
                </div>

                <form onSubmit={handleSubmit} className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1">
                        Send us a request:
                      </label>
                    </div>
                    <div>
                      <label htmlFor="name" className="block font-medium mb-1">
                        Your Name:
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#c0c0c0] border-none h-10"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-medium mb-1"
                      >
                        Message:
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-md bg-[#c0c0c0] border-none p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#5e81ff]"
                      ></textarea>
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button
                        type="button"
                        onClick={handleClear}
                        className="bg-[#333] hover:bg-[#444] text-white"
                      >
                        Clear
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[#333] hover:bg-[#444] text-white"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="text-xs text-gray-500 mt-4">
                  Do not send money tx or PII disclaimer. Do not send money tx
                  or PII disclaimer. Do not send money tx or PII disclaimer. Do
                  not send money tx or PII disclaimer.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQs */}
          <Card className="bg-[#f5f5f5] border-none shadow-none text-black">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">FAQs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#c0c0c0] p-3 rounded">
                  <h3 className="font-medium">How do I reset my password?</h3>
                  <p className="text-sm mt-1">
                    You can reset your password by clicking on &quot;Forgot Password&quot;
                    on the login page.
                  </p>
                </div>
                <div className="bg-[#c0c0c0] p-3 rounded">
                  <h3 className="font-medium">
                    How do I link a new bank account?
                  </h3>
                  <p className="text-sm mt-1">
                    Go to the Positions page and click on &quot;Add New Account&quot; to
                    link a new bank account.
                  </p>
                </div>
                <div className="bg-[#c0c0c0] p-3 rounded">
                  <h3 className="font-medium">
                    When are statements available?
                  </h3>
                  <p className="text-sm mt-1">
                    Statements are typically available by the 5th business day
                    of each month.
                  </p>
                </div>
                <div className="bg-[#c0c0c0] p-3 rounded">
                  <h3 className="font-medium">
                    How do I update my contact information?
                  </h3>
                  <p className="text-sm mt-1">
                    You can update your contact information in the Profile
                    section of your account settings.
                  </p>
                </div>
                <div className="bg-[#c0c0c0] p-3 rounded">
                  <h3 className="font-medium">What are the trading hours?</h3>
                  <p className="text-sm mt-1">
                    Regular trading hours are from 9:30 AM to 4:00 PM Eastern
                    Time, Monday through Friday.
                  </p>
                </div>
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    className="text-blue-600 p-0 h-auto flex items-center"
                  >
                    View all FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </ScrollArea>
  );
}
