import { ConnoisseurStackInteractor } from "@/components/ui/connoisseur-stack-interactor";

const hobbyItems = [
  {
    num: "01",
    name: "Travel",
    description: "Exploring new cultures and landscapes.",
    clipId: "clip-original",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1000&q=80"
  },
  {
    num: "02",
    name: "Sports",
    description: "Staying active through team sports and fitness.",
    clipId: "clip-hexagons",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&q=80"
  },
  {
    num: "03",
    name: "Videography",
    description: "Capturing moments and storytelling through video.",
    clipId: "clip-pixels",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1000&q=80"
  }
];

export function HobbiesDemo() {
  return (
    <div className="w-full">
      <ConnoisseurStackInteractor items={hobbyItems} />
    </div>
  );
}
