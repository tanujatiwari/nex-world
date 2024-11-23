import React, { FC, PropsWithChildren } from "react";
import Img from "../Img";
import clsx from "clsx";
import { FiInstagram } from "react-icons/fi";
import { SvgArc } from "../../svgs";
interface IProductCard {
  className?: string;
  data: { image: string; text: string };
  variant?: "social";
}
const ProductCard: FC<PropsWithChildren<IProductCard>> = ({
  className,
  data,
  children,
  variant,
}) => {
  return (
    <div
      className={clsx(
        "relative group overflow-hidden rounded-[20px]",
        className
      )}
    >
      <Img
        src={data?.image}
        height={350}
        width={350}
        alt=""
        isLocal
        className="rounded-[20px] h-full w-full group-hover:scale-110 duration-300"
      />

      {children ? (
        children
      ) : variant === "social" ? (
        <div className="absolute bottom-0 right-0 z-10 bg-white p-2 rounded-tl-xl">
          <SvgArc
            className="z-50 bottom-12 right-0 absolute rotate-180"
            width={20}
            height={20}
          />
          <div className="bg-orange-400 flex justify-center items-center rounded-full h-8 w-8">
            <FiInstagram size={16} className="text-white" />
          </div>
          <SvgArc
            className="z-50 bottom-0 -left-5 absolute rotate-180"
            width={20}
            height={20}
          />
        </div>
      ) : (
        <>
          <SvgArc
            className="z-50 bottom-12 absolute -rotate-90"
            width={20}
            height={20}
          />
          <div className="absolute bottom-0 bg-white uppercase font-medium py-3 px-7 rounded-tr-[20px]">
            {data?.text}
            <SvgArc
              className="z-50 bottom-0 -right-5 absolute -rotate-90"
              width={20}
              height={20}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
