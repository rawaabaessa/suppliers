import type { LucideIcon } from "lucide-react";

interface JoinStepItemProps {
  title: string;
  description: string;
  icon: LucideIcon;
  img: string;
}

const JoinStepItem = ({
  title,
  description,
  icon: Icon,
  img,
}: JoinStepItemProps) => {
  return (
    <article className="flex flex-col items-center">
      <div className="w-26 h-26 md:w-36 md:h-36 rounded-full overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="relative -mt-4 flex h-38 w-full max-w-38 flex-col items-center rounded-lg bg-green-white px-3 pb-5 pt-8 text-center btn-shadow md:h-48">
        <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full input-shadow bg-green-white text-primary">
          <Icon size={20} strokeWidth={2.2} />
        </div>
        <h3 className="flex min-h-8 shrink-0 items-center justify-center text-xs font-bold text-primary md:min-h-11 md:text-16">
          {title}
        </h3>
        <span className="mx-auto my-3 block h-0.5 w-8 shrink-0 bg-primary/50" />
        <p className="text-xxs md:text-sm leading-snug text-gray-green">
          {description}
        </p>
      </div>
    </article>
  );
};

export default JoinStepItem;
