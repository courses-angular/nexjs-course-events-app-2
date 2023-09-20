import { FeaturedEvent } from "@/pages/models/featured_event";
import FeaturedEventItem from "@/components/events/FeaturedEventItem";

import classes from "../../styles/event-list.module.css";

interface Props {
  events: Array<FeaturedEvent>;
}

const FeaturedEventsList = ({ events }: Props) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <FeaturedEventItem event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default FeaturedEventsList;
