"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useDashboardContext } from '@/context/DashboardContext';

export default function UserGrowth() {

  const { userGrowthData } = useDashboardContext();

  return (
    <>
      <div className="p-4 rounded-lg shadow-md w-[90%] mx-auto border">
        <h1 className="mb-8 font-medium text-4xl">User Growth</h1>
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            width={500}
            height={300}
            data={userGrowthData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="totalUsers" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}