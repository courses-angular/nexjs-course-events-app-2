import { FeaturedEvent } from "@/pages/models/featured_event";

export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-b1a4b-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const events: Array<FeaturedEvent> = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter: {
  year: number;
  month: number;
}) {
  const allEvents = await getAllEvents();
  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
