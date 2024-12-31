import { prisma } from "@/prisma/prisma-client";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });
  return (
    <>
      <section className="w-5/6 mx-auto pt-10">
        <div className="flex justify-center max-md:flex-col  w-full h-auto gap-10">
          <div className=" flex-shrink-0">
            <img
              src={product?.imageUrl}
              alt="s"
              height={700}
              width={500}
              className="rounded-xl border-[1px] border-violet-300"
            />
          </div>
          <div className="flex flex-col gap-3 w-2/4 relative">
            <h1 className=" text-3xl uppercase font-sanss font-extrabold">
              {product?.name}
            </h1>
            <span>star228</span>

            <span className="bg-black/30 w-full h-[1px] mx-1"></span>
            <span>Select colors</span>
            <div className="grid grid-cols-5 gap-1 ">
              <div className="rounded-full bg-black h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-white h-[37px] w-[37px] border-[1px] border-gray-400" />
              <div className="rounded-full bg-violet-500 h-[37px] w-[37px] border-[1px] border-gray-400" />
            </div>

            <span className="bg-black/30 w-full h-[1px] mx-1"></span>
            <span>Choose Size</span>
            <ul className="pt-3 ">
              <div className="flex gap-1">
                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white">
                  XX-Small
                </li>

                <li className="bg-suki-100 rounded-full text-gray-500 px-5 p-2 hover:bg-black hover:text-white ">
                  Small
                </li>
              </div>
            </ul>
            <span className="bg-black/30 w-full h-[1px] mx-1"></span>
            <div className="flex gap-3 absolute bottom-0">
              <div className="flex bg-suki-100 rounded-full p-3 justify-between gap-3">
                <h1>-</h1>
                <h1>1</h1>
                <h1>+</h1>
              </div>
              <button className=" bg-black text-white rounded-full p-3 w-full">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
