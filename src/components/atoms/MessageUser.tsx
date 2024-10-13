import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function MessageUser({ children }: Props) {
  return (
    <div className="max-w-max-[350px] rounded-lg rounded-br-none border border-highlight bg-white px-5 py-4 leading-[normal] text-black">
      {children}
    </div>
  );
}
