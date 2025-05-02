import {ArrowRight} from "lucide-react";

export default function Websubhero() {
    return (
            <div>
                <div className="flex md:flex-row flex-col w-full items-center mt-8 2xl:mt-36">
                    <div className="flex-col md:w-1/2 items-center">
                        <h1 className="font-sans text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-thin mb-8 lg:mb-10 min-w-full md:w-3/4 text-center">
                            Er nästa <span className="font-serif text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">design partner</span>
                        </h1>
                        <div className="flex flex-col m-auto w-3/4 ">
                            <p className="font-sans font-light text-md">
                                Vi tror på långsiktiga samarbeten – särskilt om du verkligen bryr dig om design. Vi är inte bara pixel-leverantörer, utan snarare ditt externa <span className="font-bold">webbdesignteam</span>.<br/><br/>
                                Med vår erfarenhet och förståelse för <span className="font-bold">digitala miljöer</span> kan vi fatta beslut som gynnar både användaren och verksamheten.
                            </p>
                            <a href="/" className="hidden md:flex items-center gap-2 mt-5 font-sans text-xl p-4 w-fit bg-black text-white rounded-2xl">
                                Boka ett samtal
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img className="hidden md:block w-2/3 rounded-2xl m-auto" src={'/dariuspad.png'} alt={"black ipad cover imprinted with Studio Darius"}/>
                    </div>
                </div>
            </div>
    );
}