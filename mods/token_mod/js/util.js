function generateConnectionReq() {
    return `
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
    `;
}

function generateSignReq() {
    return `
    <!-- wallet-wrap -->
    <div class="wallet-wrap flex-core flex-col flex-center">
    <div class="wallet-ctr flex-core flex-col flex-start">

        <!-- sig-req -->
        <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
        <p class="nfo-p1">signature request</p>
        </div>
        <!-- sig-req -->

        <!-- addr-from -->
        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
        <p class="nfo-p1">from</p>
        <p class="nfo-sep-1">::</p>
        <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
        </div>
        <!-- addr-from -->

        <!-- addr-to -->
        <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
        <p class="nfo-p1">to</p>
        <p class="nfo-sep-1">::</p>
        <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
        </div>
        <!-- addr-to -->

        <!-- wallet-fn -->
        <div class="nfo-ctr-6 flex-core flex-col flex-end-center">

            <!-- gas-amount -->
            <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
            <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
            <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
            </div>
            <!-- gas-amount -->

            <!-- sign-ctr -->
            <div class="flex-core flex-row flex-center">
            <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
            <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
            </div>
            <!-- sign-ctr -->

        </div>
        <!-- wallet-fn -->

    </div>
    </div>
    <!-- wallet-wrap -->
    `;
}


