"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
// import { getCartItemDetails } from "@/lib";
// import { useCartStore } from "@/store";
import { ProductSize, ColorType } from "@/constants/product";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  //   const [totalAmount, fetchCartItems, items] = useCartStore((state) => [
  //     state.totalAmount,
  //     state.fetchCartItems,
  //     state.items,
  //   ]);
  //   React.useEffect(() => {
  //     fetchCartItems();
  //   }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-gray-100">
        <SheetHeader>
          <SheetTitle>
            В корзинe <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>
        <div className="-mx-6 mt-5  h-[329px] overflow-auto  flex-1">
          <div className="mb-2">
            <CartDrawerItem
              id={1}
              imageUrl={
                "https://sun9-41.userapi.com/impg/QtTcAQ4C3VyWtFpWHYPPMDafy7RqRPv1LN1UFA/TsA-nNOlhFw.jpg?size=1279x1208&quality=96&sign=638e8f2d98fbca00ff4e28d832779465&type=album"
              }
              name={"Sisi"}
              details="sdsd"
              price={1500}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
              </span>
              <span className="font-bold text-lg">500 рублей</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
