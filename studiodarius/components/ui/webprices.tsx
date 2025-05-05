import Image from "next/image";
import {ArrowRight, Check} from "lucide-react";

export default function Webprices() {
    return (
        <div className="w-full flex flex-col lg:pl-12 lg:pr-12 mt-10 xl:mt-18">
            <div className="font-sans font-thin m-auto text-2xl md:text-4xl lg:text-6xl">Prispaket</div>
            <div className="mt-10 gap-5 flex flex-col xl:flex-row justify-between">
                <div className="bg-[rgba(217,217,217,0.45)] w-[95%] h-[420px] flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Bas</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-lg">Från 3995 kr</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm m-auto text-center md:text-lg xl:text-xl xl:pl-2 xl:pr-2">Perfekt för dig som behöver en enkel hemsida för att komma igång</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Enkel hemsida (t.ex startsida + kontakt)
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Mobilanpassad design
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Grundläggande SEO
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Publicering och driftsättning
                        </li>
                    </ul>
                </div>
                <div className="bg-[#AEFF2B] w-[95%] h-[420px] flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Standard</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-lg">Från 3995 kr + 199 kr/mån</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm text-center md:text-lg xl:text-xl xl:pl-2 xl:pr-2">För dig som vill ha trygg drift, support och regelbundet underhåll.</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-sm mt-2 md:text-lg">
                            <Check /> Allt i baspaketet
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Hosting & domänhantering
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> 1 timme arbete per månad (ändringar, bilder och nyheter)
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Databashantering
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Tillgång till support via e-post
                        </li>
                    </ul>
                </div>
                <div className="bg-[rgba(217,217,217,0.45)] w-[95%] h-[420px] flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Stor</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-lg">Pris enligt överenskommelse</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm text-center md:text-lg xl:text-xl xl:pl-2 xl:pr-2">För större projekt som kräver mer - t.ex e-handel och kundhantering.</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Intergrationer & specialfunktioner
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Flerspråkighet
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2">
                            <Check /> Löpande utveckling & support
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm md:text-lg mt-2 xl:pr-2">
                            <Check /> Kan genomföras som konsultuppdrag på heltid
                        </li>
                    </ul>
                </div>
            </div>
            <a href="/" className="flex items-center m-auto gap-2 mt-10 font-sans text-md p-4 bg-black text-white rounded-3xl">
                Boka ett samtal
            </a>
        </div>
    );
}