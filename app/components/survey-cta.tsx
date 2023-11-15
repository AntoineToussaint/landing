import { Button } from "@/components/button";
import { ArrowRightIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

export function SurveyCTA() {
  return (
    <section className="my-[70px]">
      <div className="cf-container">
        <div className="flex flex-col gap-[20px] items-center mx-auto max-w-[700px] text-center">
          <h2 className="mb-0 cf-gray-gradient bg-clip-text text-transparent">
            Fill out our developer survey
          </h2>
          <span className="hidden font-light text-muted text-[20px]">
            Fill in our developer survey, Enjoy a rich plugin ecosystem:
            curated, secure, fast and developed by the best for the best
          </span>
          <a
            href="https://docs.google.com/forms/d/1lzdvhF_w8LBY_NGLWL4LcCAQ0OEJXN0lbBSg8AFYSS8/edit?ts=654358ab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Fill Survey</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
