import BestSellerChart from "../../../components/dashboard/charts/BestSellerChart";
import FinancialPerformanceChart from "../../../components/dashboard/charts/FinancialPerformanceChart";
import OrderStatusChart from "../../../components/dashboard/charts/OrderStatusChart";
import Heading from "../../../components/dashboard/Heading";
import StatisticCard from "../../../components/dashboard/StatisticCard";
const Overview = () => {
  return (
    <div>
      {/* todo: modify the gap of card  */}
      <Heading />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        <StatisticCard title="outstanding balance">
          <p className="text-primary text-26 font-semibold">₦ 0.00</p>
          <p className="text-16 text-light-black/80">
            You have no outstanding balance
          </p>
        </StatisticCard>
        <StatisticCard title="Paid This Month">
          <p className="text-primary text-26 font-semibold">400$</p>
          <p className="text-16 text-light-black/80">
            <span className="text-success text-xl">+18% </span> from last month
            this month
          </p>
        </StatisticCard>
        <StatisticCard title="Active Orders">
          <ul className="text-16 text-primary list-disc list-inside">
            <li>24 Pending orders</li>
            <li>6 shipping orders</li>
          </ul>
        </StatisticCard>
        <StatisticCard title="Overdue Payments">
          <p className="text-primary text-26 font-semibold">₦ 0.00</p>
          <p className="text-16 text-light-black/80">
            3 Payments Require Review
          </p>
        </StatisticCard>
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 xl:grid-rows-2 mt-10">
        <div className="xl:col-span-2 xl:row-span-2">
          <FinancialPerformanceChart />
          <div className="mt-10">
            <OrderStatusChart />
          </div>
        </div>
        <BestSellerChart />
      </div>
    </div>
  );
};

export default Overview;
