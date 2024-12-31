import React from "react";

import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  old_price?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCart: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
  old_price,
}) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col   hover:scale-105 duration-200 p-1  max-h-[330px] border-[1px] border-violet-200 rounded-xl">
        <div className=" w-auto h-[330px]  object-cover object-center flex   justify-center overflow-hidden items-center rounded-xl">
          <img className="w-[250px] h-auto" src={imageUrl} alt={name} />
        </div>
        <p className="font-bold ">{name}</p>
        <h1>star 228</h1>
        <div className="flex gap-3 items-center">
          <h2 className="text-lg font-bold">${price}</h2>
          <h2 className="line-through text-lg font-bold text-gray-400">
            ${old_price}
          </h2>
          {price && old_price && (
            <h2 className="rounded-full bg-red-100 text-red-500 text-xs p-[3px] font-medium">
              -{Math.round((old_price - price) / (old_price / 100))}%
            </h2>
          )}
        </div>
      </div>
    </Link>
  );
};
