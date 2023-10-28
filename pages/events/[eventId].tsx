import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import Button from "@/components/ui/Button";
import { FeaturedEvent } from "@/pages/models/featured_event";
import Head from "next/head";

interface Props {
  selectedEvent: FeaturedEvent;
}

const EventDetailPage = ({ selectedEvent }: Props) => {
  // const id = useRouter().query.eventId as string;
  // const selectedEvent = getEventById(id)!;
  // const selectedEvent = getEventById(id);
  if (!selectedEvent) {
    return (
      <Fragment>
        <div className="center">
          <p>Loading...</p>
        </div>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content="Selected event page" />
      </Head>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>
        <p>{selectedEvent.description}</p>
      </EventContent>
    </Fragment>
  );
};
export default EventDetailPage;

export async function getStaticProps(context: any) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: "blocking",
  };
}
