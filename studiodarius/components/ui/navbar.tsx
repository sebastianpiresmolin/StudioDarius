'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const pathname = usePathname();

    const isWeb = pathname.startsWith("/web");
    const isPhoto = pathname.startsWith("/photo");

    return (
        <nav className="w-full font-sans pr-12 pl-12 pt-2 flex items-center justify-between">
            <div className="w-1/3">
                <div className="flex items-center text-md font-normal">
                    {/* Photo Link */}
                    <Link href="/photo">
                        <div
                            className={`flex items-center text-md font-normal ${
                                isWeb ? "opacity-30" : "opacity-100"
                            }`}
                        >
                            <img src="/camera.png" alt="Camera Icon" className="w-5 h-5 mr-1" />
                            <h3>Fotografi</h3>
                        </div>
                    </Link>

                    <h3 className="pr-2 pl-2 text-3xl">/</h3>

                    {/* Web Link */}
                    <Link href="/web">
                        <h3
                            className={`flex items-center ${
                                isPhoto ? "opacity-30" : "opacity-100"
                            }`}
                        >
                            <span className="text-orange-300">&lt;/&gt;</span> Webbutveckling
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="w-1/3">
                <Image src={'/DARIUS..png'} alt={'Studio Darius'} height={500} width={500} className="w-[270px] m-auto" />
            </div>
            <div className="w-1/3 flex flex-row-reverse">
                <ul className="flex gap-10">
                    <li className="flex items-center text-md font-normal"><a href='#'>Tjänster</a></li>
                    <li className="flex items-center text-md font-normal"><a href='#'>Priser</a></li>
                    <li className="flex items-center text-md font-normal"><a href='#'>Kontakt</a></li>
                </ul>
            </div>
        </nav>
    );
}