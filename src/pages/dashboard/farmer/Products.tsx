import { Edit2, Plus, Search } from "lucide-react";
import Heading from "../../../components/dashboard/Heading";
import TableCard from "../../../components/dashboard/TableCard";
import TableHeader from "../../../ui/dashboard/TableHeader";
import TableData from "../../../ui/dashboard/TableData";
import Table from "../../../ui/dashboard/Table";
import ProductSwiper from "../../../components/dashboard/ProductSwiper";
import { useProductsFilter } from "../../../hooks/useProducts";
import { formatPrice, formatQuantity } from "../../../utils/formatters";
import { getStockStatus } from "../../../utils/stockStatus";
import Badge from "../../../ui/Badge";
import { useProductStats } from "../../../hooks/useProductState";
import { useState } from "react";
import type { ProductStatus } from "../../../services/ProductService";

const Products = () => {
  const [orderFilter, setOrderFilter] = useState<ProductStatus>("all");
  const { data: state } = useProductStats();
  const { data: products } = useProductsFilter(orderFilter);

  return (
    <div>
      <Heading title="Products">
        <button className="flex items-center gap-1 py-2 px-4 bg-light-green text-white text-sm md:text-16 rounded-3xl cursor-pointer">
          <span>Add items</span>
          <Plus size={14} />
        </button>
      </Heading>
      <ProductSwiper />
      <div className="mb-10 flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex items-center w-3xs bg-white py-2 px-4 input-shadow rounded-3xl">
          <Search size={14} className="text-primary" />
          <input
            type="text"
            className="pl-2 w-full outline-none"
            placeholder="Search"
          />
        </div>
        <div>
          <select
            className="bg-white input-shadow px-4 py-2 rounded-lg text-sm appearance-none outline-none"
            value={orderFilter}
            onChange={(e) => setOrderFilter(e.target.value as ProductStatus)}
          >
            <option value="all">All Products</option>
            <option value="available">Available</option>
            <option value="running_low">Running Low</option>
            <option value="out_of_stock">Out Of Stock</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <TableCard
          title="Total Products"
          quantity={state?.total_products ?? 0}
          variant="success"
        />
        <TableCard
          title="Running Low Items"
          quantity={state?.low_stock ?? 0}
          variant="warning"
        />
        <TableCard
          title="Out of Stock items"
          quantity={state?.out_of_stock ?? 0}
          variant="danger"
        />
        <TableCard
          title="Total Inventory"
          quantity={state?.shipping_orders ?? 0}
          variant="info"
        />
      </div>
      <Table>
        <thead>
          <tr className="bg-white-border capitalize">
            <TableHeader title="Item" classname="rounded-l-xl" />
            <TableHeader title="price" />
            <TableHeader title="soled" />
            <TableHeader title="quantity available" />
            <TableHeader title="stock status" />
            <TableHeader title="edit" classname="rounded-r-xl" />
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => {
            const stock = getStockStatus(item.quantity);
            return (
              <tr key={item.id}>
                <TableData>{item.name}</TableData>
                <TableData>{formatPrice(item.price, item.min_order)}</TableData>
                <TableData>{item.quantity_sold} Kg</TableData>
                <TableData>{formatQuantity(item.quantity)}</TableData>
                <TableData>
                  <Badge {...stock} />
                </TableData>
                <TableData>
                  <button>
                    <Edit2 size={14} className="text-center" />
                  </button>
                </TableData>
              </tr>
            );
          })}
          {products?.length === 0 && (
            <tr>
              <h1>No Entries</h1>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
