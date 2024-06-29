import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

const TopupForm = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("RAZORPAY");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };
  const handleSubmit = (e) => {
    console.log(amount, paymentMethod);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">enter amount</h1>
        <Input
          onChange={handleChange}
          type="number"
          value={amount}
          className="py-7 text-lg"
          placeholder="$9999"
        />
      </div>
      <div>
        <h1 className="pb-1">select payment method</h1>
        <RadioGroup
          onValueChange={(value) => handlePaymentMethodChange(value)}
          className="flex"
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-0 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="RAZORPAY"
              id="r1"
            />
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-1 w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Razorpay_logo.png/1200px-Razorpay_logo.png?20201121143022"
                  alt="Razorpay Logo"
                />
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 border p-0 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-9 w-9"
              value="STRIPE"
              id="r2"
            />
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-5 py-1 w-32">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/768px-Stripe_Logo%2C_revised_2016.svg.png"
                  alt="Stripe Logo"
                />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          SUBMIT
        </Button>
      </DialogClose>
    </div>
  );
};

export default TopupForm;
