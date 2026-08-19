import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; icon?: ReactNode };

export function Button({ children, icon }: ButtonProps) {
  return <button className="button" type="button">{children}{icon}</button>;
}
