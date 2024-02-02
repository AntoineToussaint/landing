import { BlurredBackdrop } from "@/components/blurred-backdrop";
import { Button } from "@/components/button";
import { Dialog } from "@/components/dialog";
import { FloatingLines } from "@/components/floating-lines";
import { PlayIcon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import { ContactForm } from "./contact-form";
import { useRef, useState } from "react";
import { Spinner } from "@/components/spinner";

type DemoVideo = {
  name: string;
  subs?: {
    name: string;
    videos: [input: string, output: string];
  }[];
  videos?: [input: string, output: string];
};

const demoVideos: DemoVideo[] = [
  {
    name: "Backend",
    videos: ["/kreya-grpc-input.mp4", "/kreya-grpc-output.mp4"],
  },
  {
    name: "Frontend",
    videos: ["/web-input.mp4", "/web-output.mp4"],
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
    <section className="my-[50px] flex items-center justify-center relative overflow-hidden">
      <FloatingLines className="top-[60px] md:top-[70px] -right-[200px] md:-right-[120px]" />
      <FloatingLines className="-left-[200px] md:-left-[120px] bottom-[30px]" />
      <BlurredBackdrop />
      <div className="cf-container grid relative">
        <div className="flex flex-col items-center gap-[10px]">
          <div className="p-[1px] w-min rounded-full bg-gradient-to-r from-[rgba(0,255,179,0.2)] via-[rgba(0,255,179,0.6)]  to-[rgba(0,255,179,0.2)]">
            <div className="bg-neutral-950 rounded-full whitespace-nowrap px-6 h-[75px] flex items-center">
              <span className="text-[rgba(0,255,179,1)] text-[30px]">
                Coming Soon
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-[10px] !max-w-[700px]">
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
                <>lightning fast</>
                {/* <>focused</> */}
                {/* <>secure</> */}
              </span>
            </h1>

            <p className="mt-[10px] text-[16px] md:text-[20px] font-light text-muted">
              A unified developer experience and an ecosystem with plugins
            </p>

            <Dialog content={<ContactForm />}>
              <Button>Want to know more?</Button>
            </Dialog>
          </div>

          <div className={clsx("flex flex-col gap-4 mt-6 items-center")}>
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
          ) : video.videos?.length ? (
            <div className="mt-2">
              <TwinVideoPlayer videos={video.videos} />
            </div>
          ) : null}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

function TwinVideoPlayer({
  videos,
}: {
  videos: [input: string, output: string];
}) {
  const outputVideoRef = useRef<HTMLVideoElement>(null);
  const outputVideoWrapperRef = useRef<HTMLDivElement>(null);
  const [outputVideoPlayed, setOutputVideoPlayed] = useState(false);

  return (
    <div className="">
      <div
        className={clsx(
          "grid md:grid-cols-[4fr_1fr] transition-all duration-700 items-start justify-center gap-3",
          "bg-[#212121] rounded-2xl p-3",
          outputVideoPlayed && "md:!grid-cols-[1fr_1fr]"
        )}
      >
        <div className="flex flex-col items-center gap-0">
          <span className="bg-[#171717] text-sm text-muted rounded-t-lg px-3 py-2">
            What you do
          </span>
          <div className="aspect-video rounded-2xl overflow-clip bg-[#171717] flex items-center justify-center">
            <video
              controls
              autoPlay
              className="w-full aspect-video"
              onEnded={() => {
                console.log("vvideo ended");
                setOutputVideoPlayed(true);
                outputVideoWrapperRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                outputVideoRef.current?.play();
              }}
            >
              <source src={videos[0]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div
          ref={outputVideoWrapperRef}
          className={clsx(
            "flex flex-col items-center",
            "transition-all duration-700",
            !outputVideoPlayed ? "max-h-[150px]" : "max-h-screen"
          )}
        >
          <span className="bg-[#171717] text-muted text-sm rounded-t-lg px-3 py-2">
            What you get
          </span>
          <div
            className={clsx(
              "w-full aspect-video rounded-2xl overflow-clip bg-[#171717] flex items-center justify-center",
              "transition-transform duration-700",
              !outputVideoPlayed && "scale-50 md:scale-100 origin-top"
            )}
          >
            <video
              ref={outputVideoRef}
              className={clsx(
                "w-full aspect-video",
                outputVideoPlayed ? "block" : "hidden"
              )}
              controls
            >
              <source src={videos[1]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!outputVideoPlayed && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
}
