import Image from "next/image";

export default function Webfooter() {
    return (
        <footer className="flex pb-52 mb-12 mt-24 justify-between w-[95%] m-auto rounded-2xl bg-black">
            <div className="flex flex-col">
                <h1 className="font-serif font-light text-6xl text-white pl-12 pt-12">Låt oss jobba ihop</h1>
                <a className="text-stone-400 font-sans pl-12 pt-12" href="mailto:studiodarius.falkoping@gmail.com">studiodarius.falkoping@gmail.com</a>
            </div>
            <div className="pr-12 pt-12">
                <Image src={'/whitedarius.png'} alt={'Studio Darius'} height={500} width={500} className="w-[400px] h-[85px] md:w-[200px] md:h-[40px]" />
            </div>
        </footer>
    );
}