import Heading from "../../../components/dashboard/Heading";
import StatisticCard from "../../../components/dashboard/StatisticCard";

const Analytics = () => {
  return (
    <div>
      <Heading title="Analytics" />
      <main className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <StatisticCard title="Total Revenue">
            <span className="font-bold text-26 text-primary">$1350</span>
            <p className="text-light-black/80 text-16">Next payment 12 May</p>
          </StatisticCard>
          <StatisticCard title="Sales Growth">
            <span className="font-bold text-26 text-primary">+32%</span>
            <p className="text-light-black/80 text-16">
              <span className="text-success">+18% </span>from last month
            </p>
          </StatisticCard>
          <StatisticCard title="Average Order Value">
            <span className="font-bold text-26 text-primary">
              $43.00 <span className="text-light-black text-sm">Per order</span>
            </span>
            <p className="text-light-black/80 text-16">
              <span className="text-success">+12% </span>from last month
            </p>
          </StatisticCard>
          <StatisticCard title="Order Completion Rate">
            <span className="font-bold text-26 text-primary">92%</span>
            <p className="text-light-black/80 text-16">
              Completed Successfully
            </p>
          </StatisticCard>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
