import Image from "next/image";
import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full h-[100lvh] flex flex-col items-center">
        <h1 className="font-sans text-center font-light text-2xl mt-10">
          Välkommen
          <br/>till
          <br/>
          <span className="font-sans text-3xl font-bold">
            Studio Darius</span>
          <span className="font-bold text-3xl text-orange-300">
            .
          </span>
        </h1>
        <div className="bg-[url('/landingphoto.png')] text-white bg-cover min-w-[86%] max-w-[86%] h-[220px] mt-12 items-center border-[#6B4D38] border-1 shadow-2xl rounded-2xl">
          <div className="w-full h-full bg-[rgba(0,0,0,0.6)] rounded-2xl ">
            <h3
                className={`flex items-center font-sans p-1 text-white justify-center text-xl w-full xl:text-[16px] rounded-t-2xl bg-[rgba(0,0,0,0.6)]`}>
              <img src="/camera.png" alt="Camera Icon" className="w-4 h-4 md:w-5 md:h-5 mr-1" /> Fotografi
            </h3>
            <p className="text-xl font-sans text-center mt-4">Fånga dem perfekta ögonblicken. För bröllop så väl som barn, djur eller företag.</p>
            <div className="w-full flex justify-end mt-5">
              <Link href="/web" className="m-auto pt-3 pb-3 pr-10 pl-10 rounded-2xl text-white font-sans bg-black">
                  Besök
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[url('/landingweb.jpg')] text-white bg-cover min-w-[86%] max-w-[86%] h-[220px] mt-12 items-center border-orange-300 border-1 shadow-2xl rounded-2xl">
          <div className="w-full h-full bg-[rgba(0,0,0,0.6)] rounded-2xl ">
            <h3
                className={`flex items-center font-sans p-1 text-white justify-center text-xl w-full xl:text-[16px] rounded-t-2xl bg-[rgba(0,0,0,0.6)]`}>
              <span className="text-orange-300 xl:text-md text-xs xl:text-[16px] pr-1">&lt;/&gt;</span> Webbutveckling
            </h3>
            <p className="text-xl font-sans text-center mt-4">Professionellt skräddarsydda hemsidor, tjänster och design</p>
            <div className="w-full flex justify-end mt-12">
              <Link href="/web" className="m-auto pt-3 pb-3 pr-10 pl-10 rounded-2xl text-white font-sans bg-black">
                Besök
              </Link>
          </div>
          </div>
        </div>
      </div>
  );
}
