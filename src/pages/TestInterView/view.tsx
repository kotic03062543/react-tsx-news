import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "./TestPBoos";
import { useState } from "react";
import { AddProductOutline } from "@axio/icons";
import { CheckCircleOutline } from "@axio/icons";
import {
  Button,
  Dialog,
  DialogCloseButton,
  DialogTitle,
  DialogTrigger,
} from "@axio/ui";

interface Transaction {
  id: string;
  hash: string;
  from: string;
  to: string;
  amount: string;
  currency: string;
  status: string;
  timestamp: number;
  gasUsed: string;
  gasPrice: string;
  blockNumber: number | null;
  confirmations: number;
}

interface ApiResponse {
  transactions: Transaction[];
  totalCount: number;
  summary: {
    pending: number;
    confirmed: number;
    failed: number;
    totalValue: string;
    avgGasPrice: string;
  };
}

function TestUi() {
  const { isLoading, data, refetch } = useQuery<ApiResponse>({
    queryKey: ["mockapi"],
    queryFn: async () => {
      const response = await fetchTransactions();
      console.log("API Response:", response as ApiResponse);
      return response as ApiResponse;
    },
    refetchOnWindowFocus: false,
  });
  const [filter, setFilter] = useState("all");

  let filteredTxs: Transaction[] = [];

  if (data) {
    if (filter === "all") {
      filteredTxs = data.transactions;
    } else {
      filteredTxs = data.transactions.filter((tx) => tx.status === filter);
    }
  }

  const filterTabs = [
    { label: "ALL", key: "all", count: data?.totalCount },
    { label: "PENDING", key: "pending", count: data?.summary.pending },
    { label: "CONFIRMED", key: "confirmed", count: data?.summary.confirmed },
    { label: "FAILED", key: "failed", count: data?.summary.failed },
  ];

  return (
    <div>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-xl font-bold text-center mb-4">
          TRANSACTION MONITOR
        </h1>
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, index) => (
              <TransactionSkeleton key={index} />
            ))}
          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 justify-start mb-4">
              {filterTabs.map(({ label, key, count }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 border rounded ${
                    filter === key
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {label} ({count})
                </button>
              ))}
              <button
                onClick={() => refetch()}
                className="ml-2 px-4 py-2 border rounded"
              >
                REFRESH
              </button>
              <AlertComponent />
            </div>
            <div className="space-y-4">
              {(filteredTxs ?? []).map((tx) => (
                <div
                  key={tx.id}
                  className="border rounded p-4 shadow-sm bg-white"
                >
                  <div className="flex justify-between items-center">
                    <span className="uppercase text-sm text-gray-500">
                      {tx.status}
                    </span>
                    <span className="font-bold text-lg">
                      {tx.amount} {tx.currency}
                    </span>
                  </div>
                  <div className="text-sm mt-2">
                    <div className="flex justify-between">
                      <span>ID:</span> <span>{tx.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span> <span>{timeAgo(tx.timestamp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hash:</span> <span>{formatAddress(tx.hash)}</span>
                    </div>
                    <div className="p-2 bg-gray-100 rounded my-2 border-l-3 border-l-gray-500">
                      <div className="flex justify-between">
                        <span>From:</span> <span>{formatAddress(tx.from)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>To:</span> <span>{formatAddress(tx.to)}</span>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span>Gas:</span> <span>{formatComma(tx.gasUsed)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TestUi;

function formatAddress(address: string) {
  return address.slice(0, 6) + "..." + address.slice(-4);
}

function timeAgo(timestamp: number) {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 60000);
  return `${diff} min ago`;
}

function formatComma(value: string | number) {
  return Number(value).toLocaleString();
}

function TransactionSkeleton() {
  return (
    <div className="rounded p-4 shadow-sm bg-white animate-pulse mb-5">
      <div className="flex justify-between items-center mb-2">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-6 bg-gray-300 rounded w-24"></div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>

        <div className="p-2 bg-gray-100 rounded border-l-4 border-gray-300 space-y-2">
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="flex justify-between">
            <div className="h-4 bg-gray-200 rounded w-16"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}

function AlertComponent() {
  return (
    <DialogTrigger>
      <Button>Update profile</Button>
      <Dialog className="gap-lv9 flex w-100 max-w-[calc(100vw-var(--spacing)*2*4)] flex-col items-center">
        <div className="gap-lv4 flex flex-col items-center">
          <CheckCircleOutline className="size-lv18 text-success-base" />
          <DialogTitle>Profile updated successfully</DialogTitle>
          <p>Your profile changes have been saved.</p>
        </div>
        <DialogCloseButton className="w-full">Close</DialogCloseButton>
      </Dialog>
    </DialogTrigger>
  );
}
