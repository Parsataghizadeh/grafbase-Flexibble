import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;

  return (
    <>
      <nav className="flex justify-between items-center py-5 px-8 border-b border-nav-border gap-4">
        <div className="flex-1 flex items-center justify-start gap-10">
          <Link href={"/"}>
            <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
          </Link>
          <ul className="xl:flex hidden text-sm font-medium gap-7">
            {NavLinks.map(link => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4">
          {session ? (
            <>
              UserProfile
              <Link href="/create-project">Share Work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
