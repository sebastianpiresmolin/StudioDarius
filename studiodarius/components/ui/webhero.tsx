import {ArrowRight} from "lucide-react";

export default function Webhero() {
    return (
        <div className="w-[95%] h-[50vh] xl:h-[820px] bg-[url('/landingweb.jpg')] bg-cover bg-center bg-clip-content rounded-2xl mt-8 lg:mt-2 m-auto">
            <div className="flex flex-col md:gap-2 h-full w-full items-center justify-center text-center">
                <h1 className="AudemarsMedium text-3xl md:text-5xl xl:text-8xl leading-tight">DIN SÄKRA WEBB OCH DESIGNPARTNER<br/>PÅ BEGÄRAN</h1>
                <h3 className="font-serif font-medium md:text-2xl">Fasta priser, inga överraskningar</h3>
                <a href="/" className="flex items-center gap-2 lg:mt-5 mt-10 font-sans text-sm lg:text-xl p-2 md:p-3 bg-black text-white rounded-2xl">
                    Boka ett samtal
                </a>
            </div>
        </div>
    );
}