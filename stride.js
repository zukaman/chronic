window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "STRIDE-TESTNET-2",
    chainName: "STRIDE",
    rpc: "http://77.37.176.99:25657", // replace with your rpc url
    rest: "http://77.37.176.99:2327", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "stride",
        bech32PrefixAccPub: "stride" + "pub",
        bech32PrefixValAddr: "stride" + "valoper",
        bech32PrefixValPub: "stride" + "valoperpub",
        bech32PrefixConsAddr: "stride" + "valcons",
        bech32PrefixConsPub: "stride" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "STRIDE", 
            coinMinimalDenom: "ustrd", 
            coinDecimals: 6, 
            coinGeckoId: "ustrd", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "STRIDE",
            coinMinimalDenom: "ustrd",
            coinDecimals: 6,
            coinGeckoId: "ustrd",
        },
    ],
    stakeCurrency: {
        coinDenom: "STRIDE",
        coinMinimalDenom: "ustrd",
        coinDecimals: 6,
        coinGeckoId: "ustrd",
      },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
