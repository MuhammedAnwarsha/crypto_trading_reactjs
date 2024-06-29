import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DashboardIcon } from "@radix-ui/react-icons";

const Portfolio = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex gap-2">
        <DashboardIcon className="h-10 w-7" />
        <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ASSET</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>UNIT</TableHead>
            <TableHead>CHANGE</TableHead>
            <TableHead>CHANGE(%)</TableHead>
            <TableHead className="text-right">VALUE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>9976446621</TableCell>
              <TableCell>1345872490781</TableCell>
              <TableCell>-0.20009</TableCell>
              <TableCell className="text-right">$69249</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
