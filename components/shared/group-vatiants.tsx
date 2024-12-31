"use client";
import { cn } from "@/lib/utils";
import React from "react";
type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};
interface Props {
  className?: string;
  items: readonly Variant[];

  onClick?: (Value: Variant["value"]) => void;
  value?: Variant["value"];
}
export const GroupVariants: React.FC<Props> = ({
  items,
  onClick,
  className,
  value,
}) => {
  return (
    <div
      className={cn(
        className,
        "flex justify-between rounded-3xl p-1 select-none gap-1"
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            "flex items-center whitespace-nowrap bg-gray-200 justify-center  hover:bg-black hover:text-white cursor-pointer h-[40px] px-5 flex-1 rounded-3xl transition-all duration-500 text-sm",
            {
              "bg-black text-white shadow": item.value === value,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
