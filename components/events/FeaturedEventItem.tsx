import { FeaturedEvent } from "@/pages/models/featured_event";
import Link from "next/link";

interface Props {
  event: FeaturedEvent;
}

const FeaturedEventItem = ({ event }: Props) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedlocation = event.location.replace(", ", "\n");
  const expoloredLink = `/events/${event.id}`;
  return (
    <li>
      <img src={"/" + event.image} alt={event.title} />
      <div>
        <h2>{event.title}</h2>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedlocation}</address>
        </div>
      </div>
      <div>
        <Link href={expoloredLink}>Explore Event</Link>
      </div>
    </li>
  );
};
export default FeaturedEventItem;
