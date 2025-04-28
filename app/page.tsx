"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div className="flex h-screen bg-[#1a2233] text-white">
      {!user ? (
        <div className="h-screen w-full flex justify-center items-center">
          <Button>
            <a href="/auth/login">Login</a>{" "}
          </Button>
        </div>
      ) : (
        <>{redirect("/home")}</>
      )}{" "}
    </div>
  );
}
