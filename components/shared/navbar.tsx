"use client";
import React, { useState } from "react";
import { SearchInput } from "./search-input";
import {
  UserRoundPen,
  ShoppingCart,
  Menu,
  ShoppingBag,
  BadgeDollarSign,
  PlaneLanding,
  Croissant,
  User,
} from "lucide-react";
import { Container } from "./container";
import Link from "next/link";
import Boy from "../../app/assets/boy2.jpg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { CartDrawer } from "./cart-drawer";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const flexBetween = "flex items-center justify-between";

  return (
    <Container className="sticky top-0 w-full py-4 bg-white  z-50 shadow-lg shadow-violet-200">
      <nav className={`${flexBetween} gap-4 mx-auto w-5/6`}>
        <Link href={"/"}>
          <span className="text-2xl font-extrabold uppercase">Shop.co</span>
        </Link>

        <div>
          <ul className="flex gap-5  text-lg max-md:hidden font-s5 whitespace-nowrap">
            <Link href={"/shop"}>
              <li>Shop</li>
            </Link>

            <li>On Sale</li>
            <li>New Arrivals</li>
            <Link href={"/brands"}>
              <li>Brands</li>
            </Link>
          </ul>
        </div>

        <SearchInput />

        <div className="flex gap-4 ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu className="hidden max-md:block max-md:size-5 " />
            </SheetTrigger>
            <SheetContent className="bg-white ">
              <SheetHeader>baba</SheetHeader>
              <SheetDescription className="pt-5">
                <div className="ml-5 flex flex-col text-xl font-s5">
                  <ul className="space-y-6">
                    <li className="">
                      <Link
                        href={"/shop"}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <ShoppingBag />
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/on-sale"}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <BadgeDollarSign />
                        On Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/new-arrivals"}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <PlaneLanding />
                        New Arrivals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/brands"}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <Croissant />
                        Brands
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/"}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <User />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/cart"}
                        className="flex items-center gap-5 hover:text-violet-300 transition duration-500"
                      >
                        <ShoppingCart className="max-md:size-5" />
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </SheetDescription>
              <SheetFooter>
                <Image
                  src={Boy}
                  alt="s"
                  height={700}
                  width={400}
                  className="absolute bottom-0 right-0"
                />
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <CartDrawer>
            <ShoppingCart className="max-md:size-5 cursor-pointer hover:scale-110 hover:text-red-400 transition duration-300" />
          </CartDrawer>

          <UserRoundPen className="max-md:size-5 max-md:hidden" />
        </div>
      </nav>
    </Container>
  );
};
