"use client";

import { signOut } from "next-auth/react";

export default function Logout({ children }: { children: React.ReactNode }) {
  return (
    <span
      onClick={() => {
        signOut({ redirect: true, callbackUrl: "/" });
        console.log("logout");
      }}
    >
      {children}
    </span>
  );
}
