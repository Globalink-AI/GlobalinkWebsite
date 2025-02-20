import type React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import CarouselNode from "./NodeCarousel";
import GlobalTradeCompliances from "../../public/GlobalTradeCompliances.png";
import DoveAgent from "../../public/DoveAgent.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Bird } from "lucide-react";
// Modify the productCards array to include icons
const productCards = [
  {
    title: "Global Trade Compliances",
    content:
      "AI powered Global Trade Compliances Suites + Expert Tariff Management Solution Consulting",
    image: GlobalTradeCompliances,
    icon: Globe,
    video: false,
    link: "https://www.youtube.com/watch?v=H0T7EyXSTt8",
  },
  {
    title: "Dove AI Agents for Supply Chain Control Tower",
    content:
      "AI agents integrating enterprise's existing legacy systems, addressing supply chain disruption and autonomous decision making.",
    image: DoveAgent,
    icon: Bird,
    video: true,
    link: "https://www.youtube.com/watch?v=H0T7EyXSTt8",
  },
];
interface ProductCardProps {
  title: string;
  content: string;
  image: StaticImageData; // Replace 'any' with StaticImageData
  icon: React.ElementType;
  link: string;
  video: boolean;
}

function ProductCard({
  title,
  content,
  image,
  icon: Icon,
  link,
  video,
}: ProductCardProps) {
  if (video) {
    return (
      <Card className="flex-1 flex flex-col rounded-none shadow-xl border-4 shadow-gray-300 border-black bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-300">
        <CardHeader className="pb-2">
          <Icon className="text-emerald-600 w-6 h-6" />
          <CardTitle>
            <h3 className="text-lg font-semibold">{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="text-lg leading-relaxed mb-4">{content}</p>
          <div className="mt-auto">
            <video controls aria-label="Video Player" poster="/DoveAgent.png">
              <source src="/119_1739948601.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex-1 flex flex-col rounded-none shadow-xl border-4 shadow-gray-300 border-black bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-300">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full"
      >
        <CardHeader className="pb-2">
          <Icon className="text-emerald-600 w-6 h-6" />
          <CardTitle>
            <h3 className="text-lg font-semibold">{title}</h3>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="text-lg leading-relaxed mb-4">{content}</p>
          <div className="mt-auto">
            <Image
              src={image}
              alt={title}
              style={{ objectFit: "cover" }}
              draggable={false}
            />
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export default function OurWork() {
  return (
    <section className="px-4 mt-16 md:mt-32 max-w-7xl mx-auto">
      <div className="w-full flex flex-col items-center">
        <h2 className="md:text-4xl text-3xl font-bold text-center">
          Our Products and Services
        </h2>
        <div className="hidden md:flex mt-10 gap-8">
          {productCards.map((card, index) => (
            <ProductCard
              key={index}
              title={card.title}
              content={card.content}
              image={card.image}
              icon={card.icon}
              link={card.link}
              video={card.video}
            />
          ))}
        </div>
        <div className="md:hidden w-full mt-10">
          <CarouselNode
            cards={productCards.map((card, index) => ({
              id: index,
              content: (
                <ProductCard
                  key={index}
                  title={card.title}
                  content={card.content}
                  image={card.image}
                  icon={card.icon}
                  link={card.link}
                  video={card.video}
                />
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
}
