import Image from "next/image";
import {ArrowRight, Check} from "lucide-react";

export default function Photoprices() {
    return (
        <div className="w-full flex flex-col lg:pl-12 lg:pr-12 mt-10 xl:mt-18">
            <div className="font-sans font-thin m-auto text-2xl md:text-4xl lg:text-4xl">Prispaket</div>
            <div className="mt-10 gap-5 flex flex-col xl:flex-row justify-between text-white">
                <div className="bg-[url('/photooffercard1.png')] bg-cover w-[95%] h-[660px] flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Bröllop & Evemenemang</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-sm">Från 500 kr + 250kr/t *</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm m-auto text-center md:text-lg lg:text-xl xl:text-lg xl:pl-2 xl:pr-2">För dig som vill bevara ögonblicken som betyder mest – när allt händer, och tiden rusar förbi.</p>
                    </div>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans font-light text-sm lg:text-lg 2xl:text-xl mt-2">
                            Heldagsfotografering ( Förberedelser, vigsel, porträtt, middag
                            och fest) men även enstaka timmar eller förlovningar
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Intima porträtt i lugn och ro
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Flexibel fotografering utan tidspress eller väderproblem, går bra att fotograferas en annan dag ifall vädret inte var som ni tänkt er.
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Företagsevent, dop, fester, jubileum, baby showers etc.
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Ett urval bilder inom 24–48h efter eventet
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Printpaket & fotoböcker. Möjlighet att beställa utskrifter, album, tackkort m.m.
                        </li>
                    </ul>
                </div>
                <div className="bg-[url('/photooffercard2.png')] w-[95%] h-[660px] bg-cover flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Barn & Familj</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-sm">Från 250kr/t *</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm text-center md:text-lg lg:text-xl xl:text-lg 2xl:text-xl xl:pl-2 xl:pr-2">För dig som vill bevara stunderna som går förbi alldeles för fort.</p>
                    </div>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans font-light text-sm lg:text-lg 2xl:text-xl mt-2">
                            Avslappnade porträtt med hela familjen ( ca 1–2 timmar )
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Fokus på ett eller flera barn. Lekfullt och stressfritt, med naturliga uttryck
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Nyföddfotografering
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Gravidfotografering ( Vecka 28–36 är vanligast )
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Födelsedagsfotografering / Cake Smash för 1-åringar (eller äldre barn) med rekvisita och tårta
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Printpaket & fotoböcker. Möjlighet att beställa utskrifter, album, tackkort m.m.
                        </li>
                    </ul>
                </div>
                <div className="bg-[url('/photooffercard3.png')] w-[95%] h-[660px] bg-cover flex flex-col rounded-2xl m-auto">
                    <div className="flex justify-between p-5">
                        <h3 className="font-sans text-md md:text-xl xl:text-lg">Djur</h3>
                        <h3 className="font-sans text-md font-bold md:text-xl xl:text-sm">Från 250kr/t *</h3>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm text-center md:text-lg lg:text-xl 2xl:text-xl xl:pl-2 xl:pr-2">För dig som vill fånga ditt djurs hjärta – inte bara dess päls</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-sans font-light text-sm text-center md:text-lg 2xl:text-xl xl:pl-2 xl:pr-2 mt-2">                    Obs: Det går ej att garantera resultat inom låsta timmar då djur har ett eget liv! Fundera på ifall ni kan vara flexibla i hur länge fotograferingen kan pågå.
                        </p>
                    </div>
                    <ul className="mt-5 ml-5 ">
                        <li className="flex items-center font-sans font-light text-sm lg:text-lg  2xl:text-xl mt-2">
                            Individuella porträtt av din djurvän
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Perfekt för sociala medier, minnen eller gåvor
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Djur i rörelse – t.ex. springande hundar, lek i skogen
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Respektfulla porträtt av äldre djur
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Porträtt av flera djur tillsammans eller med hela familjen
                        </li>
                        <li className="flex items-center font-sans gap-2 font-light text-sm lg:text-lg  2xl:text-xl mt-6">
                            Printpaket & fotoböcker. Möjlighet att beställa utskrifter, album m.m
                        </li>
                    </ul>
                </div>
            </div>
            <p className="flex items-center m-auto gap-2 mt-4 font-sans text-md">
                De 5 bästa bilderna ingår alltid i priset. Därefter kostar det 10kr/bild ni vill behålla. Tid för redigering och urval innefattas av timtaxa*
            </p>
        </div>
    );
}