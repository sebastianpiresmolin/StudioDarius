import Image from "next/image";
import {ArrowRight, Check} from "lucide-react";

export default function Webprices() {
    return (
        <div className="w-full flex flex-col pl-12 pr-12 mt-36">
            <div className="font-sans font-thin text-6xl">Prispaket</div>
            <div className="mt-10 flex justify-between">
                <div className="bg-[rgba(217,217,217,0.45)] w-[520px] h-[350px] flex flex-col rounded-2xl">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-xl">Bas</h3>
                        <h3 className="font-sans text-xl font-bold">Från 2995 kr</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-md">Perfekt för dig som behöver en enkel hemsida för att komma igång</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Enkel hemsida (t.ex startsida + kontakt)
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Mobilanpassad design
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Grundläggande SEO
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Publicering och driftsättning
                        </li>
                    </ul>
                </div>
                <div className="bg-[#AEFF2B] w-[520px] h-[350px] flex flex-col rounded-2xl">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-xl">Standard</h3>
                        <h3 className="font-sans text-xl font-bold">Från 2995 kr + 199 kr/mån</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-md">För dig som vill ha trygg drift, support och regelbundet underhåll.</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Allt i baspaketet
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Hosting & domänhantering
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> 1 timme arbete per månad (ändringar, bilder och nyheter)
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Databashantering
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Tillgång till support via e-post
                        </li>
                    </ul>
                </div>
                <div className="bg-[rgba(217,217,217,0.45)] w-[520px] h-[350px] flex flex-col rounded-2xl">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-xl">Stor</h3>
                        <h3 className="font-sans text-xl font-bold">Pris enligt överenskommelse</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-md">För större projekt som kräver mer - t.ex e-handel och kundhantering.</p>
                    </div>
                    <Image className="m-auto mt-5 mb-0 opacity-20" src={"/line.png"} alt={"seperator line"} width={480} height={5}/>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Intergrationer & specialfunktioner
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Flerspråkighet
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Löpande utveckling & support
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-lg mt-2">
                            <Check /> Kan genomföras som konsultuppdrag på heltid
                        </li>
                    </ul>
                </div>
            </div>
            <a href="/" className="flex items-center m-auto gap-2 mt-10 font-sans text-xl p-5 bg-black text-white rounded-3xl">
                Boka ett samtal <ArrowRight />
            </a>
        </div>
    );
}