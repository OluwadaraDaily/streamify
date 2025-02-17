import KeyMetrics from "@/components/KeyMetrics";
import RevenueDistribution from "@/components/RevenueDistribution";
import UserGrowth from "@/components/UserGrowth";

export default function Home() {
  return (
    <section className="my-10">
      <div className="w-[90%] mx-auto my-8">
        <KeyMetrics/>
      </div>
      <div className="my-8">
        <UserGrowth/>
      </div>
      <div>
        <RevenueDistribution/>
      </div>
    </section>
  );
}
