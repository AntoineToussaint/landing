import clsx from "clsx";
import { PropsWithChildren } from "react";

export function Card({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        "!pb-12 pt-8 md:!pb-4 md:!pt-4 p-3",
        "flex flex-col items-center justify-center",
        "border border-[rgba(255,255,255,0.05)]",
        "relative w-full h-full max-w-full rounded-xl overflow-hidden cf-card",
        className
      )}
    >
      {children}
    </div>
  );
}
