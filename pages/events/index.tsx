import { getAllEvents } from "@/public/mock";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const allEvents = getAllEvents();
  const router = useRouter();
  const onFindEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath).then();
  };

  return (
    <div>
      <h1>All Events Page</h1>
      <EventsSearch onSearch={onFindEventsHandler} />
      <FeaturedEventsList events={allEvents} />
    </div>
  );
};
export default AllEventsPage;
