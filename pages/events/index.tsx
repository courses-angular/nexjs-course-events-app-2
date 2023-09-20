import { getFeaturedEvents } from "@/public/mock";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";

const AllEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Events Page</h1>
      <FeaturedEventsList events={featuredEvents} />
    </div>
  );
};
export default AllEventsPage;
