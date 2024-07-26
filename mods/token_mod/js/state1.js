function setupStateOne() {
    const html = `
        ${generateStateOneHTML()}
    `;
    document.body.innerHTML = html;
    document.getElementById('connection-trigger').addEventListener('click', function() {
        setState(2);
    });
}
function generateStateOneHTML(dimmed = false) {
    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    return `
        <!-- wrap -->
        <div class="wrap flex-core flex-col flex-center ${dimConfig}">
        <div class="form-ctr flex-core flex-col">

            <!-- addr ctr -->
            <div class="nfo-ctr-0 flex-core flex-row flex-center-start">
            <p class="nfo-p1">addr</p>
            <p class="nfo-sep-1">::</p>
            <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
            </div>
            <!-- addr ctr -->

            <!-- connection state ctr -->
            <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
            <p class="nfo-p1">connection</p>
            <p class="nfo-sep-1">::</p>
            <p class="nfo-p2">disconnected</p>
            </div>
            <!-- connection state ctr -->

            <!-- connection trigger -->
            <div id="connection-trigger" class="nfo-ctr-3 flex-core flex-row flex-center-start connect-enabled">
            <p class="nfo-p3">connect</p>
            </div>
            <!-- connection trigger -->

        </div>
        </div>
        `;
}
