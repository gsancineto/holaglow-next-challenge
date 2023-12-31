import UseFetch from '@/components/useFetch';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css'
import NavButton from '../navButton';

export default function Coin() {
    const router = useRouter();
    const { coin } = router.query;
    const { getCoinInfo } = UseFetch();
    const [coinDetails, setCoinDetails] = useState(false);

    const handleCoinData = async () => {
        const result = await getCoinInfo(coin);

        if (result) setCoinDetails(result);
        setTimeout(()=>{
            setCoinDetails(false);
        },10000)
    }

    useEffect(() => {
        if (coin) handleCoinData();
    }, [coin])

    return (
        <div className={`${styles.main}`}>
            <h3>{coin} details</h3>
            <Table>
                <TableHeader>
                    <TableColumn>SYMBOL</TableColumn>
                    <TableColumn>BUY PRICE</TableColumn>
                    <TableColumn>SELL PRICE</TableColumn>
                </TableHeader>
                {
                    coinDetails ?
                        <TableBody>
                            {coinDetails.map((coin) => (
                                <TableRow key={coin.symbol}>
                                    <TableCell>{coin.symbol}</TableCell>
                                    <TableCell>{`$${coin.buy}`}</TableCell>
                                    <TableCell>{`$${coin.sell}`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        :
                        <TableBody emptyContent={"Sorry! There's no data for now. Please check again later."}>{[]}</TableBody>}
            </Table>
            <div className={styles.grid}>
                <NavButton label={"Home"} url={"/"}/>
                <NavButton label={"Back"} url={"/coins"} color={"primary"}/>
            </div>
        </div>
    );
};