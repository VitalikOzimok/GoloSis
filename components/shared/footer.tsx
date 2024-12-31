import { Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className=" py-4 relative">
      <section className="w-5/6 mx-auto relative mb-10 bg-black  rounded-xl h-auto">
        <div className="xs:flex  justify-between items-center p-5">
          <div className="text-white py-2 text-3xl  uppercase font-sanss font-extrabold items-center flex flex-col justify-center">
            <h1>Stay upto date about</h1>
            <h1 className="max-md:hidden max-xs:block">ourlatest offers</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex bg-violet-200 p-3 rounded-full gap-2 items-center">
              <Mail className="size-5 text-gray-400" />
              <input
                name="query"
                className="bg-violet-200 w-full"
                placeholder="Enter yuor email adress "
              />
            </div>

            <div className="flex gap-2"></div>

            <button className="bg-white p-3 px-14 rounded-full text-md ">
              <span className="font-s5">Подписаться</span>
            </button>
          </div>
        </div>
      </section>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <span className="text-2xl font-extrabold uppercase">Shop.co</span>
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
