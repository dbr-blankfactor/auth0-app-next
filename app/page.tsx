"use client";

//import TransactionsPage from "@/components/ui/TransactionsPage";
import DashboardHome from "@/components/ui/DashboardHome";
//import BankPositions from "@/components/ui/BankPositions";
//import DocumentsPage from "@/components/ui/DocumentsPage";
//import SupportPage from "@/components/ui/SupportPage";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

import { useUser } from "@auth0/nextjs-auth0";

export default function Dashboard() {
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
        <>
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <DashboardHome />
            {/*<TransactionsPage />
            <BankPositions /> 
            <DocumentsPage />
            <SupportPage />*/}
          </div>
        </>
      )}
    </div>
  );
}
