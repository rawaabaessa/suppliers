import { joinSupplierSteps } from "../data/joinSupplierSection";
import Button from "../ui/Button";
import Container from "../ui/Container";
import JoinStepItem from "./JoinStepItem";

const JoinSupplierSection = () => {
  return (
    <section>
      <Container>
        <div className="bg-green-50 py-8 px-6 md:px-10 rounded-2xl">
          <div className="max-w-xl">
            <h3 className="capitalize text-white font-bold text-xl md:text-40">
              you have got a <span className="text-primary">farm</span>
            </h3>
            <p className="text-white text-16 md:text-22 max-w-md mt-3">
              Join hundreds of suppliers and businesses already using our
              platform.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-6 gap-x-5 gap-y-8 lg:grid-cols-5 lg:items-start">
            {joinSupplierSteps.map((item, index) => (
              <div
                key={item.title}
                className={`col-span-2 lg:col-span-1 ${
                  index === 3 ? "col-start-2 lg:col-start-auto" : ""
                } ${index === 4 ? "col-start-4 lg:col-start-auto" : ""}`}
              >
                <JoinStepItem {...item} />
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button>Join as a supplier</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinSupplierSection;
