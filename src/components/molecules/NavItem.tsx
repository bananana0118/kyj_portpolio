import Link from "next/link";
import { ReactNode } from "react";

type Props = { href: string; children: ReactNode };

export default function NavItem({ href, children }: Props) {
  return (
    <div className="flex h-[64px] min-w-fit cursor-pointer items-center justify-center p-4 font-bold sm:min-w-[150px]">
      <Link href={href}>{children}</Link>
    </div>
  );
}
