import UseFetch from "@/components/useFetch";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";
import CoinsTable from "./coinsTable";
import styles from '@/styles/Home.module.css'
import NavButton from "./navButton";

export default function Coins(){
    const { getAllCoinsInfo } = UseFetch();
    const [coinsData, setCoinsData] = useState(false);
  
    const handleCoinsData = async () => {
      const result = await getAllCoinsInfo();
  
      if (result) setCoinsData(result.slice(0, 20));
    }
  
    useEffect(() => {
      handleCoinsData();
    }, [])
  
    return(
        <div className={`${styles.main}`}>
            <h1>All Crypto Info</h1>
            {coinsData ? (<div><CoinsTable coinsData={coinsData} /> </div>): <CircularProgress aria-label="Loading..." />}
            <NavButton label={"Home"} url={"/"}/>
        </div>
    )
}