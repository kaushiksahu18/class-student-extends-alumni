import Link from "next/link";
import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  className?: string;
}

function NavItem({ className, icon }: NavItemProps) {
  return (
    <Link className={className} href="#" prefetch={false}>
      {icon}
    </Link>
  );
}

export default NavItem;
