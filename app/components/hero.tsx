import { BlurredBackdrop } from "@/components/blurred-backdrop";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { FloatingLines } from "@/components/floating-lines";
import { PlayIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import { ContactForm } from "./contact-form";

type DemoVideo = {
  name: string;
  subs?: {
    name: string;
    video: string;
  }[];
  video?: string;
};

const demoVideos: DemoVideo[] = [
  {
    name: "Day 0",
    video: "/demo.mp4",
  },
  // {
  //   name: "Day 1",
  //   subs: [
  //     { name: "Security", video: "day-1-security" },
  //     { name: "Observability", video: "day-1-observabilty" },
  //     { name: "Dependencies", video: "day-1-dependencies" },
  //   ],
  // },
  // {
  //   name: "Day 2",
  //   subs: [
  //     { name: "Security", video: "day-2-security" },
  //     { name: "Observability", video: "day-2-observabilty" },
  //   ],
  // },
];

export function Hero() {
  return (
    <section className="my-[50px] flex items-center justify-center">
      <FloatingLines className="top-[20px] md:top-[70px] -right-[200px] md:-right-[120px]" />
      <FloatingLines className="-left-[200px] md:-left-[120px] bottom-[30px]" />
      <BlurredBackdrop />
      <div className={clsx("cf-container grid !max-w-[700px] relative")}>
        <div className={clsx("flex flex-col text-center")}>
          <h1
            className={clsx(
              "text-5xl md:text-6xl lg:text-7xl",
              "font-extrabold tracking-tighter",
              "bg-gradient-to-t from-[#9e9e9e] to-white bg-clip-text text-transparent"
            )}
          >
            Make development
            <br />
            <span className="cf-primary-gradient bg-clip-text text-transparent p-1">
              <>lightening fast</>
              {/* <>focused</> */}
              {/* <>secure</> */}
            </span>
          </h1>

          <p className="mt-[10px] text-[16px] md:text-[20px] font-light text-muted">
            A unified developer experience and an ecosystem with plugins
          </p>

          <div className={clsx("flex flex-col gap-4 mt-6 items-center")}>
            <Dialog content={<ContactForm />}>
              <Button size="small">Learn More</Button>
            </Dialog>

            <span className="text-muted text-[14px] !font-medium flex items-center gap-2">
              <PlayIcon />
              Watch Demo
            </span>

            <VideoTabs videos={demoVideos} defaultVideo={demoVideos[0].name} />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoTabs({
  videos,
  defaultVideo,
}: {
  videos: typeof demoVideos;
  defaultVideo: string;
}) {
  return (
    <Tabs.Root
      className="flex flex-col w-full items-center"
      defaultValue={defaultVideo}
    >
      {videos.length > 1 && (
        <Tabs.List
          className="grid border border-[#2c2c2c] rounded-full overflow-clip p-1 mb-1 w-max"
          style={{
            gridTemplateColumns: `repeat(${videos.length}, minmax(0, 1fr))`,
          }}
          aria-label="Choose demo video"
        >
          {videos.map((video) => (
            <Tabs.Trigger
              key={video.name}
              className="px-5 h-[33px] flex whitespace-nowrap items-center w-full justify-center text-[13px] select-none data-[state=active]:bg-[#272727] rounded-full data-[state=active]:focus:relative outline-none cursor-default"
              value={video.name}
            >
              {video.name}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      )}
      {videos.map((video) => (
        <Tabs.Content
          key={video.name}
          value={video.name}
          className="flex justify-center w-full"
        >
          {video.subs?.length ? (
            <VideoTabs videos={video.subs} defaultVideo={video.subs[0].name} />
          ) : (
            <div className="mt-0 w-full h aspect-video rounded-2xl overflow-clip bg-black flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full bg-[#171717]">
                <video width="100%" height="100%" controls autoPlay>
                  <source src={video.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
