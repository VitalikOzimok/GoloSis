import { SlidersHorizontal } from "lucide-react";
import { prisma } from "@/prisma/prisma-client";
import React from "react";
import { ProductCart } from "@/components/shared/product-cart";

export default async function page() {
  const products = await prisma.product.findMany();

  return (
    <div className="w-5/6 mx-auto ">
      <span>Home {`>`} Shop</span>
      <div className="grid grid-cols-[1fr,3fr] max-lg:block gap-3">
        <section className="w-[300px] h-auto  left-0 border-[1px] border-gray-100 rounded-xl max-lg:hidden ">
          <div className="flex justify-between items-center p-5 ">
            <h1 className="font-bold  text-3xl">Filtres</h1>
            <SlidersHorizontal />
          </div>
          <hr className="bg-gray-400 h-[1px] border-none mx-6" />
          <div className="flex justify-between items-center p-5">
            <ul>
              <li>T-shirts</li>
              <li>Shorts</li>
              <li>Shirts</li>
              <li>Hoodie</li>
              <li>Jeans</li>
            </ul>
            <ul>
              <li>{`>`}</li>
              <li>{`>`}</li>
              <li>{`>`}</li>
              <li>{`>`}</li>
              <li>{`>`}</li>
            </ul>
          </div>

          <hr className="bg-gray-400 h-[1px] border-none mx-6" />
          <div className="p-5">
            <h1 className="font-bold  text-3xl">Colors</h1>
            <div className="grid grid-cols-5 gap-5 pt-5">
              <div className="rounded-full bg-red-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-orange-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-violet-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-blue-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-emerald-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-yellow-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-cyan-300 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-lime-400 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-rose-400 h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-white h-[37px] w-[37px] border-[1px] border-gray-400" />
            </div>
          </div>
          <hr className="bg-gray-400 h-[1px] border-none mx-6" />
          <div className="p-5">
            <h1 className="font-bold  text-3xl">Size</h1>
            <ul className="pt-3 ">
              <div className="flex gap-1">
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  XX-Small
                </li>
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  X-Small
                </li>
              </div>
              <div className="flex gap-1">
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white ">
                  Small
                </li>
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  Medium
                </li>
              </div>
              <div className="flex gap-1">
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white ">
                  Large
                </li>
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  X-Large
                </li>
              </div>
            </ul>
          </div>
          <hr className="bg-gray-400 h-[1px] border-none mx-6" />
          <div className="p-5">
            <h1 className="font-bold  text-3xl">Dress Style</h1>
            <div className="flex justify-between items-center pt-3">
              <ul>
                <li>Casual</li>
                <li>Formal</li>
                <li>Party</li>
                <li>Gym</li>
              </ul>
              <ul>
                <li>{`>`}</li>
                <li>{`>`}</li>
                <li>{`>`}</li>
                <li>{`>`}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center pb-3 px-5">
            <button className="p-3 w-full  border-[1px] hover:bg-suki-100 hover:text-black  hover:border-gray-300 transition  bg-black text-white rounded-full text-md ">
              Apply filter
            </button>
          </div>
        </section>
        <section className=" w-full   ">
          <div className="flex items-center justify-between">
            <div className="flex items-center  justify-between gap-2">
              <h1>Casual </h1>
              <h1>Showing 1-10 of 100 Products Sort by : Most Popular</h1>
            </div>
            <SlidersHorizontal className="lg:hidden" />
          </div>

          <ul className="mt-7 grid  grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-5">
            {products.map(
              (product) =>
                products.length > 0 && (
                  <ProductCart
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    old_price={product.oldPrice}
                  />
                )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
