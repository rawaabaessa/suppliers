import { stepFeaturesData, stepsData } from "../data/stepsData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import StepItem from "./StepItem";

const StepsSection = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-3 lg:justify-between">
            <div>
              <h2 className="text-[20px] md:text-4xl font-bold text-primary-800">
                Fresh Produce, Delivered Smarter
              </h2>
              <span className="text-light-green text-16 md:text-2xl">
                From Farm to Business in Three Simple Steps
              </span>
            </div>
            <div className="self-end">
              <Button>Order Now</Button>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center gap-5">
            {stepsData.map((item, index) => {
              return <StepItem key={index} {...item} step={index + 1} />;
            })}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-2 bg-light-green rounded-2xl w-3/4 p-5 mx-auto">
            {stepFeaturesData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center gap-1
                            ${
                              // موبايل: العنصر الأول والثالث فقط
                              index % 2 === 0 ? "border-r border-white/20" : ""
                            }
                            ${
                              // ديسكتوب: كل العناصر ما عدا الأخير
                              index !== stepFeaturesData.length - 1
                                ? "md:border-r md:border-white/20"
                                : "md:border-r-0"
                            }`}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-3 h-3 md:w-6 md:h-6"
                  />
                  <p className="text-white text-xxs md:text-16 font-semibold">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StepsSection;
