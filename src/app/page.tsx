import KeyMetrics from "@/components/KeyMetrics";
import RevenueDistribution from "@/components/RevenueDistribution";
import TopFiveStreams from "@/components/TopFiveStreams";
import UserGrowth from "@/components/UserGrowth";
import StreamsTable from "@/components/StreamsTable";

export default function Home() {
  return (
    <section className="my-10">
      <div className="w-[90%] lg:w-[70%] mx-auto">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="my-8">
          <KeyMetrics/>
        </div>
        <div className="my-8">
          <UserGrowth/>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 mb-8">
          <div className="basis-[50%]">
            <TopFiveStreams/>
          </div>
          <div className="basis-[50%]">
            <RevenueDistribution/>
          </div>
        </div>
        <div>
          <StreamsTable/>
        </div>
      </div>
    </section>
  );
}
