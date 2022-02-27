//LÓGICA DOS GRÁFICOS E ENDPOINTS DA API//
//tudo relacionado aos outputs dos gráficos está aqui//
//Todo gráfico que precisar ser de uma moeda listada DEVE estar dentro da chave ("{}") desse if.
document.onreadystatechange = async () => {
    if (document.readyState === "complete") {

        //Variável definindo a conversão da moeda, que no caso brl seria Real Brasileiro//
        const currency = "brl";



        //Promise com o fetch de cada criptomoeda
        //Esse endpoint só aceita 1 id por moeda, então sempre que precisar
        //adicionar uma moeda listada no mercado, você vai precisar adicionar 
        //um fetch dentro desse promise com o id desejado depois de /coins/
        const data = await Promise.all([
            fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/litecoin/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/ripple/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/dash/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/aave/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/cosmos/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/chainlink/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/uniswap/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/decentraland/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/stellar/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/fantom/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/flow/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/tezos/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/vechain/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/helium/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/iota/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/harmony/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/gala/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/maker/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/blockstack/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/ecash/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/zcash/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/neo/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/kusama/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/thorchain/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/chiliz/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/celo/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/shiba-inu/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/pancakeswap-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/the-graph/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/the-sandbox/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/matic-network/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/terra-luna/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/curve-dao-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/pundi-x-2/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/paris-saint-germain-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/lazio-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/fc-porto/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/ac-milan-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/manchester-city-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/santos-fc-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/atletico-madrid/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/juventus-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/as-roma-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/fc-barcelona-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/axie-infinity/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/hedera-hashgraph/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/enjincoin/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/quant-network/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/internet-computer/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),
            fetch(`https://api.coingecko.com/api/v3/coins/og-fan-token/market_chart?vs_currency=${currency}&days=30&interval=hourly`).then(response => response.json()),

        ]);


        //Aqui foi definido uma variável pra cada array de uma moeda
        //sendo [0] = data e [1] = preço da moeda
        //Cada moeda nova terá um valor de um array novo


        const btcPrices = data[0].prices.map((e) => e[1]);
        const btcDate = data[0].prices.map(i => i[0]);

        const ethPrices = data[1].prices.map((e) => e[1]);
        const ethDate = data[1].prices.map(i => i[0]);

        const ltcPrices = data[2].prices.map((e) => e[1]);
        const ltcDate = data[2].prices.map(i => i[0]);

        const solPrices = data[3].prices.map((e) => e[1]);
        const solDate = data[3].prices.map(i => i[0]);

        const xrpPrices = data[4].prices.map((e) => e[1]);
        const xrpDate = data[4].prices.map(i => i[0]);

        const dashPrices = data[5].prices.map((e) => e[1]);
        const dashDate = data[5].prices.map(i => i[0]);

        const adaPrices = data[6].prices.map((e) => e[1]);
        const adaDate = data[6].prices.map(i => i[0]);


        const dogePrices = data[7].prices.map((e) => e[1]);
        const dogeDate = data[7].prices.map(i => i[0]);

        const bnbPrices = data[8].prices.map((e) => e[1]);
        const bnbDate = data[8].prices.map(i => i[0]);

        const aavePrices = data[9].prices.map((e) => e[1]);
        const aaveDate = data[9].prices.map(i => i[0]);

        const dotPrices = data[10].prices.map((e) => e[1]);
        const dotDate = data[10].prices.map(i => i[0]);

        const atomPrices = data[11].prices.map((e) => e[1]);
        const atomDate = data[11].prices.map(i => i[0]);

        const linkPrices = data[12].prices.map((e) => e[1]);
        const linkDate = data[12].prices.map(i => i[0]);

        const uniPrices = data[13].prices.map((e) => e[1]);
        const uniDate = data[13].prices.map(i => i[0]);

        const trxPrices = data[14].prices.map((e) => e[1]);
        const trxDate = data[14].prices.map(i => i[0]);

        const manaPrices = data[15].prices.map((e) => e[1]);
        const manaDate = data[15].prices.map(i => i[0]);

        const xlmPrices = data[16].prices.map((e) => e[1]);
        const xlmDate = data[16].prices.map(i => i[0]);

        const ftmPrices = data[17].prices.map((e) => e[1]);
        const ftmDate = data[17].prices.map(i => i[0]);

        const flowPrices = data[18].prices.map((e) => e[1]);
        const flowDate = data[18].prices.map(i => i[0]);

        const xtzPrices = data[19].prices.map((e) => e[1]);
        const xtzDate = data[19].prices.map(i => i[0]);

        const vetPrices = data[20].prices.map((e) => e[1]);
        const vetDate = data[20].prices.map(i => i[0]);

        const hntPrices = data[21].prices.map((e) => e[1]);
        const hntDate = data[21].prices.map(i => i[0]);

        const iotaPrices = data[22].prices.map((e) => e[1]);
        const iotaDate = data[22].prices.map(i => i[0]);

        const onePrices = data[23].prices.map((e) => e[1]);
        const oneDate = data[23].prices.map(i => i[0]);

        const galaPrices = data[24].prices.map((e) => e[1]);
        const galaDate = data[24].prices.map(i => i[0]);

        const mkrPrices = data[25].prices.map((e) => e[1]);
        const mkrDate = data[25].prices.map(i => i[0]);

        const stxPrices = data[26].prices.map((e) => e[1]);
        const stxDate = data[26].prices.map(i => i[0]);

        const xecPrices = data[27].prices.map((e) => e[1]);
        const xecDate = data[27].prices.map(i => i[0]);

        const zecPrices = data[28].prices.map((e) => e[1]);
        const zecDate = data[28].prices.map(i => i[0]);

        const neoPrices = data[29].prices.map((e) => e[1]);
        const neoDate = data[29].prices.map(i => i[0]);

        const ksmPrices = data[30].prices.map((e) => e[1]);
        const ksmDate = data[30].prices.map(i => i[0]);

        const runePrices = data[31].prices.map((e) => e[1]);
        const runeDate = data[31].prices.map(i => i[0]);

        const chzPrices = data[32].prices.map((e) => e[1]);
        const chzDate = data[32].prices.map(i => i[0]);

        const celoPrices = data[33].prices.map((e) => e[1]);
        const celoDate = data[33].prices.map(i => i[0]);

        const shibPrices = data[34].prices.map((e) => e[1]);
        const shibDate = data[34].prices.map(i => i[0]);

        const cakePrices = data[35].prices.map((e) => e[1]);
        const cakeDate = data[35].prices.map(i => i[0]);

        const grtPrices = data[36].prices.map((e) => e[1]);
        const grtDate = data[36].prices.map(i => i[0]);

        const sandPrices = data[37].prices.map((e) => e[1]);
        const sandDate = data[37].prices.map(i => i[0]);

        const maticPrices = data[38].prices.map((e) => e[1]);
        const maticDate = data[38].prices.map(i => i[0]);

        const lunaPrices = data[39].prices.map((e) => e[1]);
        const lunaDate = data[39].prices.map(i => i[0]);

        const avaxPrices = data[40].prices.map((e) => e[1]);
        const avaxDate = data[40].prices.map(i => i[0]);

        const crvPrices = data[41].prices.map((e) => e[1]);
        const crvDate = data[41].prices.map(i => i[0]);

        const pundixPrices = data[42].prices.map((e) => e[1]);
        const pundixDate = data[42].prices.map(i => i[0]);

        const psgPrices = data[43].prices.map((e) => e[1]);
        const psgDate = data[43].prices.map(i => i[0]);

        const lazioPrices = data[44].prices.map((e) => e[1]);
        const lazioDate = data[44].prices.map(i => i[0]);

        const portoPrices = data[45].prices.map((e) => e[1]);
        const portoDate = data[45].prices.map(i => i[0]);

        const acmPrices = data[46].prices.map((e) => e[1]);
        const acmDate = data[46].prices.map(i => i[0]);

        const cityPrices = data[47].prices.map((e) => e[1]);
        const cityDate = data[47].prices.map(i => i[0]);

        const santosPrices = data[48].prices.map((e) => e[1]);
        const santosDate = data[48].prices.map(i => i[0]);

        const atmPrices = data[49].prices.map((e) => e[1]);
        const atmDate = data[49].prices.map(i => i[0]);

        const juvPrices = data[50].prices.map((e) => e[1]);
        const juvDate = data[50].prices.map(i => i[0]);

        const asrPrices = data[51].prices.map((e) => e[1]);
        const asrDate = data[51].prices.map(i => i[0]);

        const barPrices = data[52].prices.map((e) => e[1]);
        const barDate = data[52].prices.map(i => i[0]);

        const axsPrices = data[53].prices.map((e) => e[1]);
        const axsDate = data[53].prices.map(i => i[0]);

        const hbarPrices = data[54].prices.map((e) => e[1]);
        const hbarDate = data[54].prices.map(i => i[0]);

        const enjPrices = data[55].prices.map((e) => e[1]);
        const enjDate = data[55].prices.map(i => i[0]);

        const qntPrices = data[56].prices.map((e) => e[1]);
        const qntDate = data[56].prices.map(i => i[0]);


        const icpPrices = data[57].prices.map((e) => e[1]);
        const icpDate = data[57].prices.map(i => i[0]);


        const ogPrices = data[58].prices.map((e) => e[1]);
        const ogDate = data[58].prices.map(i => i[0]);






        //Abaixo terão todos os gráficos executados na criação do código
        //Sendo btcCtx = variável do gráfico de bitcoin
        //Sempre alterar essa entrada com uma variável nova pra novos gráficos
        //"btcGraph" sendo = id do gráfico que será usada na tabela em HTML

        //Bitcoin//
        const btcCtx = document.getElementById("btcGraph").getContext("2d");
        new Chart(btcCtx, {
            type: "bar",
            data: {
                labels: btcDate, //aqui é inserido a variável de tempo, o eixo y
                datasets: [
                    {
                        label: "Price",
                        data: btcPrices, //aqui é inserido a variável de preço, o eixo x
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //Ethereum
        const ethCtx = document.getElementById("ethGraph").getContext("2d");
        new Chart(ethCtx, {
            type: "bar",
            data: {
                labels: ethDate,
                datasets: [
                    {
                        label: "Price",
                        data: ethPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //Litecoin
        const ltcCtx = document.getElementById("ltcGraph").getContext("2d");
        new Chart(ltcCtx, {
            type: "bar",
            data: {
                labels: ltcDate,
                datasets: [
                    {
                        label: "Price",
                        data: ltcPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //Solana//
        const solCtx = document.getElementById("solGraph").getContext("2d");
        new Chart(solCtx, {
            type: "bar",
            data: {
                labels: solDate,
                datasets: [
                    {
                        label: "Price",
                        data: solPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //Cardano//
        const adaCtx = document.getElementById("adaGraph").getContext("2d");
        new Chart(adaCtx, {
            type: "bar",
            data: {
                labels: adaDate,
                datasets: [
                    {
                        label: "Price",
                        data: adaPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //dash//
        const dashCtx = document.getElementById("dashGraph").getContext("2d");
        new Chart(dashCtx, {
            type: "bar",
            data: {
                labels: dashDate,
                datasets: [
                    {
                        label: "Price",
                        data: dashPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //ripple//
        const xrpCtx = document.getElementById("xrpGraph").getContext("2d");
        new Chart(xrpCtx, {
            type: "bar",
            data: {
                labels: xrpDate,
                datasets: [
                    {
                        label: "Price",
                        data: xrpPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //dogecoin//
        const dogeCtx = document.getElementById("dogeGraph").getContext("2d");
        new Chart(dogeCtx, {
            type: "bar",
            data: {
                labels: dogeDate,
                datasets: [
                    {
                        label: "Price",
                        data: dogePrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //binancecoin//
        const bnbCtx = document.getElementById("bnbGraph").getContext("2d");
        new Chart(bnbCtx, {
            type: "bar",
            data: {
                labels: bnbDate,
                datasets: [
                    {
                        label: "Price",
                        data: bnbPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //aave//
        const aaveCtx = document.getElementById("aaveGraph").getContext("2d");
        new Chart(aaveCtx, {
            type: "bar",
            data: {
                labels: aaveDate,
                datasets: [
                    {
                        label: "Price",
                        data: aavePrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //polkadot//
        const dotCtx = document.getElementById("dotGraph").getContext("2d");
        new Chart(dotCtx, {
            type: "bar",
            data: {
                labels: dotDate,
                datasets: [
                    {
                        label: "Price",
                        data: dotPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //cosmos//
        const atomCtx = document.getElementById("atomGraph").getContext("2d");
        new Chart(atomCtx, {
            type: "bar",
            data: {
                labels: atomDate,
                datasets: [
                    {
                        label: "Price",
                        data: atomPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //chainlink//
        const linkCtx = document.getElementById("linkGraph").getContext("2d");
        new Chart(linkCtx, {
            type: "bar",
            data: {
                labels: linkDate,
                datasets: [
                    {
                        label: "Price",
                        data: linkPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //uniswap//
        const uniCtx = document.getElementById("uniGraph").getContext("2d");
        new Chart(uniCtx, {
            type: "bar",
            data: {
                labels: uniDate,
                datasets: [
                    {
                        label: "Price",
                        data: uniPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //tron//
        const trxCtx = document.getElementById("trxGraph").getContext("2d");
        new Chart(trxCtx, {
            type: "bar",
            data: {
                labels: trxDate,
                datasets: [
                    {
                        label: "Price",
                        data: trxPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //decentraland//
        const manaCtx = document.getElementById("manaGraph").getContext("2d");
        new Chart(manaCtx, {
            type: "bar",
            data: {
                labels: manaDate,
                datasets: [
                    {
                        label: "Price",
                        data: manaPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //stellar//
        const xlmCtx = document.getElementById("xlmGraph").getContext("2d");
        new Chart(xlmCtx, {
            type: "bar",
            data: {
                labels: xlmDate,
                datasets: [
                    {
                        label: "Price",
                        data: xlmPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //fantom//
        const ftmCtx = document.getElementById("ftmGraph").getContext("2d");
        new Chart(ftmCtx, {
            type: "bar",
            data: {
                labels: ftmDate,
                datasets: [
                    {
                        label: "Price",
                        data: ftmPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //flow//
        const flowCtx = document.getElementById("flowGraph").getContext("2d");
        new Chart(flowCtx, {
            type: "bar",
            data: {
                labels: flowDate,
                datasets: [
                    {
                        label: "Price",
                        data: flowPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //vechain//
        const vetCtx = document.getElementById("vetGraph").getContext("2d");
        new Chart(vetCtx, {
            type: "bar",
            data: {
                labels: vetDate,
                datasets: [
                    {
                        label: "Price",
                        data: vetPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //tezos//
        const xtzCtx = document.getElementById("xtzGraph").getContext("2d");
        new Chart(xtzCtx, {
            type: "bar",
            data: {
                labels: xtzDate,
                datasets: [
                    {
                        label: "Price",
                        data: xtzPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //helium//
        const hntCtx = document.getElementById("hntGraph").getContext("2d");
        new Chart(hntCtx, {
            type: "bar",
            data: {
                labels: hntDate,
                datasets: [
                    {
                        label: "Price",
                        data: hntPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //iota//
        const iotaCtx = document.getElementById("iotaGraph").getContext("2d");
        new Chart(iotaCtx, {
            type: "bar",
            data: {
                labels: iotaDate,
                datasets: [
                    {
                        label: "Price",
                        data: iotaPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //harmony//
        const oneCtx = document.getElementById("oneGraph").getContext("2d");
        new Chart(oneCtx, {
            type: "bar",
            data: {
                labels: oneDate,
                datasets: [
                    {
                        label: "Price",
                        data: onePrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //gala//
        const galaCtx = document.getElementById("galaGraph").getContext("2d");
        new Chart(galaCtx, {
            type: "bar",
            data: {
                labels: galaDate,
                datasets: [
                    {
                        label: "Price",
                        data: galaPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //maker//
        const mkrCtx = document.getElementById("mkrGraph").getContext("2d");
        new Chart(mkrCtx, {
            type: "bar",
            data: {
                labels: mkrDate,
                datasets: [
                    {
                        label: "Price",
                        data: mkrPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //blockstack//
        const stxCtx = document.getElementById("stxGraph").getContext("2d");
        new Chart(stxCtx, {
            type: "bar",
            data: {
                labels: stxDate,
                datasets: [
                    {
                        label: "Price",
                        data: stxPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //ecash//
        const xecCtx = document.getElementById("xecGraph").getContext("2d");
        new Chart(xecCtx, {
            type: "bar",
            data: {
                labels: xecDate,
                datasets: [
                    {
                        label: "Price",
                        data: xecPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //zcash//
        const zecCtx = document.getElementById("zecGraph").getContext("2d");
        new Chart(zecCtx, {
            type: "bar",
            data: {
                labels: zecDate,
                datasets: [
                    {
                        label: "Price",
                        data: zecPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //neo//
        const neoCtx = document.getElementById("neoGraph").getContext("2d");
        new Chart(neoCtx, {
            type: "bar",
            data: {
                labels: neoDate,
                datasets: [
                    {
                        label: "Price",
                        data: neoPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //kusama//
        const ksmCtx = document.getElementById("ksmGraph").getContext("2d");
        new Chart(ksmCtx, {
            type: "bar",
            data: {
                labels: ksmDate,
                datasets: [
                    {
                        label: "Price",
                        data: ksmPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //thorchain//
        const runeCtx = document.getElementById("runeGraph").getContext("2d");
        new Chart(runeCtx, {
            type: "bar",
            data: {
                labels: runeDate,
                datasets: [
                    {
                        label: "Price",
                        data: runePrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //chiliz//
        const chzCtx = document.getElementById("chzGraph").getContext("2d");
        new Chart(chzCtx, {
            type: "bar",
            data: {
                labels: chzDate,
                datasets: [
                    {
                        label: "Price",
                        data: chzPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //celo//
        const celoCtx = document.getElementById("celoGraph").getContext("2d");
        new Chart(celoCtx, {
            type: "bar",
            data: {
                labels: celoDate,
                datasets: [
                    {
                        label: "Price",
                        data: celoPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //shib//
        const shibCtx = document.getElementById("shibGraph").getContext("2d");
        new Chart(shibCtx, {
            type: "bar",
            data: {
                labels: shibDate,
                datasets: [
                    {
                        label: "Price",
                        data: shibPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //cake//
        const cakeCtx = document.getElementById("cakeGraph").getContext("2d");
        new Chart(cakeCtx, {
            type: "bar",
            data: {
                labels: cakeDate,
                datasets: [
                    {
                        label: "Price",
                        data: cakePrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //grt//
        const grtCtx = document.getElementById("grtGraph").getContext("2d");
        new Chart(grtCtx, {
            type: "bar",
            data: {
                labels: grtDate,
                datasets: [
                    {
                        label: "Price",
                        data: grtPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //sand//
        const sandCtx = document.getElementById("sandGraph").getContext("2d");
        new Chart(sandCtx, {
            type: "bar",
            data: {
                labels: sandDate,
                datasets: [
                    {
                        label: "Price",
                        data: sandPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //matic//
        const maticCtx = document.getElementById("maticGraph").getContext("2d");
        new Chart(maticCtx, {
            type: "bar",
            data: {
                labels: maticDate,
                datasets: [
                    {
                        label: "Price",
                        data: maticPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //luna//
        const lunaCtx = document.getElementById("lunaGraph").getContext("2d");
        new Chart(lunaCtx, {
            type: "bar",
            data: {
                labels: lunaDate,
                datasets: [
                    {
                        label: "Price",
                        data: lunaPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //avax//
        const avaxCtx = document.getElementById("avaxGraph").getContext("2d");
        new Chart(avaxCtx, {
            type: "bar",
            data: {
                labels: avaxDate,
                datasets: [
                    {
                        label: "Price",
                        data: avaxPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //crv//
        const crvCtx = document.getElementById("crvGraph").getContext("2d");
        new Chart(crvCtx, {
            type: "bar",
            data: {
                labels: crvDate,
                datasets: [
                    {
                        label: "Price",
                        data: crvPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //pundix//
        const pundixCtx = document.getElementById("pundixGraph").getContext("2d");
        new Chart(pundixCtx, {
            type: "bar",
            data: {
                labels: pundixDate,
                datasets: [
                    {
                        label: "Price",
                        data: pundixPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //psg//
        const psgCtx = document.getElementById("psgGraph").getContext("2d");
        new Chart(psgCtx, {
            type: "bar",
            data: {
                labels: psgDate,
                datasets: [
                    {
                        label: "Price",
                        data: psgPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //lazio//
        const lazioCtx = document.getElementById("lazioGraph").getContext("2d");
        new Chart(lazioCtx, {
            type: "bar",
            data: {
                labels: lazioDate,
                datasets: [
                    {
                        label: "Price",
                        data: lazioPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //porto//
        const portoCtx = document.getElementById("portoGraph").getContext("2d");
        new Chart(portoCtx, {
            type: "bar",
            data: {
                labels: portoDate,
                datasets: [
                    {
                        label: "Price",
                        data: portoPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //acm//
        const acmCtx = document.getElementById("acmGraph").getContext("2d");
        new Chart(acmCtx, {
            type: "bar",
            data: {
                labels: acmDate,
                datasets: [
                    {
                        label: "Price",
                        data: acmPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //city//
        const cityCtx = document.getElementById("cityGraph").getContext("2d");
        new Chart(cityCtx, {
            type: "bar",
            data: {
                labels: cityDate,
                datasets: [
                    {
                        label: "Price",
                        data: cityPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //santos//
        const santosCtx = document.getElementById("santosGraph").getContext("2d");
        new Chart(santosCtx, {
            type: "bar",
            data: {
                labels: santosDate,
                datasets: [
                    {
                        label: "Price",
                        data: santosPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //atm//
        const atmCtx = document.getElementById("atmGraph").getContext("2d");
        new Chart(atmCtx, {
            type: "bar",
            data: {
                labels: atmDate,
                datasets: [
                    {
                        label: "Price",
                        data: atmPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //juv//
        const juvCtx = document.getElementById("juvGraph").getContext("2d");
        new Chart(juvCtx, {
            type: "bar",
            data: {
                labels: juvDate,
                datasets: [
                    {
                        label: "Price",
                        data: juvPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //asr//
        const asrCtx = document.getElementById("asrGraph").getContext("2d");
        new Chart(asrCtx, {
            type: "bar",
            data: {
                labels: asrDate,
                datasets: [
                    {
                        label: "Price",
                        data: asrPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });

        //bar//
        const barCtx = document.getElementById("barGraph").getContext("2d");
        new Chart(barCtx, {
            type: "bar",
            data: {
                labels: barDate,
                datasets: [
                    {
                        label: "Price",
                        data: barPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //axs//
        const axsCtx = document.getElementById("axsGraph").getContext("2d");
        new Chart(axsCtx, {
            type: "bar",
            data: {
                labels: axsDate,
                datasets: [
                    {
                        label: "Price",
                        data: axsPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //hbar//
        const hbarCtx = document.getElementById("hbarGraph").getContext("2d");
        new Chart(hbarCtx, {
            type: "bar",
            data: {
                labels: hbarDate,
                datasets: [
                    {
                        label: "Price",
                        data: hbarPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //enj//
        const enjCtx = document.getElementById("enjGraph").getContext("2d");
        new Chart(enjCtx, {
            type: "bar",
            data: {
                labels: enjDate,
                datasets: [
                    {
                        label: "Price",
                        data: enjPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //qnt//
        const qntCtx = document.getElementById("qntGraph").getContext("2d");
        new Chart(qntCtx, {
            type: "bar",
            data: {
                labels: qntDate,
                datasets: [
                    {
                        label: "Price",
                        data: qntPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //icp//
        const icpCtx = document.getElementById("icpGraph").getContext("2d");
        new Chart(icpCtx, {
            type: "bar",
            data: {
                labels: icpDate,
                datasets: [
                    {
                        label: "Price",
                        data: icpPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //og//
        const ogCtx = document.getElementById("ogGraph").getContext("2d");
        new Chart(ogCtx, {
            type: "bar",
            data: {
                labels: ogDate,
                datasets: [
                    {
                        label: "Price",
                        data: ogPrices,
                        backgroundColor: ["rgba(0, 0, 255, 1)"],
                        borderColor: ["rgba(0, 0, 255, 1)"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        //max: 100,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: false,
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawBorder: false,
                            display: false,
                        }
                    },
                },
            },
        });
        //ADICIONAR AQUI UM GRÁFICO NOVO CASO SEJA DE UMA MOEDA LISTADA//
    }


}; //<--- FIM DO IF//
