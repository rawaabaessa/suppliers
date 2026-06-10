import {
  ClipboardList,
  Grid2X2,
  Home,
  Mail,
  Moon,
  ShoppingCart,
  User,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import logo from "../assets/supplier-white.svg";
import applePay from "../assets/apple-pay-svgrepo-com.svg";
import mastercard from "../assets/mastercard-full-svgrepo-com.svg";
import visa from "../assets/visa-svgrepo-com.svg";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const footerLinks = ["Home", "Products", "Suppliers", "support"];

const socialLinks = [
  { label: "Email", icon: Mail },
  { label: "X", icon: FaInstagram },
  { label: "Instagram", icon: FaTwitter },
  { label: "WhatsApp", icon: FaWhatsapp },
];

const mobileNavItems = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Categories", icon: Grid2X2, to: "/" },
  { label: "Cart", icon: ShoppingCart, to: "/" },
  { label: "Orders", icon: ClipboardList, to: "/" },
  { label: "Profile", icon: User, to: "/" },
];

const paymentMethods = [
  { label: "Apple Pay", img: applePay },
  { label: "Visa", img: visa },
  { label: "Mastercard", img: mastercard },
];

const Footer = () => {
  return (
    <>
      <footer className="hidden bg-primary text-white md:block">
        <Container>
          <div className="px-6 py-10">
            <div className="grid grid-cols-[1.5fr_0.4fr_1fr] gap-16">
              <div>
                <img src={logo} alt="logo" />
                <p className="mt-3 max-w-md text-16 leading-snug">
                  Fresh produce marketplace connecting suppliers with
                  restaurants and businesses.
                </p>
              </div>

              <div>
                <h3 className="text-22 font-semibold">Links</h3>
                <nav className="mt-4 flex flex-col gap-2 text-16">
                  {footerLinks.map((item) => (
                    <Link key={item} to="/" className="hover:text-green-50">
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-22 font-semibold">Contact us</h3>
                <div className="mt-5 flex gap-4">
                  {socialLinks.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="/"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-primary"
                    >
                      <Icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="my-10 h-px bg-white/35" />

            <div className="grid grid-cols-3 items-end gap-6">
              <div className="flex gap-5">
                <button
                  type="button"
                  aria-label="Language"
                  className="text-white hover:text-green-50"
                >
                  <Globe2 size={26} />
                </button>
                <button
                  type="button"
                  aria-label="Dark mode"
                  className="text-white hover:text-green-50"
                >
                  <Moon size={26} />
                </button>
              </div>

              <p className="self-center text-center text-xxs text-white/80">
                Copyright @ 2026 supplier .all rights reserved
              </p>

              <div className="flex justify-end gap-2">
                {paymentMethods.map(({ label, img }) => (
                  <div
                    key={label}
                    aria-label={label}
                    className="flex h-10 min-w-16 items-center justify-center rounded-md bg-white px-2"
                  >
                    <img
                      src={img}
                      alt={label}
                      className="max-h-7 max-w-14 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white-border bg-white md:hidden">
        <div className="grid grid-cols-5 px-2 py-2">
          {mobileNavItems.map(({ label, icon: Icon, to }, index) => (
            <Link
              key={label}
              to={to}
              className={`flex flex-col items-center gap-1 text-[9px] font-semibold ${
                index === 0 ? "text-primary" : "text-gray-green"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Footer;
