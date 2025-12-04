import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carlos Silva",
    username: "@carlossilva",
    body: "Axos completely changed the way I invest in crypto. The AI agents help me make smarter decisions without emotion.",
    img: "https://avatar.vercel.sh/carlos",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    username: "@anarodrigues",
    body: "Amazing how the agents monitor the market 24/7. I've received several recommendations that proved to be very profitable!",
    img: "https://avatar.vercel.sh/ana",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    username: "@pedrosantos",
    body: "The personalization is perfect. The system understands my risk profile and only suggests investments aligned with my goals.",
    img: "https://avatar.vercel.sh/pedro",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    username: "@marianacosta",
    body: "I save hours per day that I used to spend analyzing charts. Now I can focus on other things while the AI works for me.",
    img: "https://avatar.vercel.sh/mariana",
    rating: 5,
  },
  {
    name: "João Oliveira",
    username: "@joaooliveira",
    body: "The 360° view of my portfolio is fantastic. I can see everything in one place and make more informed decisions.",
    img: "https://avatar.vercel.sh/joao",
    rating: 5,
  },
  {
    name: "Beatriz Lima",
    username: "@beatrizlima",
    body: "I never make emotion-based decisions anymore. The AI agents are impartial and that made all the difference in my results.",
    img: "https://avatar.vercel.sh/beatriz",
    rating: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  rating,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <div className="flex gap-0.5 mt-3 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsSection() {
  return (
    <section className="bg-black relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real results from people already using Axos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join over 10,000 investors who have already improved their results with our AI
          </p>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-6">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
      </div>
    </section>
  );
} 