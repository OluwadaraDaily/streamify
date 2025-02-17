"use client"
import { useDashboardContext } from "@/context/DashboardContext"
import Card from "./card"
import { IKeyMetrics } from "@/types/chart";

export default function KeyMetrics() {
  const dashboardData = useDashboardContext();

  console.log('DASHBOARD DATA =>', dashboardData);
  return (
    <>
      <h1 className="mb-2 font-semibold text-2xl">Key Metrics</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 md:justify-center lg:justify-normal">
        {(Object.keys(dashboardData.keyMetrics) as Array<keyof IKeyMetrics>).map((item) => (
          <Card
            key={dashboardData.keyMetrics[item].name}
            title={dashboardData.keyMetrics[item].name}
            value={`${dashboardData.keyMetrics[item].value}`}
          />
        ))}
      </div>
    </>
  )
}