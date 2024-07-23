function setupStateFour() {
    const html = `
        ${generateSignReq()}
        ${generateStateFourHTML()}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        setState(3);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        hackedDollars += 1000;
        setState(3);
    });
}
function generateStateFourHTML() {
    return `
    <!-- wrap -->
    <div class="wrap flex-core flex-col flex-center">
    <div class="machine-ui-ctr-wrap flex-core flex-row flex-start">
    ${generateMachineUIHTML(true)}
    ${generateGrindUIHTML(true)}
    </div>
    </div>
    <!-- wrap -->
`;
}
