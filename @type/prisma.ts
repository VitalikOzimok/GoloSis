import { Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  productitem: ProductItem[];
};
