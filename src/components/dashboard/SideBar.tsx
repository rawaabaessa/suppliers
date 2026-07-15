import { NavigationItems } from "../../data/DashboardNavigation";
import logo from "../../assets/supplier.svg";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  return (
    <>
      <div className="flex items-center justify-center py-5">
        <img src={logo} alt="logo" className="w-12 md:w-auto" />
      </div>
      <div>
        <ul className="flex flex-col gap-3">
          {NavigationItems.map((item, index) => {
            return (
              <li key={index}>
                <SideBarItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
