import Image from "next/image";
import { Header } from "./Components/Header";
import { getFeaturedEvents } from "../../dummy-data";
import EventList from "./Components/events/event-list";

export default function Home() {
  const FeaturedEvents = getFeaturedEvents();
  return (
    <>
    <Header />
      <h2 className="text-center">hi i am gaurab thapa magar</h2>
      <section className="flex flex-cols justify-center items-center">
        <EventList items={FeaturedEvents}/>
      </section>
    </>
  );
}
