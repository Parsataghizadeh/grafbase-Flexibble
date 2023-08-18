"use client";

import React from "react";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { Provider } from "@/common.types";

type Btn = {
  BtnName: string;
};

const Button = ({ BtnName }: Btn) => {
  return (
    <div
      onClick={() => signIn("github")}
      className="text-normal border-2 p-2 rounded-md text-slate-50 bg-signinbtn border-signinbtn cursor-pointer"
    >
      {BtnName}
    </div>
  );
};

export default Button;
