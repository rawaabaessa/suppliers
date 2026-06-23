import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  isAuthenticated?: boolean;
  variant?: "desktop" | "mobile";
};

const accountLinks = [
  { label: "Profile", to: "/" },
  { label: "orders", to: "/" },
  { label: "favorite suppliers", to: "/" },
];

const settingLinks = [
  { label: "Language", to: "/" },
  { label: "Support", to: "/" },
];

const SideMenu = ({
  isOpen,
  onClose,
  onLogout,
  isAuthenticated = true,
  variant = "desktop",
}: SideMenuProps) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const isMobile = variant === "mobile";

  const handleLogout = () => {
    onLogout();
    onClose();
    navigate("/login");
  };

  const menuContent = (
    <aside
      className={`bg-white text-light-black shadow-lg ${
        isMobile
          ? "fixed right-0 top-0 z-50 flex h-dvh w-52 flex-col rounded-l-lg px-4 py-5"
          : "absolute right-0 top-12 z-40 w-40 rounded-lg border border-white-border px-4 py-3"
      }`}
      aria-label="Account menu"
    >
      {isMobile && (
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-full text-primary hover:bg-green-50/50"
          >
            <X size={20} />
          </button>
        </div>
      )}

      <div className="flex flex-col gap-6 text-xs">
        <section>
          <h3 className="mb-2 text-xs font-normal text-gray-green/70">
            account
          </h3>
          <nav className="flex flex-col gap-3">
            {accountLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={onClose}
                className="hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </section>

        <section>
          <h3 className="mb-2 text-xs font-normal text-gray-green/70">
            Setting
          </h3>
          <nav className="flex flex-col gap-3">
            {settingLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={onClose}
                className="hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>
        </section>
      </div>

      {isAuthenticated ? (
        <button
          type="button"
          onClick={handleLogout}
          className={`${isMobile ? "mt-auto" : "mt-8"} text-left text-xs hover:text-primary`}
        >
          Log out
        </button>
      ) : (
        <Link
          to="/login"
          onClick={onClose}
          className={`${isMobile ? "mt-auto" : "mt-8"} text-xs hover:text-primary `}
        >
          Sign in / up
        </Link>
      )}
    </aside>
  );

  if (!isMobile) {
    return menuContent;
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close menu overlay"
        className="fixed inset-0 z-40 bg-black/20 md:hidden"
        onClick={onClose}
      />
      {menuContent}
    </>
  );
};

export default SideMenu;
