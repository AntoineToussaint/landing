import clsx from "clsx";

export function Logo() {
  return (
    <>
      {/* <Image
            src="/logo_rect.png"
            alt="Picture of the author"
            width={180}
            height={60}
          /> */}
      <span
        className={clsx(
          "font-heading text-[24px] font-medium tracking-tight cf-gray-gradient !bg-gradient-to-r bg-clip-text text-transparent"
        )}
      >
        codefly.ai
      </span>
    </>
  );
}
