import Hero from "./_components/Hero";
import RecentNotes from "./_components/RecentNotes";

export default function Home() {
  return (
    <div className="flex  items-center justify-center">
      <div className="md:max-w-3xl w-full">
        <Hero />
        <RecentNotes />
      </div>
    </div>
  );
}
