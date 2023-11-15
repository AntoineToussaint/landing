import clsx from "clsx";

export function BlurredBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 cf-primary-gradient !bg-gradient-to-b opacity-5 backdrop-blur-3xl blur-[100px]",
        className
      )}
    />
  );
}
