import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [isBotRelease, setIsBotRelease] = useState(false);

  const handleBotRelease = () => {
    setIsBotRelease(!isBotRelease);
  };

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      console.log(inputValue);
    }
    setInputValue("");
  };

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r w-full">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full"
            >
              Top 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category == "topGainers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full"
            >
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_1280.png" />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">$69249</p>
                <p className="text-red-600">
                  <span>-1312467819.576</span>
                  <span>(-0.29803%)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="fixed bottom-5 right-2 z-40 flex flex-col justify-end items-end gap-2">
        {isBotRelease && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-200">
            <div className="flex justify-between items-center px-6 h-[12%] border-b border-white">
              <p>Chat Bot</p>
              <Button onClick={handleBotRelease} variant="ghost" size="icon">
                <Cross1Icon />
              </Button>
            </div>
            <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
              <div className="self-start pb-5 w-auto">
                <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-100 w-auto">
                  <p>Hi, Anwar</p>
                  <p>you can ask crypto related any question</p>
                  <p>like, price, market cap etc.</p>
                </div>
              </div>

              {[1, 1, 1, 1, 1].map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 == 0 ? "self-start" : "self-end"
                  } "pb-5 w-auto"`}
                >
                  {i % 2 == 0 ? (
                    <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-100 w-auto">
                      <p>prompt</p>
                    </div>
                  ) : (
                    <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-100 w-auto">
                      <p>answer</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="h-[12%] border-t">
              <Input
                className="w-full h-full border-none outline-none shadow-md"
                placeholder="write prompt..."
                onChange={handleChange}
                value={inputValue}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        )}

        <div className="relative w-auto cursor-pointer group">
          <Button
            onClick={handleBotRelease}
            variant="outline"
            className="h-[3rem] gap-2 items-center"
          >
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none"
            />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
