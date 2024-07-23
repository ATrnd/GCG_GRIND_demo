function setupStateTwo() {
    const html = `
        ${generateConnectionReq()}
        ${generateStateOneHTML()}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        setState(1);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        setState(3);
    });
}
