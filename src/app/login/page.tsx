import React from "react";
import Image from "next/image";
import AuthImg from "@/public/Abstract Curves and Colors.jpg";
import Logo from "@/components/Logo";
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
              Mirage AI is a game changer for me. I have been able to generate
              high quality professional headshots within minutes. It has saved
              me countless hours of work and cost as well.
            </p>
            <footer className="text-sm">Bhonduu</footer>
          </blockquote>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default page;
