import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import { GraduationCapIcon, LightbulbIcon, NetworkIcon, RocketIcon } from "@/components/SVGs";

export default function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-14 items-center px-2 md:px-4 lg:px-6">
        <Link
          href="/"
          className="relative flex items-center justify-center gap-2"
          prefetch={false}
        >
          <GraduationCapIcon className="h-6 w-6" />
          <span className="">Mentor Connect</span>
        </Link>
        <nav className="ml-auto flex gap-1 md:gap-4">
          {["About", "Features", "Contact"].map((item, index) => (
            <Link
              key={index}
              // href={`/${item.toLowerCase()}`}
              href={`#`}
              className="rounded-md px-1 md:px-2 py-1 text-sm font-medium hover:bg-ring/50"
              prefetch={false}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Potential with Mentor Connect
                  </h1>
                  <p className="max-w-[600px] md:text-xl">
                    Discover the power of mentorship and connect with successful
                    alumni who can guide you towards your goals.
                  </p>
                </div>
                <div className="flex gap-2 md:gap-4 lg:gap-6">
                  <Link href="/feed" prefetch={false}>
                    <Button>Join Now</Button>
                  </Link>
                  <Link href="/features" prefetch={false}>
                    <Button>Learn More</Button>
                  </Link>
                </div>
              </div>
              <img
                src="https://placehold.co/550x550/fff/000?text=SIH"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full bg-secondary py-12 text-secondary-foreground md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <LightbulbIcon className="h-12 w-12 text-ring" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Personalized Guidance</h3>
                  <p>
                    Connect with experienced alumni who can provide tailored
                    advice to help you achieve your goals.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <NetworkIcon className="h-12 w-12 text-ring" />
                <div className="space-y-2">
                  <h3 className="font-bold] text-xl">Expand Your Network</h3>
                  <p>
                    Build lasting connections with a diverse community of
                    students and alumni.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <RocketIcon className="h-12 w-12 text-ring" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Accelerate Your Growth</h3>
                  <p>
                    Gain valuable insights and opportunities to help you succeed
                    in your academic and professional pursuits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-md space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Join the Mentor Connect Community
                </h2>
                <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sign up today to start connecting with experienced alumni
                  mentors and unlock your full potential.
                </p>
              </div>
              <form className="flex items-center justify-center">
                <Link href="/feed">
                  <Button
                    type="submit"
                    className="rounded-md px-6 py-2 focus:outline-none focus:ring-2"
                  >
                    Join Now!
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t bg-muted px-4 py-6 text-muted-foreground sm:flex-row md:px-6">
        <p className="text-xs">
          &copy; 2024 Mentor Connect. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
