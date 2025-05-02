
import Image from "next/image";

export default function Weboffer() {
    return (
            <div className="flex flex-col w-full mt-10 md:mt-16 gap-16 2xl:mt-32">
                <h1 className="font-sans font-thin text-6xl flex gap-4 items-center justify-center">
                    <Image src={'/DARIUS..png'} alt={'Studio Darius'} height={500} width={500} className=" w-[250px] md:w-[350px]" />
                </h1>
                <div className="flex flex-col 2xl:flex-row md:flex w-full justify-evenly text-center gap-5">
                    <div className="flex-col items-center justify-center">
                        <Image src={"/offercard1.png"} alt={"Intersecting globes"} height={500} width={500} className="w-[50px] m-auto" />
                        <p className="font-sans font-normal text-center mt-5">Fast pris</p>
                        <p className="font-sans font-light mt-1 pl-2 pr-2">Inga obehagliga överraskningar. Enkel kostnadsanalys</p>
                    </div>
                    <div className="flex-col items-center justify-center">
                        <Image src={"/offercard2.png"} alt={"shiny bauble"} height={500} width={500} className="w-[50px] m-auto" />
                        <p className="font-sans font-normal text-center mt-5">Bekymmerslöst</p>
                        <p className="font-sans font-light mt-1 pl-2 pr-2">Vi löser allt. Verkligen. Från design till utveckling och underhåll.</p>
                    </div>
                    <div className="flex-col items-center justify-center">
                        <Image src={"/offercard3.png"} alt={"Morphing shapes"} height={500} width={500} className="w-[50px] m-auto" />
                        <p className="font-sans font-normal text-center mt-5">Flexibilitet</p>
                        <p className="font-sans font-light mt-1 pl-2 pr-2">Inget är skrivet i sten. Ändringar är inga problem.</p>
                    </div>
                </div>
                <a href="/" className="flex items-center m-auto gap-2 font-sans text-sm md:text-lg p-3 lg:p-5 bg-black text-white rounded-2xl">
                    Se priser
                </a>
            </div>
    );
}