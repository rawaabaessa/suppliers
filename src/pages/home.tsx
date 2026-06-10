import BestSellerSection from "../components/BestSellerSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import JoinSupplierSection from "../components/JoinSupplierSection";
import NavBar from "../components/NavBar";
import NearBySuppliers from "../components/NearBySuppliers";
import OffersSection from "../components/OffersSection";
import StepsSection from "../components/StepsSection";

const Home = () => {
  return (
    <div className="pb-20 md:pb-0">
      <NavBar />
      <HeroSection />
      <OffersSection />
      <BestSellerSection />
      <NearBySuppliers />
      <StepsSection />
      <JoinSupplierSection />
      <Footer />
    </div>
  );
};

export default Home;
