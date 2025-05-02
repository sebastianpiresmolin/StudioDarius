import Image from "next/image";

export default function Weblatestjob() {
    return (
            <div className="flex flex-col w-full items-center mt-16 lg:mt-36">
                <div className="flex flex-col text-center">
                    <h3 className="font-sans font-light md:text-xl">Senaste jobbet</h3>
                    <h3 className="font-sans font-black md:text-xl">Heroes of Hearthglow</h3>
                    <h3 className="font-sans font-thin md:text-xl">Kund: Tempura Tabby</h3>
                    <h3 className="font-sans font-thin md:text-xl">Kategori: Gaming</h3>
                </div>
                <div className="flex flex-col-reverse xl:flex-row md:w-2/3 pl-2 pr-2 lg:pl-0 lg:pr-0 items-center justify-evenly lg:mt-10 mt-4 gap-2">
                    <Image className="md:w-[358px] rounded-xl" src={"/hearthglowdesktop.png"} height={500} width={500} alt={'Printscreen from the website Heroes of hearthglow that depicts a summary of the team members of tempura tabby'} />
                    <Image className="md:w-[800px] rounded-xl" src={"/hearthglowmobile.png"} height={1000} width={1000} alt={'Printscreen from the website Heroes of hearthglow that depicts a summary of the team members of tempura tabby'} />
                </div>
            </div>
    );
}