import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";

import { useBestSellers } from "../../../hooks/useBestSellers";
import { useState } from "react";
import type { Range } from "../../../services/analytics";
import BtnSpinner from "../../BtnSpinner";

export default function BestSellerChart() {
  const [range, setRange] = useState<Range>("week");

  const { data, isLoading } = useBestSellers(range);

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 input-shadow h-fit">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-light-black/60">Best Sellers</h2>
        <select
          className="bg-white input-shadow px-4 py-2 rounded-lg text-sm appearance-none outline-none"
          value={range}
          onChange={(e) => setRange(e.target.value as Range)}
        >
          <option value="2days">Last 2 Days</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </div>
      {isLoading ? (
        // todo: handle loading state
        <BtnSpinner />
      ) : (
        <div
          style={{
            height: Math.max(data?.length * 38, 180) || 0,
          }}
        >
          <ResponsiveContainer>
            <BarChart
              layout="vertical"
              data={data}
              margin={{
                left: 15,
                right: 10,
              }}
            >
              <CartesianGrid horizontal={false} strokeDasharray="4 4" />

              <XAxis type="number" axisLine={false} tickLine={false} />

              <YAxis dataKey="name" type="category" hide />

              <Bar
                dataKey="sales"
                fill="#6B9E8D"
                radius={[8, 8, 8, 8]}
                barSize={30}
              >
                <LabelList
                  dataKey="name"
                  position="insideRight"
                  fill="#fff"
                  fontSize={13}
                  fontWeight={600}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
