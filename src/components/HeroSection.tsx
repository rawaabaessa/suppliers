import { heroData, heroStatics } from "../data/heroSectionData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import heroImg from "../assets/heroImg.svg";

const HeroSection = () => {
  return (
    <section className="py-10 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-primary">
              Fresh Produce For Restaurants
              <br />
              <span className="text-light-green">
                Direct From Trusted Suppliers
              </span>
            </h1>

            <p className="mt-6 text-lg text-light-black max-w-md">
              Save time, reduce sourcing challenges, and connect with trusted
              suppliers and farmers through a single platform built for
              businesses.
            </p>

            <div className="flex gap-4 mt-8">
              <Button variant="filled">Start Selling</Button>
              <Button variant="outline">Browse Products</Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {heroData.map((item) => {
                return (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src={item.img} alt="feature" />
                    </div>
                    <h4 className="mt-3 font-semibold text-primary text-center">
                      {item.title}
                    </h4>
                    <p className="text-sm text-primary text-center">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src={heroImg}
              alt=""
              className="w-full h-[550px] object-cover rounded-3xl"
            />

            {/* Floating Stats */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-white-border rounded-3xl shadow-2xl px-8 py-6 w-[90%] lg:w-[110%]">
              <div className="grid grid-cols-4 text-center gap-4">
                {heroStatics.map((item) => {
                  return (
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {item.count}
                      </h3>
                      {item.title.split(" ").map((word, i) => (
                        <p key={i} className="text-sm text-black font-medium">
                          {word}
                        </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
