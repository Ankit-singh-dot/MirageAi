"use client";
import { space } from "postcss/lib/list";
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Button } from "../ui/button";
import SignUp from "./SignupForm";
const AuthForm = () => {
  const [mode, setMode] = useState("login");
  return (
    <div className="space-y-4">
      {/* space-y-6 make like -axis me sabko 6 margin dega sare child component  */}
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight ">
          {mode === "reset"
            ? "Reset Password"
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </h1>

        <p className="text-sm text-muted-foreground">
          {mode === "reset"
            ? "Enter your email below to reset your Password"
            : mode === "login"
            ? "Enter your email below to login to your account "
            : "Get started with your professional AI headshots "}
        </p>
      </div>
      {mode === "login" && (
        <>
          <LoginForm />
          <div className="text-center justify-between flex">
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("signup")}
            >
              Need an account? signup
            </Button>
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("reset")}
            >
              Forgot password ?
            </Button>
          </div>
        </>
      )}
      {mode === "signup" && (
        <>
          <SignUp />
          <div className="text-center ">
            <Button
              variant={"link"}
              className="p-0"
              onClick={() => setMode("login")}
              
            >
              Already have account ? Log up
            </Button>
          </div>
        </>
      )}
      {mode === "reset" && <span>ResetForm</span>}
    </div>
  );
};

export default AuthForm;
