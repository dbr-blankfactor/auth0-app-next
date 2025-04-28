import { ScrollArea } from "@radix-ui/react-scroll-area";
import TransactionsTable from "./TransactionsTable";

export default function TransactionsPage() {
  return (
    <ScrollArea className="flex-1">
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Transactions</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          <div>
            Transaction History
            <TransactionsTable />
          </div>

          <div>
            Transactions for Approval
            <TransactionsTable />
          </div>
        </div>
      </main>
    </ScrollArea>
  );
}
