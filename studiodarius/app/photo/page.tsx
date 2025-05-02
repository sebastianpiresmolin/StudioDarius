import Image from "next/image";
import Photosubhero from "@/components/ui/photosubhero";
import Photoprices from "@/components/ui/photoprices";
import Photocontact from "@/components/ui/photocontact";

export default function Photo() {
    return (
        <>
            <div className="hidden lg:block w-[95%] h-[50vh] xl:h-[580px] lg:h-[460px] xl:max-h-[580px] lg:max-h-[460px] rounded-2xl mt-8 lg:mt-2 m-auto">
                <Image className="hidden lg:block" height={2000} width={2000} src={"/landingphoto.png"} alt={"A collage of photos taken by Malin Darius. Including a title saying: Design and photography, When memory becomes art."} />
            </div>
            <div className="block lg:hidden md:w-[730px] md:h-[755px] xl:h-[580px] lg:h-[460px] xl:max-h-[580px] lg:max-h-[460px] rounded-2xl mt-8 lg:mt-2 m-auto">
                <Image className="block lg:hidden" height={2000} width={2000} src={"/photolandingmobile.png"} alt={"A collage of photos taken by Malin Darius. Including a title saying: Design and photography, When memory becomes art."} />
            </div>
            <Photosubhero />
            <Photoprices />
            <Photocontact />
        </>
    );
}