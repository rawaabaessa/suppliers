import { Bell, MapPin } from "lucide-react";
import logo from "../../assets/farmlogo.svg";
import { useAuth } from "../../contexts/useAuth";

const Header = () => {
  const { user } = useAuth();
  console.log(user + ",,");
  return (
    <div className="p-4 self-end flex items-center gap-4">
      <Bell size={26} strokeWidth={2.4} className="text-primary" />
      <div className="relative">
        <button className="flex items-center gap-3 bg-white border border-white-border shadow-sm rounded-xl py-2 px-5 cursor-pointer">
          <img
            src={logo}
            className="w-6 h-6 md:w-8 md:h-8"
            width={20}
            height={20}
          />
          <div>
            <span className="block text-xxs md:text-xs font-semibold capitalize">
              {user?.farmer?.farm_name}
            </span>
            <span className="flex items-center gap-1 text-xxs md:text-xs text-gray-green/80 capitalize mt-1">
              <MapPin size={12} strokeWidth={2.4} />
              {user?.farmer?.city}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
