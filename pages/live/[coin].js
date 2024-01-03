import UseFetch from '@/components/useFetch';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import styles from '@/styles/Home.module.css'
import NavButton from '../navButton';

export default function Coin({ data }) {
    const coin = data.data;

    return (
        <div className={`${styles.main}`}>
            <h3>{coin.symbol} details</h3>
            <Table>
                <TableHeader>
                    <TableColumn>SYMBOL</TableColumn>
                    <TableColumn>BUY PRICE</TableColumn>
                    <TableColumn>SELL PRICE</TableColumn>
                </TableHeader>
                {
                    coin ?
                        <TableBody>
                            <TableRow key={coin.symbol}>
                                <TableCell>{coin.symbol}</TableCell>
                                <TableCell>{`$${coin.buy}`}</TableCell>
                                <TableCell>{`$${coin.sell}`}</TableCell>
                            </TableRow>
                        </TableBody>
                        :
                        <TableBody emptyContent={"Sorry! There's no data for now. Please check again later."}>{[]}</TableBody>}
            </Table>
            <div className={styles.grid}>
                <NavButton label={"Home"} url={"/"} />
                <NavButton label={"Back"} url={"/coins"} color={"primary"} />
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { getCoinInfo } = UseFetch();
    const { coin } = context.params;
    const data = await getCoinInfo(coin);

    return {
        props: { data },
    };
}
