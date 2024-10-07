import Image from "next/image";

interface TopBannerInterface{
    url : any;
    alt : string;
    title :string;
}

export default function TopBanner(props : TopBannerInterface){
    return(
        <div className="bg-slate-600">
            <Image src={props.url} alt={props.alt} title={props.title} />
        </div>
    );
}