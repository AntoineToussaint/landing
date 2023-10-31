import { Button } from "@/components/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { Survey } from "./survey";
import { Dialog } from "@/components/dialog";
import { SurveyForm } from "./survey-form";

export function Hero({
  layout = "centered",
}: {
  layout?: "twoColumn" | "centered";
}) {
  return (
    <section className="pb-5 flex items-center justify-center">
      <div className={clsx("grid", layout === "twoColumn" && "grid-cols-2")}>
        <div
          className={clsx(
            "flex flex-col max-w-3xl",
            layout === "centered" ? "text-center" : "text-left"
          )}
        >
          <span className="font-light text-gray-500 text-[20px]">
            Beta is coming soon!
          </span>

          <h1
            className={clsx(
              layout === "centered" ? "text-6xl" : "text-5xl",
              "leading-tight font-extrabold tracking-tighter",
              "bg-gradient-to-b from-[#555555] to-black bg-clip-text"
            )}
            style={{ WebkitTextFillColor: "transparent" }}
          >
            Plugins to Scale
            <br /> Microservice Development
          </h1>

          <p className="hidden text-[20px] text-gray-500 font-light">
            Some text describing what Codefly is, benefits and the kind of
            people/companies that use Codefly. Codefly is a powerful tool for...
          </p>

          <div
            className={clsx(
              "flex flex-col gap-4 mt-6",
              layout === "centered" ? "items-center" : "items-start"
            )}
          >
            <Dialog content={<SurveyForm />}>
              <Button>Want to know more?</Button>
            </Dialog>

            {/* <Button>
              Get Started
              <ArrowRightIcon />
            </Button> */}

            {/* <span className="font-mono text-sm border px-2 py-1 rounded-lg border-gray-200 bg-gray-50">
              ~ go install -v github.com/v/codefly@latest
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
}
