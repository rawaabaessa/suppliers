import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { orderStatusData } from "../../../data/chartData";
import { ChevronDown } from "lucide-react";
import { useOrderStatus } from "../../../hooks/useOrderStatus";

export default function OrderStatusChart() {
  const { data = [] } = useOrderStatus();
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 input-shadow">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-light-black/60">Order Status</h2>

        <button className="flex items-center gap-1 font-semibold rounded-lg input-shadow bg-white px-6 py-1 text-sm">
          Today <ChevronDown size={16} className="mt-1" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-2 md:gap-8">
        <div className="relative h-56 w-56">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={85}
                paddingAngle={4}
                stroke="transparent"
              >
                {orderStatusData.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold">{data?.length | 0}</h2>
            <p className="text-gray-500 text-sm">Total Orders</p>
          </div>
        </div>

        <div className="space-y-5">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <span className="text-gray-600 text-sm md:text-16">
                {item.name}
              </span>

              <span className="font-semibold text-sm md:text-16">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
