import { Card } from "@/components/card";
import { LayersIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function Features() {
  return (
    <section>
      <div className="cf-container">
        <div className="hidden">
          <h3 className="text-2xl">What can you do with Codefly?</h3>
          <span className="font-light text-gray-500 text-sm">
            Some description text here
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
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
    <Card className="text-center">
      <div className="overflow-clip rounded-[6px] mb-4">
        <Image
          src={imageSrc}
          width={500}
          height={50}
          alt={title}
          className="roundex-xl overflow-clip"
          objectFit="fit"
        />
      </div>
      <h4>{title}</h4>
      <span>{description}</span>
    </Card>
  );
}
