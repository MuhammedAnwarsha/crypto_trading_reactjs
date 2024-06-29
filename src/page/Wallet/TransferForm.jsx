import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const TransferForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    walletId: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">enter amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-7"
          type="number"
          placeholder="$9999"
        />
      </div>

      <div>
        <h1 className="pb-1">wallet id</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-7"
          placeholder="#ADER455"
        />
      </div>

      <div>
        <h1 className="pb-1">purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-7"
          placeholder="message here..."
        />
      </div>

      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7">
          TRANSFER
        </Button>
      </DialogClose>
    </div>
  );
};

export default TransferForm;
