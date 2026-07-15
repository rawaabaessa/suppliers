import { Edit2 } from "lucide-react";
import productImg from "../../assets/items/1.png";
import type { Product } from "../../types/Product";
import { getStockStatus } from "../../utils/stockStatus";

const ProductCard = ({ product }: { product: Product }) => {
  const { variant } = getStockStatus(product.quantity);
  return (
    <div className="relative pb-15">
      <img src={productImg} className="w-full h-52 rounded-3xl object-cover" />
      <div className="absolute left-0 right-0 bottom-10 bg-white p-5 rounded-3xl input-shadow flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-light-green/70 font-semibold text-xl md:text-2xl ">
            {product.name}
          </h2>
          <Edit2 size={12} />
        </div>
        <p className="text-light-black/60">
          <span
            className={`bg-light-${variant} text-${variant} text-xs font-bold py-1 px-2 mr-1 rounded-2xl`}
          >
            {product.quantity}kg
          </span>
          in stock
        </p>
        <p className="text-light-black/60 text-xs">
          <span className="font-bold text-xl md:text-26 text-light-black">
            ${product.price}
          </span>
          /{product.min_order}kg
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
