import { CheckboxIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";
import { RiLockLine, RiShieldStarLine } from "react-icons/ri";

export function DeveloperExperience() {
  return (
    <section className="my-[70px]">
      <div className="cf-container">
        <div className="flex flex-col gap-[10px] items-center mx-auto max-w-[700px] text-center">
          <h2 className="mb-0 cf-gray-gradient bg-clip-text text-transparent">
            10x your development experience
          </h2>
          <span className="font-light text-muted text-[16px] md:text-[20px]">
            Enjoy the best experience in deployment, infrastructure, maintenance
            and security will come for free.
          </span>
        </div>
        <div className="grid mt-[40px]">
          <Section
            imageSrc="/NoLockIn-Illustration.png"
            title={
              <>
                No lock-in.
                <br /> Come with your tools.
              </>
            }
            description="Keep your language. Keep your stack. Keep your cloud."
            highlights={[
              {
                icon: (
                  <span className="text-[#5C7BE9]">
                    <RiLockLine />
                  </span>
                ),
                text: "Secure",
              },
              {
                icon: (
                  <span className="text-[#F3C37B]">
                    <CustomBoltIcon />
                  </span>
                ),
                text: "Lightning-fast",
              },
              {
                icon: (
                  <span className="text-[#00FFB3]">
                    <RiShieldStarLine />
                  </span>
                ),
                text: "Production-quality",
              },
            ]}
          />
          <div className="-mt-[1px]">
            <Section
              imageSrc="/UnifiedDevx-Illustration.png"
              title="Unified developer experience"
              description="Enjoy a unified developer experience right off the bat."
              highlights={[
                {
                  text: "Get a complete overview of your projects, applications and services",
                },
                { text: "Automatic sync/hot reload" },
                { text: "Integrate with your favourite IDE" },
              ]}
              imagePosition="right"
            />
          </div>
          <div className="-mt-[1px]">
            <Section
              imageSrc="/Ecosystmen-Illustration.png"
              title="Rich plugin ecosystem"
              description="Enjoy a rich plugin ecosystem: curated, secure, fast and developed by the best for the best"
              highlights={[
                {
                  text: "codefly.ai marketplace offers the App Store for your stack",
                },
                { text: "Create your own plugins" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  title = "Feature title",
  description = "Feature description",
  imageSrc,
  highlights = [],
  imagePosition = "left",
}: {
  title?: ReactNode;
  description?: ReactNode;
  imageSrc: string;
  highlights?: { icon?: ReactNode; text: string }[];
  imagePosition?: "left" | "right";
}) {
  return (
    <div
      className={clsx(
        "border cf-border-color",
        "grid md:grid-cols-[1fr_1px_1fr] items-start"
      )}
    >
      <div
        className={clsx(
          "overflow-clip flex items-center justify-center",
          imagePosition === "right" && "md:order-3"
        )}
      >
        <Image
          src={imageSrc}
          width={900}
          height={50}
          alt=""
          className="roundex-xl overflow-clip object-cover"
        />
      </div>

      <hr
        className={clsx(
          "hidden md:block border-l cf-border-color h-full",
          imagePosition === "right" && "order-2"
        )}
      />

      <div
        className={clsx(
          "h-full px-[30px] md:px-[40px] py-[40px] flex flex-col justify-center",
          imagePosition === "right" && "md:-order-1"
        )}
      >
        <div className="flex flex-col gap-[10px] max-w-[400px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h4 className="text-[20px] md:text-[24px]">{title}</h4>
            <span className="text-muted text-[16px] md:text-[20px] font-light">
              {description}
            </span>
          </div>

          {highlights.length > 0 && (
            <ul className="grid gap-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight.text}
                  className="flex gap-[10px] text-[15px] text-muted font-light"
                >
                  <div className="shrink-0 relative top-[2px] [&_svg]:w-[18px] [&_svg]:h-[18px]">
                    {highlight.icon ?? <CheckboxIcon className="text-muted" />}
                  </div>
                  {highlight.text}
                </li>
              ))}
            </ul>
          )}

          {/* <Button className="bg-neutral-900 text-white w-fit">
            Learn More
            <ArrowRightIcon />
          </Button> */}
        </div>
      </div>
    </div>
  );
}

function CustomBoltIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 0V6.85714H13L6.75 16V9.14286H3L9.25 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
