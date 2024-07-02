import React from "react";
import "./Auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SigningForm from "./SigningForm";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen relative authContainer">
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-[#030712] bg-opacity-30">
        <div className="bgBlur absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[32rem] w-[28rem] rounded-md z-50 bg-white bg-opacity-60 shadow-2xl shadow-black">
          <div className="text-6xl font-bold pb-9">
            <span className="text-orange-600">Crypto</span>
            <span>Trading</span>
          </div>

          {location.pathname == "/signup" ? (
            <section className="w-full">
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>already have an account ?</span>
                <Button onClick={() => navigate("/signing")} variant="link">
                  login here
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section className="w-full">
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <span>back to login ?</span>
                <Button onClick={() => navigate("/signing")} variant="link">
                  login here
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-full">
              <SigningForm />
              <div className="flex items-center justify-center">
                <span>don't have an account ?</span>
                <Button onClick={() => navigate("/signup")} variant="link">
                  create account
                </Button>
              </div>

              <div className="flex items-center justify-center flex-wrap">
                <Button
                  className="py-5"
                  onClick={() => navigate("/forgot-password")}
                  variant="link"
                >
                  Forgot Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
