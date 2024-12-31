import { Prisma } from "@prisma/client";
import { categories, products } from "./constans";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";
import { connect } from "http2";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  colorType,
  size,
}: {
  productId: number;
  colorType?: 1 | 2 | 3 | 4 | 5;
  size?: 1 | 2 | 3 | 4;
}) => {
  return {
    productId,
    colorType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User",
        email: "pilteev@gmail.com",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin",
        email: "admin@test.ru",
        password: hashSync("11111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });
  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: 1, colorType: 1, size: 1 }),
      generateProductItem({ productId: 1, colorType: 2, size: 3 }),
      generateProductItem({ productId: 1, colorType: 3, size: 2 }),
      generateProductItem({ productId: 1, colorType: 2, size: 4 }),
      generateProductItem({ productId: 1, colorType: 4, size: 2 }),
    ],
  });
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222222",
      },
    ],
  });
  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
