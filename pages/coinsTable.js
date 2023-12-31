import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useRouter } from 'next/navigation'


export default function CoinsTable({ coinsData }) {
    const router = useRouter();

    const handleClick = ({ anchorKey }) => {
        router.push(`/live/${anchorKey}`, { scroll: false })
    }

    return (
        <Table selectionMode="single" onSelectionChange={handleClick}>
            <TableHeader>
                <TableColumn>SYMBOL</TableColumn>
                <TableColumn>NAME</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            {
                coinsData ?
                    <TableBody>
                        {coinsData.map((item) => (
                            <TableRow key={item.symbol}>
                                <TableCell>{item.symbol}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.is_active ? "Active" : "Down"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    :
                    <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
            }
        </Table>
    )
}