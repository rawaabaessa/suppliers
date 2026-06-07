import BestSellerSection from "../components/BestSellerSection";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/NavBar";
import OffersSection from "../components/OffersSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <OffersSection />
      <BestSellerSection />
      {/* best sellers */}
    </div>
  );
};

export default Home;
