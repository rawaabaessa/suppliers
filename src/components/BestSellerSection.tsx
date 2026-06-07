import Container from "../ui/Container";
import Heading from "./Heading";
import Button from "../ui/Button";
import { ChevronRight } from "lucide-react";
import { bestSellers } from "../data/products";
import ItemCard from "./ItemCard";

const BestSellerSection = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between mb-5">
          <Heading>Best Seller</Heading>
          <Button variant="flat">
            <p className="flex items-center text-xs md:text-2xl">
              View all <ChevronRight className="text-xs md:text-2xl" />
            </p>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {bestSellers.map((item, index) => {
            return <ItemCard key={index} {...item} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default BestSellerSection;
