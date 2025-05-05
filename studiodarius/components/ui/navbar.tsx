'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();

    const isWeb = pathname.startsWith("/web");
    const isPhoto = pathname.startsWith("/photo");

    return (
        <nav className="w-full font-sans pl-3 pr-3 md:pl-6 md:pr-6 xl:pr-14 xl:pl-14 pt-2 flex items-center justify-between">
            <div className="md:w-1/3 w-3/5">
                <div className="flex items-center text-md font-sans">
                    {/* Photo Link */}
                    <Link href="/photo">
                        <div
                            className={`flex items-center text-md font-sans ${
                                isWeb ? "opacity-30" : "opacity-100"
                            }`}
                        >
                            <img src="/camera.png" alt="Camera Icon" className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                            <h3 className="md:text-md text-xs xl:text-[16px]">Fotografi</h3>
                        </div>
                    </Link>

                    <h3 className="pr-1 pl-1 xl:text-3xl text-sm xl:text-[18px]">/</h3>

                    {/* Web Link */}
                    <Link href="/web">
                        <h3
                            className={`flex font-sans items-center md:text-md text-xs xl:text-[16px] ${
                                isPhoto ? "opacity-30" : "opacity-100"
                            }`}
                        >
                            <span className="text-orange-300 xl:text-md text-xs xl:text-[16px] pr-1">&lt;/&gt;</span> Webbutveckling
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="w-2/5 md:w-1/3 flex items-center justify-end">
                <Image src={'/DARIUS..png'} alt={'Studio Darius'} height={500} width={500} className="xl:w-[270px] md:w-[160px] w-[120px] md:m-auto" />
            </div>
            <div className="w-1/3 flex-row-reverse hidden md:flex">
                <ul className={`gap-6 ${
                        isPhoto || isWeb ? "flex" : "hidden"
                }`}
                >
                    <li className="flex items-center text-md font-normal"><a href='#priser'>Priser</a></li>
                    <li className="flex items-center text-md font-normal"><a href='#kontakt'>Kontakt</a></li>
                </ul>
            </div>
        </nav>
    );
}