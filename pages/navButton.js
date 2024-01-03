import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NavButton({url, label, color="default"}){
    return(
        <Link href={url}><Button color={color}>{label}</Button></Link>
    )
}