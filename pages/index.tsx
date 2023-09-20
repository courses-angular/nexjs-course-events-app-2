import { Inter } from "next/font/google";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import { getFeaturedEvents } from "@/public/mock";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events Page</h1>
      <FeaturedEventsList events={featuredEvents} />
    </div>
  );
}
