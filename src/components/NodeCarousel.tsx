"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CarouselNodeProps {
  cards: {
    id: string | number;
    content: React.ReactNode;
  }[];
}

export default function CarouselNode({ cards }: CarouselNodeProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center gap-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id}>{card.content}</CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === index ? "bg-primary w-4" : "bg-muted"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
