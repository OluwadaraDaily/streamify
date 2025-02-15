import KeyMetrics from "@/components/KeyMetrics";
import UserGrowth from "@/components/UserGrowth";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto my-8">
        <KeyMetrics/>
      </div>
      <div>
        <UserGrowth/>
      </div>
    </>
  );
}
