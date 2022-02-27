//Dados da API//
//Essa função puxa os dados das cotações (Preço, Valor disponível e variação 24h)//
//sempre que for adicionar uma moeda nova que seja listada no mercado:
//adicionar uma array com o ID da moeda desejada e o ID da moeda no endereço da api_url
//definir um id e variável pra cada moeda e cada tipo de dado

//variável que define a url do endpoint
const api_url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cenjincoin%2Cog-fan-token%2Csolana%2Clitecoin%2Ccardano%2Cripple%2Cdash%2Cshiba-inu%2Cdogecoin%2Cbinancecoin%2Cterra-luna%2Caave%2Cavalanche-2%2Cpolkadot%2Cmatic-network%2Ccosmos%2Cchainlink%2Cuniswap%2Ctron%2Cdecentraland%2Cstellar%2Cfantom%2Cthe-sandbox%2Chedera-hashgraph%2Cflow%2Cvechain%2Caxie-infinity%2Ctezos%2Chelium%2Ciota%2Charmony%2Cgala%2Cthe-graph%2Cmaker%2Cblockstack%2Cpancakeswap-token%2Cecash%2Cquant-network%2Czcash%2Cneo%2Ckusama%2Cthorchain%2Cinternet-computer%2Ccurve-dao-token%2Cchiliz%2Ccelo%2Cpundi-x-2%2Cparis-saint-germain-fan-token%2Cparis-saint-germain-fan-token%2Clazio-fan-token%2Cfc-porto%2Cac-milan-fan-token%2Cmanchester-city-fan-token%2Csantos-fc-fan-token%2Catletico-madrid%2Cjuventus-fan-token%2Cas-roma-fan-token%2Cfc-barcelona-fan-token&vs_currencies=brl&include_market_cap=true&include_24hr_change=true`;
//função asíncrona da coleta dos dados da API//
async function getCota() {
    const response = await fetch(api_url);
    const data = await response.json();



    //adicionar id da moeda abaixo//
    const { bitcoin, ethereum, solana, litecoin, cardano, ripple, dash, dogecoin, binancecoin, aave, polkadot, cosmos, chainlink, uniswap, tron, decentraland, stellar, fantom, flow, vechain, tezos, helium, iota, harmony, gala, maker, blockstack, ecash, zcash, neo, kusama, thorchain, chiliz, celo,
        'shiba-inu': shiba, 'pancakeswap-token': cake, 'the-graph': tgraph, 'the-sandbox': tsandbox, 'matic-network': matic, 'terra-luna': luna, 'avalanche-2': avalanche, 'curve-dao-token': curve, 'pundi-x-2': pundix,
        'paris-saint-germain-fan-token': psg, 'lazio-fan-token': lazio, 'fc-porto': porto, 'ac-milan-fan-token': acm, 'manchester-city-fan-token': manchester, 'santos-fc-fan-token': santos, 'atletico-madrid': madrid,
        'juventus-fan-token': juventus, 'as-roma-fan-token': asr,
        'fc-barcelona-fan-token': barcelona, 'hedera-hashgraph': hedera,
        'quant-network': quant, 'axie-infinity': axie, enjincoin, 'internet-computer': icp, 'og-fan-token': og, } = data;


    const formatReal = (number, maximumSignificantDigits) =>
        new Intl.NumberFormat(
            'pt-BR',
            {
                style: 'currency',
                currency: 'brl',
                maximumSignificantDigits
            })
            .format(number);

    //definição das variáveis das moedas em relação ao preço
    document.getElementById('solPrice').textContent = `${formatReal(solana.brl, 12)}`;
    document.getElementById('xrpPrice').textContent = `${formatReal(ripple.brl, 12)}`;
    document.getElementById('ltcPrice').textContent = `${formatReal(litecoin.brl, 12)}`;
    document.getElementById('dashPrice').textContent = `${formatReal(dash.brl, 12)}`;
    document.getElementById('adaPrice').textContent = `${formatReal(cardano.brl, 12)}`;
    document.getElementById('shibPrice').textContent = `${formatReal(shiba.brl, 12)}`;
    document.getElementById('dogePrice').textContent = `${formatReal(dogecoin.brl, 12)}`;
    document.getElementById('bnbPrice').textContent = `${formatReal(binancecoin.brl, 12)}`;
    document.getElementById('dotPrice').textContent = `${formatReal(polkadot.brl, 12)}`;
    document.getElementById('atomPrice').textContent = `${formatReal(cosmos.brl, 12)}`;
    document.getElementById('linkPrice').textContent = `${formatReal(chainlink.brl, 12)}`;
    document.getElementById('uniPrice').textContent = `${formatReal(uniswap.brl, 12)}`;
    document.getElementById('trxPrice').textContent = `${formatReal(tron.brl, 12)}`;
    document.getElementById('manaPrice').textContent = `${formatReal(decentraland.brl, 12)}`;
    document.getElementById('xlmPrice').textContent = `${formatReal(stellar.brl, 12)}`;
    document.getElementById('ftmPrice').textContent = `${formatReal(fantom.brl, 12)}`;
    document.getElementById('flowPrice').textContent = `${formatReal(flow.brl, 12)}`;
    document.getElementById('vetPrice').textContent = `${formatReal(vechain.brl, 12)}`;
    document.getElementById('xtzPrice').textContent = `${formatReal(tezos.brl, 12)}`;
    document.getElementById('hntPrice').textContent = `${formatReal(helium.brl, 12)}`;
    document.getElementById('iotaPrice').textContent = `${formatReal(iota.brl, 12)}`;
    document.getElementById('onePrice').textContent = `${formatReal(harmony.brl, 12)}`;
    document.getElementById('galaPrice').textContent = `${formatReal(gala.brl, 12)}`;
    document.getElementById('aavePrice').textContent = `${formatReal(aave.brl, 12)}`;
    document.getElementById('mkrPrice').textContent = `${formatReal(maker.brl, 12)}`;
    document.getElementById('stxPrice').textContent = `${formatReal(blockstack.brl, 12)}`;
    document.getElementById('xecPrice').textContent = `${formatReal(ecash.brl, 12)}`;
    document.getElementById('zecPrice').textContent = `${formatReal(zcash.brl, 12)}`;
    document.getElementById('neoPrice').textContent = `${formatReal(neo.brl, 12)}`;
    document.getElementById('ksmPrice').textContent = `${formatReal(kusama.brl, 12)}`;
    document.getElementById('runePrice').textContent = `${formatReal(thorchain.brl, 12)}`;
    document.getElementById('celoPrice').textContent = `${formatReal(celo.brl, 12)}`;
    document.getElementById('chzPrice').textContent = `${formatReal(chiliz.brl, 12)}`;
    document.getElementById('cakePrice').textContent = `${formatReal(cake.brl, 12)}`;
    document.getElementById('grtPrice').textContent = `${formatReal(tgraph.brl, 12)}`;
    document.getElementById('sandPrice').textContent = `${formatReal(tsandbox.brl, 12)}`;
    document.getElementById('maticPrice').textContent = `${formatReal(matic.brl, 12)}`;
    document.getElementById('lunaPrice').textContent = `${formatReal(luna.brl, 12)}`;
    document.getElementById('avaxPrice').textContent = `${formatReal(avalanche.brl, 12)}`;
    document.getElementById('crvPrice').textContent = `${formatReal(curve.brl, 12)}`;
    document.getElementById('pundixPrice').textContent = `${formatReal(pundix.brl, 12)}`;
    document.getElementById('psgPrice').textContent = `${formatReal(psg.brl, 12)}`;
    document.getElementById('lazioPrice').textContent = `${formatReal(lazio.brl, 12)}`;
    document.getElementById('portoPrice').textContent = `${formatReal(porto.brl, 12)}`;
    document.getElementById('acmPrice').textContent = `${formatReal(acm.brl, 12)}`;
    document.getElementById('cityPrice').textContent = `${formatReal(manchester.brl, 12)}`;
    document.getElementById('santosPrice').textContent = `${formatReal(santos.brl, 12)}`;
    document.getElementById('atmPrice').textContent = `${formatReal(madrid.brl, 12)}`;
    document.getElementById('juvPrice').textContent = `${formatReal(juventus.brl, 12)}`;
    document.getElementById('asrPrice').textContent = `${formatReal(asr.brl, 12)}`;
    document.getElementById('barPrice').textContent = `${formatReal(barcelona.brl, 12)}`;
    document.getElementById('hbarPrice').textContent = `${formatReal(hedera.brl, 12)}`;
    document.getElementById('qntPrice').textContent = `${formatReal(quant.brl, 12)}`;
    document.getElementById('axsPrice').textContent = `${formatReal(axie.brl, 12)}`;
    document.getElementById('enjPrice').textContent = `${formatReal(enjincoin.brl, 12)}`;
    document.getElementById('icpPrice').textContent = `${formatReal(icp.brl, 12)}`;
    document.getElementById('ogPrice').textContent = `${formatReal(og.brl, 12)}`;
    document.getElementById('btcPrice').textContent = `${formatReal(bitcoin.brl, 12)}`;
    document.getElementById('ethPrice').textContent = `${formatReal(ethereum.brl, 12)}`;


    //definição das variáveis das moedas em relação a variação 24h
    document.getElementById('ltcVar').textContent = `${litecoin.brl_24h_change.toFixed(2)}`;
    document.getElementById('solVar').textContent = `${solana.brl_24h_change.toFixed(2)}`;
    document.getElementById('xrpVar').textContent = `${ripple.brl_24h_change.toFixed(2)}`;
    document.getElementById('adaVar').textContent = `${cardano.brl_24h_change.toFixed(2)}`;
    document.getElementById('dashVar').textContent = `${dash.brl_24h_change.toFixed(2)}`;
    document.getElementById('shibVar').textContent = `${shiba.brl_24h_change.toFixed(2)}`;
    document.getElementById('dogeVar').textContent = `${dogecoin.brl_24h_change.toFixed(2)}`;
    document.getElementById('bnbVar').textContent = `${binancecoin.brl_24h_change.toFixed(2)}`;
    document.getElementById('dotVar').textContent = `${polkadot.brl_24h_change.toFixed(2)}`;
    document.getElementById('atomVar').textContent = `${cosmos.brl_24h_change.toFixed(2)}`;
    document.getElementById('linkVar').textContent = `${chainlink.brl_24h_change.toFixed(2)}`;
    document.getElementById('uniVar').textContent = `${uniswap.brl_24h_change.toFixed(2)}`;
    document.getElementById('trxVar').textContent = `${tron.brl_24h_change.toFixed(2)}`;
    document.getElementById('manaVar').textContent = `${decentraland.brl_24h_change.toFixed(2)}`;
    document.getElementById('xlmVar').textContent = `${stellar.brl_24h_change.toFixed(2)}`;
    document.getElementById('ftmVar').textContent = `${fantom.brl_24h_change.toFixed(2)}`;
    document.getElementById('vetVar').textContent = `${vechain.brl_24h_change.toFixed(2)}`;
    document.getElementById('xtzVar').textContent = `${tezos.brl_24h_change.toFixed(2)}`;
    document.getElementById('hntVar').textContent = `${helium.brl_24h_change.toFixed(2)}`;
    document.getElementById('iotaVar').textContent = `${iota.brl_24h_change.toFixed(2)}`;
    document.getElementById('oneVar').textContent = `${harmony.brl_24h_change.toFixed(2)}`;
    document.getElementById('galaVar').textContent = `${gala.brl_24h_change.toFixed(2)}`;
    document.getElementById('aaveVar').textContent = `${aave.brl_24h_change.toFixed(2)}`;
    document.getElementById('mkrVar').textContent = `${maker.brl_24h_change.toFixed(2)}`;
    document.getElementById('stxVar').textContent = `${blockstack.brl_24h_change.toFixed(2)}`;
    document.getElementById('xecVar').textContent = `${ecash.brl_24h_change.toFixed(2)}`;
    document.getElementById('zecVar').textContent = `${zcash.brl_24h_change.toFixed(2)}`;
    document.getElementById('neoVar').textContent = `${neo.brl_24h_change.toFixed(2)}`;
    document.getElementById('ksmVar').textContent = `${kusama.brl_24h_change.toFixed(2)}`;
    document.getElementById('runeVar').textContent = `${thorchain.brl_24h_change.toFixed(2)}`;
    document.getElementById('chzVar').textContent = `${chiliz.brl_24h_change.toFixed(2)}`;
    document.getElementById('celoVar').textContent = `${celo.brl_24h_change.toFixed(2)}`;
    document.getElementById('cakeVar').textContent = `${cake.brl_24h_change.toFixed(2)}`;
    document.getElementById('grtVar').textContent = `${tgraph.brl_24h_change.toFixed(2)}`;
    document.getElementById('sandVar').textContent = `${tsandbox.brl_24h_change.toFixed(2)}`;
    document.getElementById('maticVar').textContent = `${matic.brl_24h_change.toFixed(2)}`;
    document.getElementById('lunaVar').textContent = `${luna.brl_24h_change.toFixed(2)}`;
    document.getElementById('avaxVar').textContent = `${avalanche.brl_24h_change.toFixed(2)}`;
    document.getElementById('crvVar').textContent = `${curve.brl_24h_change.toFixed(2)}`;
    document.getElementById('pundixVar').textContent = `${pundix.brl_24h_change.toFixed(2)}`;
    document.getElementById('psgVar').textContent = `${psg.brl_24h_change.toFixed(2)}`;
    document.getElementById('lazioVar').textContent = `${lazio.brl_24h_change.toFixed(2)}`;
    document.getElementById('portoVar').textContent = `${porto.brl_24h_change.toFixed(2)}`;
    document.getElementById('acmVar').textContent = `${acm.brl_24h_change.toFixed(2)}`;
    document.getElementById('cityVar').textContent = `${manchester.brl_24h_change.toFixed(2)}`;
    document.getElementById('santosVar').textContent = `${santos.brl_24h_change.toFixed(2)}`;
    document.getElementById('atmVar').textContent = `${madrid.brl_24h_change.toFixed(2)}`;
    document.getElementById('juvVar').textContent = `${juventus.brl_24h_change.toFixed(2)}`;
    document.getElementById('asrVar').textContent = `${asr.brl_24h_change.toFixed(2)}`;
    document.getElementById('barVar').textContent = `${barcelona.brl_24h_change.toFixed(2)}`;
    document.getElementById('hbarVar').textContent = `${hedera.brl_24h_change.toFixed(2)}`;
    document.getElementById('qntVar').textContent = `${quant.brl_24h_change.toFixed(2)}`;
    document.getElementById('axsVar').textContent = `${axie.brl_24h_change.toFixed(2)}`;
    document.getElementById('enjVar').textContent = `${enjincoin.brl_24h_change.toFixed(2)}`;
    document.getElementById('icpVar').textContent = `${icp.brl_24h_change.toFixed(2)}`;
    document.getElementById('ogVar').textContent = `${og.brl_24h_change.toFixed(2)}`;
    document.getElementById('flowVar').textContent = `${flow.brl_24h_change.toFixed(2)}`;
    document.getElementById('btcVar').textContent = `${bitcoin.brl_24h_change.toFixed(2)}`;
    document.getElementById('ethVar').textContent = `${ethereum.brl_24h_change.toFixed(2)}`;


    //definição das variáveis das moedas em relação ao valor disponível
    document.getElementById('ltcCota').textContent = `${formatReal(litecoin.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('solCota').textContent = `${formatReal(solana.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('xrpCota').textContent = `${formatReal(ripple.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('adaCota').textContent = `${formatReal(cardano.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('dashCota').textContent = `${formatReal(dash.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('shibCota').textContent = `${formatReal(shiba.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('dogeCota').textContent = `${formatReal(dogecoin.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('bnbCota').textContent = `${formatReal(binancecoin.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('dotCota').textContent = `${formatReal(polkadot.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('atomCota').textContent = `${formatReal(cosmos.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('linkCota').textContent = `${formatReal(chainlink.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('trxCota').textContent = `${formatReal(tron.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('manaCota').textContent = `${formatReal(decentraland.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('xlmCota').textContent = `${formatReal(stellar.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('ftmCota').textContent = `${formatReal(fantom.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('flowCota').textContent = `${formatReal(flow.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('vetCota').textContent = `${formatReal(vechain.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('xtzCota').textContent = `${formatReal(tezos.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('hntCota').textContent = `${formatReal(helium.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('iotaCota').textContent = `${formatReal(iota.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('oneCota').textContent = `${formatReal(harmony.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('galaCota').textContent = `${formatReal(gala.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('aaveCota').textContent = `${formatReal(aave.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('mkrCota').textContent = `${formatReal(maker.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('stxCota').textContent = `${formatReal(blockstack.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('xecCota').textContent = `${formatReal(ecash.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('zecCota').textContent = `${formatReal(zcash.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('neoCota').textContent = `${formatReal(neo.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('ksmCota').textContent = `${formatReal(kusama.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('runeCota').textContent = `${formatReal(thorchain.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('chzCota').textContent = `${formatReal(chiliz.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('celoCota').textContent = `${formatReal(celo.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('cakeCota').textContent = `${formatReal(cake.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('grtCota').textContent = `${formatReal(tgraph.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('sandCota').textContent = `${formatReal(tsandbox.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('maticCota').textContent = `${formatReal(matic.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('lunaCota').textContent = `${formatReal(luna.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('avaxCota').textContent = `${formatReal(avalanche.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('crvCota').textContent = `${formatReal(curve.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('pundixCota').textContent = `${formatReal(pundix.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('psgCota').textContent = `${formatReal(psg.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('lazioCota').textContent = `${formatReal(lazio.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('portoCota').textContent = `${formatReal(porto.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('acmCota').textContent = `${formatReal(acm.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('cityCota').textContent = `${formatReal(manchester.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('santosCota').textContent = `${formatReal(santos.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('atmCota').textContent = `${formatReal(madrid.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('juvCota').textContent = `${formatReal(juventus.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('asrCota').textContent = `${formatReal(asr.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('barCota').textContent = `${formatReal(barcelona.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('hbarCota').textContent = `${formatReal(hedera.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('qntCota').textContent = `${formatReal(quant.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('axsCota').textContent = `${formatReal(axie.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('enjCota').textContent = `${formatReal(enjincoin.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('icpCota').textContent = `${formatReal(icp.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('ogCota').textContent = `${formatReal(og.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('uniCota').textContent = `${formatReal(uniswap.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('btcCota').textContent = `${formatReal(bitcoin.brl_market_cap.toFixed(2), 12)}`;
    document.getElementById('ethCota').textContent = `${formatReal(ethereum.brl_market_cap.toFixed(2), 12)}`;






}

getCota();

