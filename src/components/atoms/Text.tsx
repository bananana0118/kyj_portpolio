import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Text({ children }: Props) {
  return <div>{children}</div>;
}
