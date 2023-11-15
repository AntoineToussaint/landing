import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="h-[64px] border-t border-neutral-900 px-[20px] md:px-[40px]">
      <div className="flex items-center justify-between gap-[30px] h-full">
        <Logo />

        <span className="text-[14px] font-light text-neutral-500">
          © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
