function setupStateEight() {
    const html = `
        ${generateSignReq()}
        ${generateStateSevenHTML(true)}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        selectedEnergyAmnt = 0;
        selectedEnergyPrice = 0;
        currentSelectedElementId = null
        console.log('state 8 wallet connection reject :: reset UI');
        setState(3);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        hackedDollars -= selectedEnergyPrice;
        userEnergy += selectedEnergyAmnt;
        console.log(`Energy bought, for ${selectedEnergyPrice} remaining dollars: ${hackedDollars}`);
        console.log(`userEnergy :: ${userEnergy}`);
        selectedEnergyPrice = 0;
        currentSelectedElementId = null
        setState(3);
    });
}
