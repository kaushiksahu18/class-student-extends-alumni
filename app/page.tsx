import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";

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

type SVGProps = React.SVGAttributes<SVGElement>;

export function GraduationCapIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

export function LightbulbIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

export function NetworkIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

export function RocketIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
