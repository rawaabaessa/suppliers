interface StepItemProps {
  title: string;
  description: string;
  icon: string;
  img: string;
  step: number;
}

const StepItem = ({ title, description, icon, img, step }: StepItemProps) => {
  return (
    <div className={`${step === 2 ? "mt-20" : ""} flex flex-col gap-2`}>
      <div className="relative">
        <div className="w-35 h-35 md:w-64 md:h-64 rounded-full mx-auto overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-light-green flex justify-center">
          <img src={icon} alt={title} className="w-5" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-xs md:text-3xl font-semibold">{title}</p>
        <p className="text-xxs md:text-16 text-center font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepItem;
