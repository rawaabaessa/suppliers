import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import Header from "../components/dashboard/Header";
const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside
        className="
          w-20 md:w-60 lg:w-70
          shrink-0
          bg-white
          shadow-md
          transition-[width]
          duration-300
          ease-in-out
        "
      >
        <SideBar />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
