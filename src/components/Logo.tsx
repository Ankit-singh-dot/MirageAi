
import React from "react";
import Link from "next/link";
import { Sparkle } from "lucide-react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 ">
      <Sparkle className="size-8 text-[#0B1017]" strokeWidth={1.5} />
      <span className="text-lg font-semibold text-[#0B1017]">MirageAi</span>
    </Link>
  );
};

export default Logo;
