import { Avatar, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActivityLogIcon } from "@radix-ui/react-icons";

const Activity = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex gap-2">
        <ActivityLogIcon className="h-10 w-7" />
        <h1 className="font-bold text-3xl pb-5">Trading History</h1>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="py-5">Date & Time</TableHead>
            <TableHead>Trading Pair</TableHead>
            <TableHead>Buy Price</TableHead>
            <TableHead>Selling Price</TableHead>
            <TableHead>Order Type</TableHead>
            <TableHead>Profit/Loss</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <p>2024/06/29</p>
                <p className="text-gray-500">12:39:32</p>
              </TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>9976446621</TableCell>
              <TableCell>1345872490781</TableCell>
              <TableCell>-0.20009</TableCell>
              <TableCell>$69249</TableCell>
              <TableCell className="text-right">$69249</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Activity;
