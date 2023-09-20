import { FeaturedEvent } from "@/pages/models/featured_event";
import FeaturedEventItem from "@/components/events/FeaturedEventItem";

interface Props {
  events: Array<FeaturedEvent>;
}

const FeaturedEventsList = ({ events }: Props) => {
  return (
    <ul>
      {events.map((event) => (
        <FeaturedEventItem event={event} key={event.id} />
      ))}
    </ul>
  );
};

export default FeaturedEventsList;
