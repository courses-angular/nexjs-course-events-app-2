import { Inter } from "next/font/google";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import { FeaturedEvent } from "@/pages/models/featured_event";
import { getFeaturedEvents } from "@/helpers/api-utils";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  events: FeaturedEvent[];
}

export default function HomePage({ events }: Props) {
  // const featuredEvents = getFeaturedEvents();
  console.group("%c GROUP", "color:#84B59F");
  console.log({ events });
  console.groupEnd();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events" />
      </Head>
      <h1>Events Page</h1>
      <FeaturedEventsList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
