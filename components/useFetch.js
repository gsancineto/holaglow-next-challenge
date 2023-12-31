export default function UseFetch() {

    const useGet = async (url) => {
        let result = [];

        try {
            await fetch(url)
                .then((response) => response.json())
                .then(data => result = data);
        } catch {
            console.error(`Error consultando la API ${url}`)
            result = false;
        }

        return result;
    }

    const getOverview = async () => {
        const url = process.env.NEXT_PUBLIC_API_URL_GetOverview;
        const result = await useGet(url);

        return result;
    }

    const getCoinInfo = async (coin) => {
        const url = process.env.NEXT_PUBLIC_API_URL_GetCoinInfo.replace('{coin}', coin);
        const result = await useGet(url);

        return result;
    }

    const getAllCoinsInfo = async () => {
        const url = process.env.NEXT_PUBLIC_API_URL_GetAllCoinsInfo;
        const result = await useGet(url);

        return result;
    }

    return {
        getOverview,
        getCoinInfo,
        getAllCoinsInfo,
    }
}