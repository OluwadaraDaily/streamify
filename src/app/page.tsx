import KeyMetrics from "@/components/KeyMetrics";
import RevenueDistribution from "@/components/RevenueDistribution";
import TopFiveStreams from "@/components/TopFiveStreams";
import UserGrowth from "@/components/UserGrowth";
import StreamsTable from "@/components/StreamsTable";

export default function Home() {
  return (
    <section className="my-10">
      <div className="w-[90%] mx-auto my-8">
        <KeyMetrics/>
      </div>
      <div className="my-8">
        <UserGrowth/>
      </div>
      <div className="flex flex-col md:flex-row md:items-center w-[90%] mx-auto md:gap-10 mb-8">
        <div className="basis-[50%]">
          <RevenueDistribution/>
        </div>
        <div className="basis-[50%]">
          <TopFiveStreams/>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <StreamsTable/>
      </div>
    </section>
  );
}
