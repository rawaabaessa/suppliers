import Container from "../ui/Container";
import logo from "../assets/supplier.svg";
import { Menu, Search, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import SelectList from "../ui/SelectList";
import { locations } from "../data/locationData";

const NavBar = () => {
  const cityOptions = Object.keys(locations).map((city) => ({
    value: city,
    label: city,
  }));
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between gap-0 md:gap-12">
          <img src={logo} alt="logo" />
          <div className="hidden md:flex flex-1 items-center justify-between">
            <SearchBar />
            <div className="flex items-center gap-10">
              <button className="text-primary text-xl">sign in \ up</button>
              <SelectList options={cityOptions} />
              <ShoppingCart className="text-primary" size={40} />
            </div>
          </div>
          <div className="flex md:hidden">
            <div className="flex items-center gap-3">
              <button
                className="flex items-center justify-center input-shadow h-8 w-8 rounded-full"
                aria-label="menu"
              >
                <Search size={24} className="text-primary" />
              </button>
              <button aria-label="menu ">
                <Menu className="text-primary" size={24} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
