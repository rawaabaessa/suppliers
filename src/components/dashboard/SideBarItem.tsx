import { NavLink } from "react-router-dom";

interface SidebarItemType {
  name: string;
  href: string;
  icon: React.ComponentType<{ size: number }>;
}

const SideBarItem = ({ item }: { item: SidebarItemType }) => {
  const Icon = item.icon;

  return (
    <NavLink to={item.href}>
      {({ isActive }) => (
        <div className="flex items-center gap-3">
          <div
            className={`
              h-12 w-1.5 shrink-0
              rounded-r-full
              bg-primary
              transition-opacity duration-300
              ${isActive ? "opacity-100" : "opacity-0"}
            `}
          />

          <div
            className={`
              flex w-full items-center gap-3
              rounded-tr-3xl rounded-br-3xl 
              rounded-tl-2xl rounded-bl-2xl
              px-5 py-3
              transition-all duration-300
              ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:bg-primary/10"
              }
            `}
          >
            <Icon size={20} />

            <span className="hidden whitespace-nowrap md:block">
              {item.name}
            </span>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default SideBarItem;
