import { Card } from "@/components/card";
import { ArrowRightIcon, FrameIcon, LayersIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { Button } from "@/components/button";

const tabContent = [
  {
    value: "developers",
    label: "Developers",
    content: (
      <ActorCard
        tag="Developer"
        imageSrc="/cli.png"
        title="Head start"
        description="Use professional plugins to bootstrap your microservices and infrastructure"
      />
    ),
  },
  {
    value: "platform-engineer",
    label: "Platform Engineer",
    content: (
      <ActorCard
        tag="Platform Engineer"
        imageSrc="/web-1.png"
        title="API Management"
        description="Never break a downstream application again"
      />
    ),
  },
  {
    value: "tech-lead",
    label: "Tech Lead/Manager",
    content: (
      <ActorCard
        tag="Tech Lead/Manager"
        imageSrc="/web-2.png"
        title="View your tech stack"
        description="Visibility to all your deployed stack and Saas in one place"
      />
    ),
  },
  {
    value: "provider",
    label: "Saas/Provider",
    content: (
      <ActorCard
        tag="SaaS/Provider"
        imageSrc="/web-2.png"
        title="View your tech stack"
        description="Visibility to all your deployed stack and Saas in one place"
      />
    ),
  },
];

export function Features() {
  return (
    <section>
      <div className="cf-container">
        <div className="hidden">
          <h3 className="text-2xl">What can you do with Codefly?</h3>
          <span className="font-light text-neutral-400 text-sm">
            Some description text here
          </span>
        </div>
        <div className="grid gap-5 my-[90px]">
          <ActorCard
            tag="Developer"
            imageSrc="/cli.png"
            title="Head start"
            description="Use professional plugins to bootstrap your microservices and infrastructure"
          />
          <ActorCard
            tag="Platform Engineer"
            imageSrc="/web-1.png"
            title="API Management"
            description="Never break a downstream application again"
            imagePosition="left"
          />
          <ActorCard
            tag="Tech Lead/Manager"
            imageSrc="/web-2.png"
            title="View your tech stack"
            description="Visibility to all your deployed stack and Saas in one place"
          />
          <ActorCard
            tag="SaaS/Provider"
            imageSrc="/web-2.png"
            title="View your tech stack"
            description="Visibility to all your deployed stack and Saas in one place"
            imagePosition="left"
          />
        </div>

        <Tabs.Root className="flex flex-col" defaultValue={tabContent[0].value}>
          <Tabs.List className="flex gap-2" aria-label="Manage your account">
            {tabContent.map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                className="bg-black border border-neutral-800 px-5 h-[45px] rounded-full flex items-center justify-center text-[14px] select-none data-[state=active]:bg-neutral-800 hover:bg-neutral-900 outline-none cursor-default transition-all duration-300"
                value={tab.value}
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabContent.map((tab) => (
            <Tabs.Content
              key={tab.value}
              className="bg-black outline-none"
              value={tab.value}
            >
              <div className="mt-3">{tab.content}</div>
            </Tabs.Content>
          ))}
        </Tabs.Root>

        <div className="hidde flex flex-col items-center mt-[90px] mb-[30px]">
          <h3 className="text-2xl">
            Other Codefly features that you will absolutely love
          </h3>
          <span className="font-light text-neutral-400">
            Some description text here
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-[90px]">
          <FeatureCard
            imageSrc="/cli.png"
            title="Head start"
            description="Use professional plugins to bootstrap your microservices and infrastructure"
          />
          <FeatureCard
            imageSrc="/web-1.png"
            title="API Management"
            description="Never break a downstream application again"
          />
          <FeatureCard
            imageSrc="/web-2.png"
            title="View your tech stack"
            description="Visibility to all your deployed stack and Saas in one place"
          />
        </div>
      </div>
    </section>
  );
}

function ActorCard({
  tag = "Developer",
  title = "Feature title",
  description = "Feature description",
  imageSrc,
  imagePosition,
  equalColumns = true,
}: {
  tag?: string;
  title?: string;
  description?: string;
  imageSrc: string;
  imagePosition?: "left" | "right";
  equalColumns?: boolean;
}) {
  return (
    <Card
      className={clsx(
        "grid !items-start",
        !equalColumns && "h-[500px]",
        equalColumns
          ? "grid-cols-2"
          : imagePosition == "left"
          ? "grid-cols-[2fr_1fr]"
          : "grid-cols-[1fr_2fr]"
      )}
    >
      <div className="h-full p-[40px] flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-[14px] text-neutral-500 flex gap-1 items-center">
            <FrameIcon />
            {tag}
          </span>
          <div>
            <h4 className="text-[18px]">{title}</h4>
            <span className="text-neutral-500 text-[18px]">{description}</span>
          </div>
        </div>

        <Button className="bg-neutral-900 text-white w-fit">
          Learn More
          <ArrowRightIcon />
        </Button>
      </div>
      <div
        className={clsx(
          "overflow-clip rounded-[6px] flex items-center justify-center",
          imagePosition === "left" && "col-start-1 row-start-1"
        )}
      >
        <Image
          src={imageSrc}
          width={900}
          height={50}
          alt={title}
          className="roundex-xl overflow-clip object-cover"
        />
      </div>
    </Card>
  );
}

function FeatureCard({
  title = "Feature title",
  description = "Feature description",
  imageSrc,
}: {
  title?: string;
  description?: string;
  imageSrc: string;
}) {
  return (
    <Card className="!p-6">
      <div
        className={clsx(
          "overflow-clip rounded-[6px] flex items-center justify-center"
        )}
      >
        <Image
          src={imageSrc}
          width={500}
          height={50}
          alt={title}
          className="roundex-xl overflow-clip object-cover"
        />
      </div>
      <div className="mt-3">
        <h4>{title}</h4>
        <span className="text-neutral-500 text-[14px] leading-[20px] block">
          {description}
        </span>
      </div>
    </Card>
  );
}
