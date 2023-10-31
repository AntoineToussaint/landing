import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from "react";

export const Button = forwardRef(
  (
    {
      size,
      children,
      ...props
    }: PropsWithChildren<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      > & { size?: "small" | "medium" }
    >,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "flex gap-3 items-center justify-center",
          "bg-black text-white h- rounded-lg",
          size === "small" ? "px-3 text-[14px] h-[34px]" : "px-4 h-[48px]",
          "hover:opacity-80 transition-opacity duration-200"
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
