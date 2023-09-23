import { useRouter } from "next/router";
import { getFilteredEvents } from "@/public/mock";
import FeaturedEventsList from "@/components/events/FeaturedEventsList";
import { Fragment } from "react";
import ResultsTitle from "@/components/events/ResultsTitle";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) return <p className="center"> Loading...</p>;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter.Please adjust your values</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  const date = new Date(numYear, numMonth - 1);
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter</p>;
  }
  return (
    <div>
      <Fragment>
        <ResultsTitle date={date} />
        <FeaturedEventsList events={filteredEvents} />
      </Fragment>
    </div>
  );
};

export default FilteredEventsPage;
