export default function Photosubhero() {
    return (
        <div>
            <div className="flex md:flex-row flex-col w-full items-center mt-8 2xl:mt-36 pt-8 pb-8 bg-[#DEE5ED] lg:pt-12 lg:pb-12 xl:pt-18 xl:pb-18 2xl:pt-36 2xl:pb-36">
                <div className="flex-col md:w-1/2 items-center">
                    <h1 className="font-sans text-[#6B4D38] text-2xl lg:text-3xl 2xl:text-6xl font-thin mb-4 min-w-full md:w-3/4 text-center">
                        Hej, Det är jag som är  <span className="font-serif text-2xl lg:text-4xl 2xl:text-7xl">Malin!</span>
                    </h1>
                    <h1 className="text-[#6B4D38] font-sans text-xl lg:text-3xl 2xl:text-4xl font-thin mb-4 min-w-full md:w-3/4 text-center">
                        Här för att fånga eran <span className="font-serif text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">lycka</span>
                    </h1>
                    <div className="flex flex-col m-auto w-3/4 ">
                        <p className="font-sans font-light text-sm lg:text-base">
                            Jag har alltid älskat fotografering – att fånga <span className="font-bold">ögonblick</span>, uttryck och stämningar som annars bara passerar förbi.  Sedan jag var barn har kameran tagit mig på en fantastisk resa, där jag fått dokumentera hundratals personliga och <span className="font-bold">unika berättelser.</span><br/><br/>
                            Jag brinner för att skapa bilder som inte bara är vackra, utan som verkligen speglar <span className="font-bold">känslan</span> och det som gör just din stund <span className="font-bold">minnesvärd.</span>
                        </p>

                        <a href="/studiodarius/public" className="hidden md:flex items-center gap-2 mt-5 font-sans text-xl p-4 w-fit bg-black text-white rounded-2xl">
                            Kontakta mig
                        </a>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="hidden md:block w-2/3 rounded-2xl m-auto" src={'/malin.png'} alt={"black ipad cover imprinted with Studio Darius"}/>
                </div>
            </div>
        </div>
    );
}