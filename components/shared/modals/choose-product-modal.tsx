"use client";

import { cn } from "@/lib/utils";
import React from "react";

import { DialogContent, Dialog } from "@/components/ui/dialog";

import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@type/prisma";
// import { ProductItem } from "@prisma/client";
import {
  mapColorType,
  mapProductSize,
  ColorType,
  ProductSize,
  productSizes,
  colorTypes,
} from "@/constants/product";
import { GroupVariants } from "../group-vatiants";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const [size, setSize] = React.useState<ProductSize>(2);
  const [type, setType] = React.useState<ColorType>(1);
  const textDetails = `${mapProductSize[size]} , ${mapColorType[type]} цвет`;
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0  max-w-[810px] max-md:max-w-[500px]  rounded-md  scrollbar  min-h-[450px] bg-white ",
          className
        )}
      >
        <div className="flex justify-center max-md:flex-col  w-full h-auto realtion">
          <div className=" flex-shrink-0 max-md:mx-auto">
            <img src={product.imageUrl} alt="s" height={600} width={400} />
          </div>

          <div className="flex flex-col gap-3 w-full p-5 h-full overflow-x-hidden ">
            <h1 className=" text-3xl  font-s5 ">{product.name}</h1>
            <h1 className="text-gray-400">{textDetails}</h1>

            <div className="flex gap-3 overflow-hidden items-center ">
              <h2 className="text-lg font-bold">${product.price}</h2>
              <h2 className="line-through text-lg font-bold text-gray-400">
                ${product.oldPrice}
              </h2>
              {product.price && product.oldPrice && (
                <h2 className="rounded-full bg-red-100 text-red-500 text-xs p-[3px] font-medium">
                  -
                  {Math.round(
                    (product.oldPrice - product.price) /
                      (product.oldPrice / 100)
                  )}
                  %
                </h2>
              )}
            </div>

            <span className="bg-black/30 w-full h-[1px] mx-1" />
            <span>Select colors</span>
            <div>
              <GroupVariants
                items={colorTypes}
                value={String(type)}
                onClick={(value) => setType(Number(value) as ColorType)}
              />
            </div>

            <span className="bg-black/30 w-full  h-[1px] mx-1" />
            <span>Choose Size</span>
            <div>
              <GroupVariants
                items={productSizes}
                value={String(size)}
                onClick={(value) => setSize(Number(value) as ProductSize)}
              />
            </div>
            <span className="bg-black/30 w-full h-[1px] mx-1" />
            <div className="flex gap-3   mb-4 ">
              <div className="flex bg-suki-100 rounded-full p-3 justify-between gap-3 border-[1px] border-violet-400">
                <h1>-</h1>
                <h1>1</h1>
                <h1>+</h1>
              </div>
              <button className="bg-black text-white rounded-full p-3 w-[230px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
