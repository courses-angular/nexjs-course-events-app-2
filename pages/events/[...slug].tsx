import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import { Fragment, useEffect, useState } from "react";
import ResultsTitle from "@/components/events/ResultsTitle";
import Button from "@/components/ui/Button";
import { FeaturedEvent } from "@/pages/models/featured_event";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";

interface Props {
  filteredEvents: Array<FeaturedEvent>;
  date: {
    year: number;
    month: number;
  };
  hasError?: boolean;
}

const FilteredEventsPage = () => {
  const [allEvents, setAllEvents] = useState<FeaturedEvent[]>([]);
  const router = useRouter();

  const filterData = router.query.slug!;

  const filteredYear = filterData ? filterData[0] : null;
  const filteredMonth = filteredYear ? filterData[1] : null;
  const numYear = +filteredYear!;
  const numMonth = +filteredMonth!;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    "https://nextjs-course-b1a4b-default-rtdb.firebaseio.com/events.json",
    fetcher
  );
  useEffect(() => {
    if (data) {
      const events: FeaturedEvent[] = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setAllEvents(events);
    }
  }, [data]);

  if (!allEvents) {
    return (
      <Fragment>
        <p className="center"> Loading...</p>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const formattedDate = new Date(numYear, numMonth - 1);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter.Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredClientEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredClientEvents || filteredClientEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <div>
      <Fragment>
        <Head>
          <title>Filtered events</title>
          <meta
            name="description"
            content={`All events for  ${numMonth}/${numYear}`}
          />
        </Head>
        <ResultsTitle date={formattedDate} />
        <FeaturedEventsList events={filteredClientEvents} />
      </Fragment>
    </div>
  );
};

// export async function getServerSideProps(context: any) {
// const { params } = context;
//
// const filterData = params.slug;
// if (!filterData) {
//   return {
//     props: {
//       hasError: true,
//     },
//   };
// }
// const filteredYear = filterData[0];
// const filteredMonth = filterData[1];
//
// const numYear = +filteredYear;
// const numMonth = +filteredMonth;
//
// if (
//   isNaN(numYear) ||
//   isNaN(numMonth) ||
//   numYear > 2030 ||
//   numYear < 2021 ||
//   numMonth < 1 ||
//   numMonth > 12
// ) {
//   return {
//     props: {
//       notFound: true,
//     },
//   };
// }
// const filteredEvents = await getFilteredEvents({
//   year: numYear,
//   month: numMonth,
// });
// if (!filteredEvents || filteredEvents.length === 0) {
//   return {
//     props: {
//       hasError: true,
//     },
//   };
// }
//
// return {
//   props: {
//     filteredEvents,
//     date: {
//       year: numYear,
//       month: numMonth,
//     },
//   },
// };
// }

export default FilteredEventsPage;
