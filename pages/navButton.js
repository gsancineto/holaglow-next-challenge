import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NavButton({url, label, color="default"}){
    return(
        <Button color={color}><Link href={url}>{label}</Link></Button>
    )
}