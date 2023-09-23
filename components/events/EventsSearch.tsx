import Button from "@/components/ui/Button";
import classes from "../../styles/events-search.module.css";
import { useRef } from "react";

interface Props {
  onSearch: (year: string, month: string) => void;
}

const EventsSearch = ({ onSearch }: Props) => {
  const month = useRef<any>();
  const year = useRef<any>();
  const onFindEventsHandler = (event: any) => {
    event.preventDefault();
    console.log("find events", event);
    console.log("find events", month);
    onSearch(month!.current!.value, year!.current!.value);
  };

  return (
    <form className={classes.form} onSubmit={onFindEventsHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="year" id="year" ref={month}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="month" id="month" ref={year}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
        <Button>Find Events</Button>
      </div>
    </form>
  );
};
export default EventsSearch;
