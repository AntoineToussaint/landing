import { PaperPlaneIcon, PlusIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export function FAQs() {
  return (
    <section className="my-[70px]">
      <div className="cf-container !max-w-[800px]">
        <div className="mx-auto text-center">
          <h2 className="mb-0 cf-gray-gradient bg-clip-text text-transparent">
            FAQs
          </h2>
        </div>
        <div className="grid mt-[40px] gap-[20px]">
          <QuestionAndAnswer
            question="What is the effort of porting my application to codefly.ai?"
            answer="None. Or to be more precise, you can start integrating different functionality of the platform following your own set priorities. Codefly plugins cover Day 0, Day 1 and Day 2 operations. Want to start by just visualizing your dependency graph across multiple repository? codefly has a plugin for that. License worries? codefly has a plugin for that? Code deep security scanning? Codefly has a plugin for that."
          />
          <QuestionAndAnswer
            question="Is it an Open-source DIY or Cloud Saas model?"
            answer={
              <>
                <p>
                  The CLI and all plugins published by codefly.ai will be
                  open-source. You can think of this as the most powerful code
                  generation tool. codefly.dev gives you a lot more value on top
                  of this for management, visibility, etc... and get the most
                  value out of your plugins.
                </p>
                <p>
                  Some plugins will help you create production grade deployable
                  code in 1 minute, other plugins will provide a bridge to your
                  SaaS solutions
                </p>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}

function QuestionAndAnswer({
  question = "Question",
  answer = "Explanatory answer",
}: {
  question: string;
  answer: ReactNode;
}) {
  const [answerShown, setAnswerShown] = useState(false);
  return (
    <div className="p-[20px] bg-[rgba(25,25,25,0.3)] rounded-[15px]">
      <div
        className="flex items-center justify-between gap-[30px] cursor-pointer"
        onClick={() => setAnswerShown(!answerShown)}
      >
        <h4 className="text-[15px] md:text-[18px] font-normal">{question}</h4>
        <button
          className={clsx(
            "transition-transform duration-200",
            answerShown && "rotate-45"
          )}
        >
          <PlusIcon className="w-7 h-7 text-muted" />
        </button>
      </div>
      <div
        className={clsx(
          "text-muted text-[14px] md:text-[16px] overflow-hidden transition-all duration-200 [&>p]:mb-4",
          answerShown ? "max-h-screen pt-[10px]" : "h-0"
        )}
      >
        {typeof answer === "string" ? <p>{answer}</p> : answer}
      </div>
    </div>
  );
}
