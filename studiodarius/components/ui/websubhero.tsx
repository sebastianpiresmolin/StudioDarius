import {ArrowRight} from "lucide-react";

export default function Websubhero() {
    return (
            <div>
                <div className="flex w-full items-center mt-8">
                    <div className="flex-col w-1/2 items-center">
                        <h1 className="font-sans text-6xl font-thin mb-14 w-2/3 m-auto">
                            Er nästa <span className="font-serif text-6xl">design partner</span>
                        </h1>
                        <div className="flex flex-col m-auto w-2/3 ">
                            <p className="font-sans text-md">
                                Vi tror på långsiktiga samarbeten – särskilt om du verkligen bryr dig om design. Vi är inte bara pixel-leverantörer, utan snarare ditt externa webbdesignteam.<br/><br/>
                                Med vår erfarenhet och förståelse för digitala miljöer kan vi fatta beslut som gynnar både användaren och verksamheten.
                            </p>
                            <a href="/" className="flex items-center gap-2 mt-5 font-sans text-xl p-5 w-fit bg-black text-white rounded-2xl">
                                Boka ett samtal <ArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img className="w-2/3 rounded-2xl m-auto" src={'/dariuspad.png'} alt={"black ipad cover imprinted with Studio Darius"}/>
                    </div>
                </div>
            </div>
    );
}