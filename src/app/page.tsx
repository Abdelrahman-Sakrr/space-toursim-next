import Image from "next/image";
import desktopBg from "@/../public/home/background-home-desktop.jpg";
import mobileBg from "@/../public/home/background-home-mobile.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen ">
      <main className="flex flex-col row-start-2 items-center sm:items-start lg:h-screen w-full">
        <Image
          src={desktopBg}
          alt="Home Background"
          className="lg:absolute lg:inset-0 lg:object-cover lg:w-full lg:h-screen lg:block -z-10 hidden"
          fill
        />
        <Image
          src={mobileBg}
          alt="Home Background"
          className="absolute inset-0 object-cover w-full h-screen -z-10 lg:hidden"
          fill
        />
        <div className=" z-10 lg:p-8 flex flex-col lg:flex-row justify-around gap-20 items-center text-white lg:flex lg:justify-evenly  lg:items-end lg:absolute lg:bottom-10">
          <div className="lg:w-1/2 w-full flex flex-col text-center lg:text-start justify-center items-center lg:items-start lg:justify-start lg:mt-20 mt-10">
            <p className="font-barlow mb-5 text-4xl">So You Want To Trav</p>
            <h4 className="lg:my-10 my-5 lg:text-9xl text-7xl font-bellefair uppercase font-bold">
              Space
            </h4>
            <p className="font-barlow lg:w-2/3 w-3/4 leading-tight">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="relative group">
            <Link href="/destination" className="cursor-pointer">
              <button className="bg-white uppercase font-bellefair tracking-widest  lg:text-3xl cursor-pointer relative lg:w-[14.0625rem] lg:h-[14.0625rem] w-[9.375rem] h-[9.375rem] text text-black px-2 py-4 rounded-full">
                explore
                <span className="absolute  -z-10  right-10 bottom-10 left-10 top-10 overflow-hidden text-white rounded-full bg-white group-hover:animate-ping"></span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
