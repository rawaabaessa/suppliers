import { useEffect, useState } from "react";
import Container from "../ui/Container";
import logo from "../assets/supplier.svg";
import user from "../assets/user-profile.svg";
import { Bell, Menu, Search, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";
import { locations } from "../data/locationData";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const NavBar = () => {
  const cityOptions = Object.keys(locations);
  const { isAuthenticated, logout } = useAuth();
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenus = () => {
    setIsDesktopMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-green-white">
      <Container>
        <div className="flex h-12 items-center justify-between gap-4 md:h-14">
          <img src={logo} alt="Supplier" className="w-24 md:w-26" />

          <div className="hidden flex-1 items-center justify-end gap-8 md:flex lg:gap-12">
            <SearchBar />

            <div className="flex items-center gap-4 lg:gap-5">
              {!isAuthenticated && (
                <Link
                  to={"/login"}
                  className="flex items-center gap-1 text-sm font-medium text-primary"
                >
                  sign in \ up
                </Link>
              )}

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

              <Link to="#" className="text-primary">
                <ShoppingCart size={26} strokeWidth={2.4} />
              </Link>
              {isAuthenticated && (
                <>
                  <button
                    type="button"
                    aria-label="bell"
                    className="text-primary"
                  >
                    <Bell size={26} strokeWidth={2.4} />
                  </button>
                  <div className="relative flex items-center">
                    <button
                      type="button"
                      aria-label="Open account menu"
                      aria-expanded={isDesktopMenuOpen}
                      className="cursor-pointer"
                      onClick={() => setIsDesktopMenuOpen((isOpen) => !isOpen)}
                    >
                      <img src={user} alt="user" className="h-9 w-9" />
                    </button>
                    <SideMenu
                      isOpen={isDesktopMenuOpen}
                      onClose={() => setIsDesktopMenuOpen(false)}
                      onLogout={logout}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="flex md:hidden">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="input-shadow flex h-8 w-8 items-center justify-center rounded-full"
                aria-label="Search"
              >
                <Search size={24} className="text-primary" />
              </button>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="text-primary" size={28} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <SideMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMenus}
        onLogout={logout}
        isAuthenticated={isAuthenticated}
        variant="mobile"
      />
    </header>
  );
};

export default NavBar;
