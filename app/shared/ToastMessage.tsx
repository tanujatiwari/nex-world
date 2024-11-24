import clsx from "clsx";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ToastMessage = ({
  type,
  title,
  subtitle,
}: {
  type: "success" | "error";
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex gap-x-3">
      <div
        className={clsx("h-6 w-6 rounded-md flex justify-center items-center", {
          "bg-[#23834f]": type === "success",
          "bg-[#aa4a2a]": type === "error",
        })}
      >
        {type === "success" ? (
          <FaCheck size={10} className="text-white" />
        ) : type === "error" ? (
          <RxCross2 size={14} className="text-white" />
        ) : null}
      </div>
      <div className="text-white gap-y-1">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs">{subtitle}</div>
      </div>
    </div>
  );
};

export default ToastMessage;
