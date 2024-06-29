import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCardIcon } from "lucide-react";

const Withdrawal = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex gap-2">
        <CreditCardIcon className="h-11 w-8" />
        <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>June 29, 2024 at 11:43</TableCell>
              <TableCell>Bank account</TableCell>
              <TableCell>$69249</TableCell>
              <TableCell className="text-right text-green-500">
                success
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
