import { StaticImageData } from "next/image";
import Image from "next/image"
import Link from "next/link";

interface PostCardInterface{
    imgData: StaticImageData;
    imgAlt: string;
    imgTitle: string;
    h2Title: string;
    pText:string;
    hrefLink:string;
    textLink:string;
}

export default function PostCard(props : PostCardInterface){
    return(
        <div>
            <Image src={props.imgData} alt={props.imgAlt} title={props.imgTitle} />
            <h2>{props.h2Title}</h2>
            <p>{props.pText}</p>
            <Link href={props.hrefLink} >{props.textLink}</Link>
        </div>
    );
}