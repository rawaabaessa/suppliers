import { MapPin } from "lucide-react";

const Location = ({ opacity, title }: { opacity: number; title: string }) => {
  return (
    <div className="flex items-center gap-1">
      <MapPin size={12} className={`text-gray-green/${opacity}`} />
      <span
        className={`capitalize text-gray-green/${opacity} text-xxs md:text-sm`}
      >
        {title}
      </span>
    </div>
  );
};

export default Location;
