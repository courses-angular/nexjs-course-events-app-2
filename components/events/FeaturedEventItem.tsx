import { FeaturedEvent } from "@/pages/models/featured_event";
import classes from "../../styles/event-item.module.css";
import Button from "@/components/ui/Button";
import DateIcon from "@/components/icons/date-icon";
import AddressIcon from "@/components/icons/address-icon";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";

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
    <li className={classes.item}>
      <img className={classes.img} src={"/" + event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{formattedDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedlocation}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={expoloredLink}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
        {/*<Link href={expoloredLink}>Explore Event</Link>*/}
      </div>
    </li>
  );
};
export default FeaturedEventItem;
