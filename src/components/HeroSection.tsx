import { heroData } from "../data/heroSectionData";
import Button from "../ui/Button";
import Container from "../ui/Container";
import heroImg from "../assets/heroImg.svg";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row ">
          <div>
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-primary text-2xl md:text-4xl font-bold">
                Everything Your Business Needs <br />{" "}
                <span className="text-light-green">Direct From The Source</span>
              </h1>
              <p className="text-gray-green text-lg">
                {" "}
                Save time, reduce sourcing challenges, and connect with trusted
                suppliers and farmers through a single platform built for
                businesses.
              </p>
              <div className="flex items-center gap-3">
                <Button variant="filled">Bracome a suppliers</Button>
                <Button variant="outline">Explore product</Button>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-18">
              {heroData.map((data, index) => {
                return (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <img className="w-8" src={data.img} alt="img" />
                    <span className="text-primary text-center text-md font-medium">
                      {data.title}
                    </span>
                    <p className="text-primary text-sm text-center">
                      {data.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img src={heroImg} alt="hero img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
