function setupStateTen() {
    grindData  = [];
    grindData  = claimData

    let claimValueTypeConfig1 = 0;
    let claimValueTypeConfig2 = 0;
    let claimValueTypeConfig3 = 0;

    applyGrindConfig(grindData)
    const html = `
        ${generateSignReq()}
        ${generateStateThreeHTML(true, true, grindState)}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        console.log('wallet-connection-reject');
        claimState = true;
        grindState = true;
        setState(3);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        grindData              = applyGrindConfig([]);
        claimState             = false;
        grindState             = false;
        isCounter1Completed    = false;
        isCounter2Completed    = false;
        isCounter3Completed    = false;
        isCounter1Active       = false;
        isCounter2Active       = false;
        isCounter3Active       = false;
        claimValueTypeConfig1  = parseInt(document.getElementById('grind-crypto-counter-max-id-01').innerText, 10);
        claimValueTypeConfig2  = parseInt(document.getElementById('grind-crypto-counter-max-id-02').innerText, 10);
        claimValueTypeConfig3  = parseInt(document.getElementById('grind-crypto-counter-max-id-03').innerText, 10);
        claimValueType1       += claimValueTypeConfig1;
        claimValueType2       += claimValueTypeConfig2;
        claimValueType3       += claimValueTypeConfig3;
        setState(3);
    });
}
