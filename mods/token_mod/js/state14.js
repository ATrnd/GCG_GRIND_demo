function setupStateFourteen() {
    const html = `
        ${generateSignReq()}
        ${generateStateTwelveHTML(true)}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        console.log('wallet-connection-reject');
        setState(12);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        console.log('wallet-connection-enable');
        handleSwapErcTokens();
        tradeTokenGrindValue         = 0;
        tradeTokenHackedDollarValueB = 0;
        setState(3);
    });
}
