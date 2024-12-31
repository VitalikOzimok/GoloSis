import React from "react";
import Image from "next/image";

import Gucci from "../assets/brend/gucci-logo-1 1.png";
import Vector_1 from "../assets/brend/Vector (1).png";
import Vector from "../assets/brend/Vector.png";

import Victor from "../assets/brend/Victor.png";
import Boy from "../assets/boy.jpg";
import Men from "../assets/men.jpg";
import Men_2 from "../assets/vai.jpg";
import Women from "../assets/vaivai.jpeg";
import Kach from "../assets/kach.jpg";

import { ProductCart } from "@/components/shared/product-cart";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 4,
  });
  const productss = await prisma.product.findMany({
    take: -4,
  });
  return (
    <div className="overflow-x-hidden">
      <section className=" gap-16 md:h-full ">
        <div className="mx-auto w-5/6 items-center justify-between md:flex ">
          <div className=" z-10 pt-12 pb-10 ">
            <span className="font-s3 font-extrabold uppercase text-7xl max-lg:text-5xl max-md:text-7xl max-xs:text-4xl   whitespace-nowrap flex max-md:justify-center ">
              Find Clothes <br /> that matches <br /> your style
            </span>

            <p className="font-s5 mt-8 text-sm ">
              More than 5,000 fashion brands of clothing, shoes, and accessories
              with discounts. <br /> For the whole family. A large selection of
              clothes. Famous brands. The benefit is up to -85%. New Collections
              2024
            </p>
            <div className="pt-5">
              <button className="p-3 px-14 max-md:w-full border-[1px] hover:bg-suki-100 hover:text-black  hover:border-gray-300 transition  bg-black text-white rounded-full text-md ">
                Shop Now
              </button>
            </div>

            <div className="flex flex-row pt-7 gap-5 max-md:justify-center">
              <div className="flex flex-col">
                <h1 className="sis">200+</h1>
                <span>International Brands</span>
              </div>
              <div className="flex flex-col">
                <h1 className="sis">200+</h1>
                <span>International Brands</span>
              </div>
              <div className="flex flex-col">
                <h1 className="sis">200+</h1>
                <span>International Brands</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 ">
            <Image src={Boy} alt="BoyGirl" className="h-full w-auto " />
          </div>
        </div>
      </section>
      <div className="h-auto bg-black">
        <div className=" w-5/6 mx-auto  flex max-md:flex-col justify-between items-center py-9  max-lg:hidden">
          <Image src={Vector} alt="s" />
          <Image src={Gucci} alt="s" />
          <Image src={Vector_1} alt="s" />

          <Image src={Victor} alt="s" />
        </div>
      </div>
      <section
        className=" w-5/6 border-b py-12 border-gray-300 mx-auto flex flex-col  justify-center
       items-center"
      >
        <h1 className="py-8 text-5xl uppercase font-s3 font-extrabold">
          Top Selling
        </h1>
        <div className="grid  grid-cols-4 w-auto mx-auto gap-5 ">
          {products?.length > 0 ? (
            products.map((product) => (
              <ProductCart
                key={product.id}
                price={product.price}
                old_price={product.oldPrice}
                name={product.name}
                imageUrl={product.imageUrl}
                id={product.id}
              />
            ))
          ) : (
            <p className="no-results">No sturtup found</p>
          )}
        </div>

        <div className="pt-8">
          <button className="rounded-full border-[1px] border-gray-200  p-3 px-14 hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </section>
      <section
        className=" w-5/6  mx-auto flex flex-col py-12 justify-center
       items-center"
      >
        <h1 className="py-8 text-5xl uppercase font-s3 font-extrabold">
          New Arrivals
        </h1>
        <div className="grid  grid-cols-4  mx-auto gap-5 ">
          {productss?.length > 0 ? (
            productss.map((product) => (
              <ProductCart
                key={product.id}
                price={product.price}
                old_price={product.oldPrice}
                name={product.name}
                imageUrl={product.imageUrl}
                id={product.id}
              />
            ))
          ) : (
            <p className="no-results">No sturtup found</p>
          )}
        </div>
        <div className="pt-8">
          <button className="rounded-full border-[1px] border-gray-200  p-3 px-14 hover:bg-black hover:text-white transition">
            View All
          </button>
        </div>
      </section>
      <section className=" rounded-xl bg-gray-100 pb-8">
        <h1 className="py-8 text-3xl uppercase font-s3 font-extrabold items-center flex justify-center">
          browse by dress style
        </h1>
        <div className="w-5/6 mx-auto flex flex-col gap-3 items-center justify-center">
          <div className="grid grid-cols-[2fr,1fr] gap-4">
            <div className=" rounded-xl  bg-white relative overflow-hidden max-h-72 transition duration-500 hover:text-violet-400">
              <p className="absolute  p-5 font-s5  font-extrabold text-2xl">
                Formal
              </p>
              <Image
                src={Kach}
                alt="s"
                className=" h-full    object-cover object-right"
              />
            </div>
            <div className=" rounded-xl  bg-white relative overflow-hidden max-h-72 transition duration-500 hover:text-violet-400">
              <p className="absolute  font-s5 p-5  font-extrabold text-2xl">
                Pathy
              </p>
              <Image
                src={Women}
                alt="s"
                className=" h-full     object-cover object-center"
              />
            </div>
          </div>
          <div className="grid h-[280] grid-cols-[1fr,2fr] gap-4 w-full ">
            <div className=" rounded-xl  bg-white relative overflow-hidden max-h-72 transition duration-500 hover:text-violet-400">
              <p className="absolute  p-5 font-s5  font-extrabold text-2xl">
                Casual
              </p>

              <Image
                src={Men_2}
                alt="s"
                className=" h-full   object-cover object-center "
              />
            </div>
            <div className=" rounded-xl  bg-white relative overflow-hidden max-h-72 transition duration-500 hover:text-violet-400">
              <p className="absolute p-5 font-s5  font-extrabold text-2xl">
                Gym
              </p>
              <Image
                src={Men}
                alt="s"
                className=" h-full    object-cover object-center "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
