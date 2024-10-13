import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function MessageAI({ children }: Props) {
  return (
    <div className="max-w-max-[350px] rounded-lg rounded-tl-none border border-highlight bg-primary px-5 py-4 leading-[normal] text-white">
      {children}
    </div>
  );
}
