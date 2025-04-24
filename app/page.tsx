//import TransactionsPage from "@/components/ui/TransactionsPage";
import DashboardHome from "@/components/ui/DashboardHome";
//import BankPositions from "@/components/ui/BankPositions";
//import DocumentsPage from "@/components/ui/DocumentsPage";
//import SupportPage from "@/components/ui/SupportPage";
import Sidebar from "@/components/ui/Sidebar";
import Header from "@/components/ui/Header";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#1a2233] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <DashboardHome />
        {/*<TransactionsPage />
        <BankPositions /> 
        <DocumentsPage />
        <SupportPage />*/}
      </div>
    </div>
  );
}
