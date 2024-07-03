import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PersonIcon } from "@radix-ui/react-icons";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSelector } from "react-redux";

const Profile = () => {

  const {auth} = useSelector(store=>store);

  const handleEnableTwoStepVerification = () => {
    console.log("two step verification")
  }

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle className="text-center flex items-center justify-center gap-2 text-xl">
              <PersonIcon className="w-5 h-5 font-bold" />
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-20">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[6rem]">Email</p>
                  <p className="text-gray-500">: {auth.user?.email}</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">Full Name</p>
                  <p className="text-gray-500">: {auth.user?.fullName}</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">Date of Birth</p>
                  <p className="text-gray-500">: 27/04/2002</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">Nationality</p>
                  <p className="text-gray-500">: Indian</p>
                </div>
              </div>

              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[6rem]">Address</p>
                  <p className="text-gray-500">: Mavarthala,Chekkakonam</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">City</p>
                  <p className="text-gray-500">: Trivandrum</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">Postcode</p>
                  <p className="text-gray-500">: 695564</p>
                </div>

                <div className="flex">
                  <p className="w-[6rem]">Country</p>
                  <p className="text-gray-500">: India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className={"space-x-2 text-white bg-green-600"}>
                    <VerifiedIcon />
                    <span>Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disabled</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enable Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify your account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
