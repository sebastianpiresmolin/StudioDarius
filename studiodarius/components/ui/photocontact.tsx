import {ArrowRight} from "lucide-react";

export default function Photocontact() {
    return (
        <div>
            <div
                className="flex md:flex-row-reverse flex-col w-full items-center mt-8 pt-8 pb-8 2xl:mt-18 bg-[#DEE5ED] lg:pt-12 lg:pb-12 xl:pt-18 xl:pb-18 2xl:pt-36 2xl:pb-36" id="kontakt">
                <div className="flex-col md:w-1/2 items-center">
                    <h1 className="font-sans text-[#6B4D38] text-3xl lg:text-4xl 2xl:text-6xl font-thin mb-8 lg:mb-10 min-w-full md:w-3/4 text-center">
                        Kontakta mig!
                    </h1>
                    <h1 className="text-[#6B4D38] font-sans text-3xl  2xl:text-4xl font-thin mb-8 lg:mb-10 min-w-full md:w-3/4 text-center">
                        Låt mig föreviga eran <span
                        className="font-serif text-3xl lg:text-4xl 2xl:text-5xl">lycka</span>
                    </h1>
                    <div className="flex flex-col m-auto w-3/4 text-center">
                        <p className="font-sans font-light text-md">
                            Kontakta mig för tidsbokning, offert eller frågor:
                        </p>

                        <a href="/studiodarius/public"
                           className="flex items-center gap-2 mt-5 font-sans text-xl p-4 w-fit bg-black text-white rounded-2xl m-auto">
                            Kontaktformulär <ArrowRight/>
                        </a>
                        <p className="font-sans font-bold text-md mt-6">
                            <a href="mailto:studiodarius.falkoping@gmail.com">studiodarius.falkoping@gmail.com</a>
                        </p>
                        <p className="font-sans font-bold text-md mt-6">
                            076-800 40 80
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="hidden md:block w-2/3 rounded-2xl m-auto" src={'/cakesmash.png'}
                         alt={"black ipad cover imprinted with Studio Darius"}/>
                </div>
            </div>
        </div>
    );
}