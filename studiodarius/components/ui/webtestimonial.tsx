import Image from "next/image";

export default function Webtestimonial() {
    return (<div className="w-full flex flex-col m-auto lg:mt-36 mt-10">
            <div className="m-auto font-sans font-thin text-xl md:text-3xl lg:text-5xl xl:text-7xl">
                Låt oss ta eran verksamhet till <span className="font-serif">nästa nivå</span>
            </div>
            <div className="m-auto font-sans font-thin text-lg md:text-2xl lg:text-4xl text-center mt-5 lg:mt-10">
                Ta inte vårat ord för det,<br/><span className="font-serif">ta deras.</span>
            </div>
            <Image className="m-auto mt-5 w-1/2 md:w-1/3" src={"/line.png"} alt={"seperator line"} width={500} height={5}/>
            <div className="m-auto font-sans text-center font-thin text-sm pl-2 pr-2 md:text-2xl max-w-[750px] mt-10">“Att arbeta med
                Sebastian har varit en fantastisk upplevelse. Vi har nu en webbapplikation som överträffade mina
                förväntningar och gör det enkelt att hantera och uppdatera innehåll.<br/><br/>Jag är säker på att när
                applikationen är helt färdig kommer den att bli fantastisk. Hans professionalism och engagemang för att
                förstå min vision gjorde projektet till en framgång. <span className="font-semibold">Varmt rekommenderad!</span>”
            </div>
            <div className="flex flex-col text-center mt-8">
                <h3 className="font-sans font-black text-lg">Alan Hussein</h3>
                <h3 className="font-sans text-stone-800 font-thin text-sm">Grundare & CEO @Tempura Tabby</h3>
            </div>
        </div>);
}