import Image from "next/image";
import { Button } from "./button";
import { Dialog } from "./dialog";
import { SurveyForm } from "@/app/components/survey-form";

export function Header() {
  return (
    <header className="h-[64px] border-b border-gray-200">
      <div className="flex justify-between items-center h-full px-[20px]">
        <div className="flex items-center gap-5">
          <Image
            src="/logo_rect.png"
            alt="Picture of the author"
            width={180}
            height={60}
          />

          <ul className="hidden font-light text-gray-500 text-[14px] gap-4">
            <li>Docs</li>
            <li>Examples</li>
            <li>Blog</li>
          </ul>
        </div>

        <Dialog content={<SurveyForm />}>
          <Button size="small">Want to know more?</Button>
        </Dialog>
      </div>
    </header>
  );
}
