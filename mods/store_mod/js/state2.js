function setupStateTwo() {
    const html = `
        <!-- wallet-wrap -->
        <div class="wallet-wrap flex-core flex-col flex-center">
            <div class="wallet-ctr flex-core flex-col flex-start">
                <!-- connection-req -->
                <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">connection request</p>
                </div>
                <!-- connection-req -->

                <!-- website-from -->
                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">website</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p4">GridchainGamesGrind</p>
                </div>
                <!-- website-from -->

                <!-- addr-to -->
                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">addr</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
                </div>
                <!-- addr-to -->

                <!-- sign-ctr -->
                <div class="nfo-ctr-6 flex-core flex-row flex-center-end">
                    <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
                    <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">connect</div>
                </div>
                <!-- sign-ctr -->
            </div>
        </div>
        <!-- wallet-wrap -->

        <!-- wrap -->
        <div class="wrap flex-core flex-col flex-center dim">
            <div class="form-ctr flex-core flex-col">
                <!-- addr ctr -->
                <div class="nfo-ctr-0 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">addr</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
                </div>
                <!-- addr ctr -->

                <!-- connection ctr -->
                <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">connection</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">disconnected</p>
                </div>
                <!-- connection ctr -->

                <!-- connection trigger ctr -->
                <div class="nfo-ctr-3 flex-core flex-row flex-center-start connect-enabled">
                    <p id="connection-trigger" class="nfo-p3">connect</p>
                </div>
                <!-- connection trigger ctr -->
            </div>
        </div>
        <!-- wrap -->
    `;

    document.body.innerHTML = html;

    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        setState(1);
    });

    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        setState(3);
    });
}

// v2 {{{
//function setupStateTwo() {
//    const html = `
//        <!-- wallet-wrap -->
//        <div class="wallet-wrap flex-core flex-col flex-center">
//            <div class="wallet-ctr flex-core flex-col flex-start">
//                <!-- connection-req -->
//                <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
//                    <p class="nfo-p1">connection request</p>
//                </div>
//                <!-- connection-req -->
//
//                <!-- website-from -->
//                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                    <p class="nfo-p1">website</p>
//                    <p class="nfo-sep-1">::</p>
//                    <p class="nfo-p4">GridchainGamesGrind</p>
//                </div>
//                <!-- website-from -->
//
//                <!-- addr-to -->
//                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                    <p class="nfo-p1">addr</p>
//                    <p class="nfo-sep-1">::</p>
//                    <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
//                </div>
//                <!-- addr-to -->
//
//                <!-- sign-ctr -->
//                <div class="nfo-ctr-6 flex-core flex-row flex-center-end">
//                    <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
//                    <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">connect</div>
//                </div>
//                <!-- sign-ctr -->
//            </div>
//        </div>
//        <!-- wallet-wrap -->
//
//        <!-- wrap -->
//        <div class="wrap flex-core flex-col flex-center dim">
//            <div class="form-ctr flex-core flex-col">
//                <!-- addr ctr -->
//                <div class="nfo-ctr-0 flex-core flex-row flex-center-start">
//                    <p class="nfo-p1">addr</p>
//                    <p class="nfo-sep-1">::</p>
//                    <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
//                </div>
//                <!-- addr ctr -->
//
//                <!-- connection ctr -->
//                <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                    <p class="nfo-p1">connection</p>
//                    <p class="nfo-sep-1">::</p>
//                    <p class="nfo-p2">disconnected</p>
//                </div>
//                <!-- connection ctr -->
//
//                <!-- connection trigger ctr -->
//                <div class="nfo-ctr-3 flex-core flex-row flex-center-start connect-enabled">
//                    <p id="connection-trigger" class="nfo-p3">connect</p>
//                </div>
//                <!-- connection trigger ctr -->
//            </div>
//        </div>
//        <!-- wrap -->
//    `;
//
//    document.body.innerHTML = html;
//
//    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
//        setState(1);
//    });
//
//    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
//        setState(3);
//    });
//}
//
// }}}
