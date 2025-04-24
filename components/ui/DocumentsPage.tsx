import { ScrollArea } from "@radix-ui/react-scroll-area";
import TransactionsTable from "./TransactionsTable";

export default function DocumentsPage() {
  return (
    <ScrollArea className="flex-1">
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Documents</h1>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          <div>
            Statements
            <TransactionsTable />
          </div>

          <div>
            Tax Statement
            <TransactionsTable />
          </div>
        </div>
      </main>
    </ScrollArea>
  );
}
