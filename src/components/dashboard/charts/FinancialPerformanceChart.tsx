import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { financialData } from "../../../data/chartData";
import { useFinancialPerformance } from "../../../hooks/useFinancialPerformance";

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any[];
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl bg-[#3B3B3B] px-3 py-2 text-white shadow-lg">
        <p className="font-semibold">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }

  return null;
};

export default function FinancialPerformanceChart() {
  const { data = [] } = useFinancialPerformance();
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 input-shadow">
      <h2 className="text-light-black/60 mb-6">Financial Performance</h2>

      <div className="h-80 w-full">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6CA997" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#6CA997" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="4 4"
              stroke="#D8D8D8"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#666", fontSize: 13 }}
            />

            <YAxis
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#666", fontSize: 13 }}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#5D8F81",
                strokeWidth: 2,
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#5D8F81"
              strokeWidth={3}
              fill="url(#gradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#5D8F81",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
