import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "./Heading";
import { supplier } from "../data/suppliers";
import SupplierCard from "./SupplierCard";

const NearBySuppliers = () => {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between mb-5">
          <Heading>Nearby Suppliers</Heading>
          <Button variant="flat">
            <p className="flex items-center text-xs md:text-2xl">
              View all <ChevronRight className="text-xs md:text-2xl" />
            </p>
          </Button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {supplier.map((item) => {
            return <SupplierCard supplier={item} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default NearBySuppliers;
