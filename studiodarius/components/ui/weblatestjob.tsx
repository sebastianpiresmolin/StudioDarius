import Image from "next/image";

export default function Weblatestjob() {
    return (
            <div className="flex flex-col w-full items-center mt-36">
                <div className="flex flex-col text-center">
                    <h3 className="font-sans font-light text-xl">Senaste jobbet</h3>
                    <h3 className="font-sans font-black text-xl">Heroes of Hearthglow</h3>
                    <h3 className="font-sans font-thin text-xl">Kund: Tempura Tabby</h3>
                    <h3 className="font-sans font-thin text-xl">Kategori: Gaming</h3>
                </div>
                <div className="flex w-3/4 items-center justify-evenly mt-10">
                    <Image className="w-[358px]" src={"/hearthglowdesktop.png"} height={500} width={500} alt={'Printscreen from the website Heroes of hearthglow that depicts a summary of the team members of tempura tabby'} />
                    <Image className="w-[800px]" src={"/hearthglowmobile.png"} height={1000} width={1000} alt={'Printscreen from the website Heroes of hearthglow that depicts a summary of the team members of tempura tabby'} />
                </div>
            </div>
    );
}