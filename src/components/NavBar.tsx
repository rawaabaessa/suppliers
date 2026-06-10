import Container from "../ui/Container";
import logo from "../assets/supplier.svg";
import { ChevronDown, Menu, Search, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import { locations } from "../data/locationData";

const NavBar = () => {
  const cityOptions = Object.keys(locations);

  return (
    <header className="bg-green-white">
      <Container>
        <div className="flex h-12 items-center justify-between gap-4 md:h-14">
          <img src={logo} alt="Supplier" className="w-24 md:w-26" />

          <div className="hidden flex-1 items-center justify-center gap-8 md:flex lg:gap-12">
            <SearchBar />

            <div className="flex items-center gap-7 lg:gap-9">
              <button className="flex items-center gap-1 text-sm font-medium text-primary">
                sign in \ up
                <ChevronDown size={15} />
              </button>

              <select
                aria-label="City"
                defaultValue=""
                className="h-7 rounded border border-white-border bg-white px-2 text-xs text-gray-green shadow-sm outline-none"
              >
                <option value="" disabled>
                  City
                </option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <button aria-label="Cart" className="text-primary">
                <ShoppingCart size={26} strokeWidth={2.4} />
              </button>
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
    </header>
  );
};

export default NavBar;
