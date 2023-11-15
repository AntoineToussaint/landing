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
      className,
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
          "flex gap-3 items-center justify-center font-medium",
          "cf-primary-gradient text-black rounded-full",
          size === "small"
            ? "px-4 text-[13px] h-[36px]"
            : "text-[14px] px-6 h-[40px]",
          "hover:opacity-80 transition-opacity duration-200",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
