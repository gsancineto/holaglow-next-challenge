import UseFetch from "@/components/useFetch"
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavButton from "./navButton";
const inter = Inter({ subsets: ['latin'] })

export default function Overview() {
    const { getOverview } = UseFetch();
    const [overview, setOverview] = useState(false);

    const handleOverviewData = async () => {
        const result = await getOverview();

        if (result) setOverview(result);
    }

    useEffect(() => {
        handleOverviewData();
    }, [])

    return (
        <div className={`${styles.main} ${inter.className}`}>
            <h1>Overview</h1>
            {
                (<Table>
                    <TableHeader>
                        <TableColumn>Crypto</TableColumn>
                    </TableHeader>
                    {overview ?
                        <TableBody isLoading={!overview}>
                            {overview.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <TableBody emptyContent={"Sorry! There's no data for now. Please check again later."}>{[]}</TableBody>}
                </Table>)
            }
            <NavButton label={"Home"} url={"/"}/>
        </div>
    )
}