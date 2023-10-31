export const getZkSyncInfo = async (address: string) => {
    const response = await
        fetch('https://mainnet.era.zksync.io', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'jsonrpc': '2.0',
                'id': 1,
                'method': 'zks_getAllAccountBalances',
                'params': [
                    address
                ]
            })
        });
    if(response.ok) {
        const data = await response.json()
        console.log(data)
        return data
    }
   throw new Error("Error with Zk fetch")
}