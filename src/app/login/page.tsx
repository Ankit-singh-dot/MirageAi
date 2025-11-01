import React from "react";
import Image from "next/image";
import AuthImg from "@/public/Abstract Curves and Colors.jpg";
import Logo from "@/components/Logo";
import AuthForm from "@/components/authentication/AuthForm";
const page = () => {
  return (
    <div className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col text-foreground bg-[#F7F7F7]">
        <div className="w-full h-[50%] bg-gradient-to-t from-transparent to-black/30 absolute top-0 left-0 z-10"></div>
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/30 absolute bottom-0 left-0 z-10"></div>

        <Image
          src={AuthImg}
          alt="login Image"
          fill
          className="object-contain z-0"
        />

        <div className="absolute top-4 left-4 z-10 flex items-center">
          <Logo />
        </div>

        <div className="relative z-20 mt-auto mb-7 px-6">
          <blockquote className="space-y-2">
            <p className="text-lg">
              I asked Mirage AI for a professional headshot. It made me look
              like I actually get 8 hours of sleep and drink water. Unreal
              technology.
            </p>
            <footer className="text-sm">Bhonduu</footer>
          </blockquote>
        </div>
      </div>

      <div className="items-center flex relative flex-col justify-center  h-full w-[350px] mx-auto">
        <div className="max-w-xl w-[350px] mx-auto">
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default page;
