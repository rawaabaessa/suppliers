import { Filter, Search } from "lucide-react";
import Heading from "../../../components/dashboard/Heading";
import Chips from "../../../ui/Chips";
import TableCard from "../../../components/dashboard/TableCard";

const Orders = () => {
  return (
    <div>
      <Heading title="Orders" />
      <main className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <div className="flex items-center w-3xs bg-white py-2 px-4 input-shadow rounded-3xl">
            <Search size={14} className="text-primary" />
            <input
              type="text"
              className="pl-2 w-full outline-none"
              placeholder="Search"
            />
          </div>
          <div>
            <button className="bg-white flex items-center gap-2 text-light-black/70 py-2 px-6 rounded-3xl input-shadow">
              All orders <Filter size={15} className="text-primary" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Chips title="Today" isActive />
          <Chips title="Last 7 Days" />
          <Chips title="Last month" />
          <Chips title="Last year" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <TableCard title="Completed Orders" quantity={12} variant="success" />
          <TableCard title="Pending Orders" quantity={1} variant="warning" />
          <TableCard title="Canceled Orders" quantity={1} variant="danger" />
          <TableCard title="Shipping Orders" quantity={1} variant="info" />
        </div>
      </main>
    </div>
  );
};

export default Orders;
