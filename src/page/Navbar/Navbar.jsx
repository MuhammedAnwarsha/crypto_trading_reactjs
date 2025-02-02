import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  return (
    <div className="px-1 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex gap-2 justify-between items-center shadow-lg">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2022/12/26/11/37/crypto-7678815_1280.jpg" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Crypto</span>
                    <span>Trade</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>

        <p
          onClick={() => navigate("/")}
          className="text-sm font-bold lg:text-base cursor-pointer"
        >
          CRYPTO TRADING
        </p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex justify-start gap-3 w-60">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div className="shadow-md p-2">
        {/* <Avatar>
          <AvatarFallback>{auth.user?.fullName[0].toUpperCase()}</AvatarFallback>
        </Avatar> */}
        <h3 className="font-bold">{auth.user?.fullName.substring(0, 5)}</h3>
      </div>
    </div>
  );
};

export default Navbar;
