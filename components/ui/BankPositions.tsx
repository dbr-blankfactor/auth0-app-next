import { ScrollArea } from "./scroll-area";
import TransactionsTable from "./TransactionsTable";

export default function BankPositions() {
  return (
    <ScrollArea className="flex-1">
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Bank Positions</h1>
          </div>
        </div>
        <div>
          All my bank positions as of 1/24/2025
          <TransactionsTable />
        </div>
      </main>
    </ScrollArea>
  );
}
