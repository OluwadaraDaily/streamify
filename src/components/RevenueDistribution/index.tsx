"use client"
import { useMemo } from "react";
import { useDashboardContext } from "@/context/DashboardContext";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#1D3811'];

const CustomTooltip = ({ active, payload }: { active: boolean | undefined, payload: Payload<ValueType, NameType>[] | undefined }) => {
  console.log('active =>', active);
  console.log('payload =>', payload);
  const { revenueDistributionData } = useDashboardContext();
  const total = useMemo(() =>
    revenueDistributionData.reduce((acc, cur) => acc + cur.value, 0), [revenueDistributionData]
  );

  if (active && payload && payload.length && typeof payload[0]?.value === "number") {
    const percent = ((payload[0].value / total) * 100).toFixed(2);
    return (
      <div style={{ backgroundColor: "white", padding: 10, border: "1px solid #ccc" }}>
        <p>{`${payload[0].name}: ${percent}%`}</p>
      </div>
    );
  }
  return null;
};

export default function RevenueDistribution() {
  const { revenueDistributionData } = useDashboardContext();
  return (
    <div className="p-4 rounded-lg shadow-md border h-full">
      <h1 className="mb-8 font-medium text-2xl">Revenue Distribution</h1>
      <div className="overflow-auto">
        <ResponsiveContainer height={300}>
          <PieChart width={400}>
            <Pie
              dataKey="value"
              data={revenueDistributionData}
              cx={"50%"}
              cy={"50%"}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
              paddingAngle={5}
            >
              {revenueDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            (<Tooltip content={(props) => <CustomTooltip active={props.active} payload={props.payload} />} />)
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}