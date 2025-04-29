"use client";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="h-16 border-b border-[#2a3548] flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <div className="text-white">
          Viewing Account: <span className="font-medium">#****8871</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#1f2937] text-white"
            >
              <span className="sr-only">User profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
