import {ArrowRight} from "lucide-react";

export default function Webhero() {
    return (
        <div className="w-[95%] xl:h-[960px] bg-[url('/landingweb.jpg')] bg-cover bg-center bg-clip-content rounded-2xl mt-2 m-auto">
            <div className="flex flex-col h-full w-full items-center justify-center text-center">
                <h1 className="AudemarsMedium text-8xl leading-tight">DIN SÄKRA WEBB OCH DESIGNPARTNER<br/>PÅ BEGÄRAN</h1>
                <h3 className="font-serif font-medium text-2xl">Fasta priser, inga överraskningar</h3>
                <a href="/" className="flex items-center gap-2 mt-5 font-sans text-xl p-5 bg-black text-white rounded-2xl">
                    Boka ett samtal <ArrowRight />
                </a>
            </div>
        </div>
    );
}