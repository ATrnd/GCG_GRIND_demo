function setupStateThirteen() {
    const html = `
        ${generateSignReq()}
        ${generateStateElevenHTML(true)}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        console.log('wallet-connection-reject');
        setState(11);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        console.log('wallet-connection-enable');
        handleSwapGrindTokens();
        tradeTokenXyzValue           = 0;
        tradeTokenHackedDollarValueA = 0;
        setState(3);
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            console.log('wallet-connection-enable');
            handleSwapGrindTokens();
            tradeTokenXyzValue          = 0;
            tradeTokenHackedDollarValue = 0;
            setState(3);
        }

        if (event.key === 'Escape') {
            console.log('wallet-connection-reject');
            setState(11);
        }
    });

}
