import { BestButton } from "@/components/BestButton";
import Link from "next/link";

function PatPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <Link href="/">Home</Link>
      <BestButton />
    </div>
  );
}

export default PatPage;
