import { getAllEvents } from "@/helpers/api-utils";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from "next/router";
import { FeaturedEvent } from "@/pages/models/featured_event";

interface Props {
  events: Array<FeaturedEvent>;
}

const AllEventsPage = ({ events }: Props) => {
  // const allEvents = getAllEvents();
  const router = useRouter();
  const onFindEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath).then();
  };

  return (
    <div>
      <h1>All Events Page</h1>
      <EventsSearch onSearch={onFindEventsHandler} />
      <FeaturedEventsList events={events} />
    </div>
  );
};
export default AllEventsPage;

export async function getStaticProps() {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
}
