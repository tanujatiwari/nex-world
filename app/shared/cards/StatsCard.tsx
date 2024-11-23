import { ReactNode } from "react";

const StatsCard = ({
  data,
}: {
  data: {
    title: string;
    subtitle: string;
    icon: ReactNode;
  };
}) => {
  return (
    <div className="lg:flex items-center gap-x-4">
      <div className="h-[62px] w-[62px] lg:mx-0 mx-auto flex justify-center items-center rounded-full border border-secondary">
        {data?.icon}
      </div>
      <div>
        <div className="text-lg font-semibold lg:text-start text-center">
          {data?.title}
        </div>
        <div className="text-secondary lg:text-start text-center">
          {data?.subtitle}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
