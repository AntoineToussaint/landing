import { ContactForm } from "@/app/components/contact-form";
import { Button } from "./button";
import { Dialog } from "./dialog";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[64px] bg-neutral-950/40 backdrop-saturate-150 backdrop-blur-md border-b cf-border-color px-[20px] md:px-[40px]">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center gap-5">
          <Logo />

          <ul className="hidden font-light text-gray-500 text-[14px] gap-4">
            <li>Docs</li>
            <li>Examples</li>
            <li>Blog</li>
          </ul>
        </div>

        <Dialog content={<ContactForm />}>
          <Button size="small">Want to know more?</Button>
        </Dialog>
      </div>
    </header>
  );
}
