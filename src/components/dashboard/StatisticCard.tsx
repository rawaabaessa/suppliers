import type { ReactNode } from 'react';

type StatisticCardProps = {
  title: string;
  children?: ReactNode;
};

const StatisticCard = ({ title, children }: StatisticCardProps) => {
  return (
    <div className="flex flex-col gap-1 py-4 px-5 border border-white-border bg-white dashboard-shadow rounded-3xl">
      <h2 className="text-16 text-light-black/60 capitalize">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default StatisticCard;
