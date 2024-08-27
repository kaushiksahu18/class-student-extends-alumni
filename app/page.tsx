"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [s, setS] = useState("");
  useEffect(() => {
    try {
      setS(JSON.stringify(session?.user));
    } catch (error) {
      console.log(error);
      setS("error");
    }
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <p>{s}</p>
      <br></br>
      <Link
        href="/pat"
        className="rounded-lg bg-zinc-600 px-4 py-2 text-white hover:bg-zinc-700"
      >
        Pat Page
      </Link>
      {session && <button
        onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
        className="rounded-lg bg-zinc-600 px-4 py-2 text-white hover:bg-zinc-700"
      >
        Logout
      </button>}
    </main>
  );
}
