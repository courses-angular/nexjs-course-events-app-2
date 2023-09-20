import { useRouter } from "next/router";
import { getEventById } from "@/public/mock";
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

const EventDetailPage = () => {
  const id = useRouter().query.eventId as string;
  const selectedEvent = getEventById(id)!;

  if (!selectedEvent) {
    return <p>No event found!</p>;
  }

  console.log(selectedEvent);
  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>{selectedEvent.description}</EventContent>
    </Fragment>
  );
};
export default EventDetailPage;
