"use client"
import { useDashboardContext } from "@/context/DashboardContext";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function TopFiveStreams() {
    const { top5MostStreamedSongs } = useDashboardContext();

  return (
    <div className="p-4 rounded-lg shadow-md border">
      <h1 className="mb-8 font-medium text-2xl">Top 5 Streams (last 30 days)</h1>
      <div className="overflow-auto">
        <ResponsiveContainer minWidth={500} height={300}>
          <BarChart width={150} height={40} data={top5MostStreamedSongs}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}