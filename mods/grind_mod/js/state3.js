function setupStateThree() {
    let html = ``;

    // === {grindState} ===
    if(grindState && !claimState) {
        html = `
            ${generateStateThreeHTML(false, false, grindState)}
        `;
        document.body.innerHTML = html;
        handleGrindTrigger();
        document.getElementById('claim-trigger-btn').addEventListener('click', function() {
            let counterValidation = validateCompletedCounters();
            if(counterValidation) {
                let claimConfig = [isCounter1Completed,isCounter2Completed,isCounter1Completed];
                claimData = grindConfig(true,claimConfig);
                setState(10);
            }
        });

    // === {claimState} ===
    } else if(grindState && claimState) {
        html = `
            ${generateStateThreeHTML(false, false, grindState)}
        `;
        document.body.innerHTML = html;
        document.getElementById('claim-trigger-btn').addEventListener('click', function() {
            let counterValidation = validateCompletedCounters();
            if(counterValidation) {
                let claimConfig = [isCounter1Completed,isCounter2Completed,isCounter1Completed];
                claimData = grindConfig(true,claimConfig);
                setState(10);
            }
        });

    // === {genState} ===
    } else {
        html = `
            ${generateStateThreeHTML(false, false, grindState)}
        `;
        document.body.innerHTML = html;
        document.getElementById('machine-shop-fn').addEventListener('click', function() {
            setState(5);
        });
        document.getElementById('hack-dollars-trigger').addEventListener('click', function() {
            setState(4);
        });
        document.getElementById('energy-store-trigger').addEventListener('click', function() {
            setState(7);
        });
        document.getElementById('grind-trigger-btn').addEventListener('click', function() {
            if(grindValidate()) {
                grindData = grindConfig()
                setState(9);
            } else {
                console.log('--- invalid grind config ---');
            }
        });
        setupGrindSelectors();

        }
}

// [render] :: generateGrindUIAdvancedHTML {{{
function generateGrindUIAdvancedHTML(dimmed = false, grindData = [], grindState = false) {
 const {
        grindAmntCounterId01,
        grindStateIconId01,
        grindTimeCtrId01,
        grindElectroCtrId01,
        grindCryptoCounterMaxId01,
        grindCryptoCounterCurrentId01,
        grindAmntCounterId02,
        grindStateIconId02,
        grindTimeCtrId02,
        grindElectroCtrId02,
        grindCryptoCounterMaxId02,
        grindCryptoCounterCurrentId02,
        grindAmntCounterId03,
        grindStateIconId03,
        grindTimeCtrId03,
        grindElectroCtrId03,
        grindCryptoCounterMaxId03,
        grindCryptoCounterCurrentId03
    } = applyGrindConfig(grindData);

    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    let cntrlConfig        = 'connect-enabled grind-ctrl-el grind-ctrl-el-bb flex-core flex-col flex-center';
    let grindTriggerConfig = 'connect-enabled grind-ctr-trigger-ctr flex-core flex-row flex-center lg-ml-25';
    let claimTriggerConfig = 'connect-disabled claim-type-trigger flex-core flex-row flex-center lg-ml-25';
    if(grindState) {
        cntrlConfig        = 'connect-disabled grind-ctrl-el-swap flex-core flex-col flex-center';
        grindTriggerConfig = 'connect-disabled grind-ctr-trigger-ctr-swap flex-core flex-row flex-center lg-ml-25';
        claimTriggerConfig = 'connect-enabled claim-type-trigger-swap flex-core flex-row flex-center lg-ml-25';
    }
    return `
    <!-- grind UI {{{ -->
    <div class="flex-core flex-col flex-center ${dimConfig}">

    <!-- grind-ctr-ui-sys-wrap {{{ -->
    <div class="grind-ctr-ui-sys-wrap flex-core flex-row flex-start">

    <!-- grind-ctr-ui-wrap {{{ -->
    <div class="grind-ctr-ui-wrap flex-core flex-col flex-center">

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-01">x</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-01" class="${cntrlConfig}">+</div>
            <div id="grind-amnt-counter-sub-id-01" class="${cntrlConfig}">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-01" class="grind-state-el flex-core flex-col flex-center">${grindAmntCounterId01}</div>
            <div id="grind-state-icon-id-01" class="grind-state-el flex-core flex-col flex-center">${grindStateIconId01}</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-01" class="grind-counter-el flex-core flex-row flex-center">${grindTimeCtrId01}s</div>
            <div id="grind-electro-ctr-id-01" class="grind-counter-el flex-core flex-row flex-center">${grindElectroCtrId01}<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>x :: <span id="grind-crypto-counter-max-id-01">${grindCryptoCounterMaxId01}</span> / <span id="grind-crypto-counter-current-id-01">${grindCryptoCounterCurrentId01}</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start lg-mt-25">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-02">y</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-02" class="${cntrlConfig}">+</div>
            <div id="grind-amnt-counter-sub-id-02" class="${cntrlConfig}">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-02" class="grind-state-el flex-core flex-col flex-center">${grindAmntCounterId02}</div>
            <div id="grind-state-icon-id-02" class="grind-state-el flex-core flex-col flex-center">${grindStateIconId02}</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-02" class="grind-counter-el flex-core flex-row flex-center">${grindTimeCtrId02}s</div>
            <div id="grind-electro-ctr-id-02" class="grind-counter-el flex-core flex-row flex-center">${grindElectroCtrId02}<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>y :: <span id="grind-crypto-counter-max-id-02">${grindCryptoCounterMaxId02}</span> / <span id="grind-crypto-counter-current-id-02">${grindCryptoCounterCurrentId02}</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start lg-mt-25">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-03">z</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-03" class="${cntrlConfig}">+</div>
            <div id="grind-amnt-counter-sub-id-03" class="${cntrlConfig}">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-03" class="grind-state-el flex-core flex-col flex-center">${grindAmntCounterId03}</div>
            <div id="grind-state-icon-id-03" class="grind-state-el flex-core flex-col flex-center">${grindStateIconId03}</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-03" class="grind-counter-el flex-core flex-row flex-center">${grindTimeCtrId03}s</div>
            <div id="grind-electro-ctr-id-03" class="grind-counter-el flex-core flex-row flex-center">${grindElectroCtrId03}<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>z :: <span id="grind-crypto-counter-max-id-03">${grindCryptoCounterMaxId03}</span> / <span id="grind-crypto-counter-current-id-03">${grindCryptoCounterCurrentId03}</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    </div>
    <!-- grind-ctr-ui-wrap }}} -->

    <!-- grind-ctr-trigger-ctr {{{ -->
    <div id="grind-trigger-btn" class="${grindTriggerConfig}">
        <p class="grind-ctr-trigger">grind</p>
    </div>
    <!-- grind-ctr-trigger-ctr }}} -->

    </div>
    <!-- grind-ctr-ui-sys-wrap }}} -->

    <!-- claim-ctr-ui-sys-wrap -->
    <div class="claim-ctr-ui-sys-wrap flex-core flex-col flex-end">

        <!-- claim-ctr-ui-wrap -->
        <div class="claim-ctr-ui-wrap flex-core flex-row flex-start">

            <div class="claim-type-ctr flex-core flex-col flex-start">
                <div class="claim-type-el flex-core flex-row flex-center-start"><p>x :: <span id="claim-type-id-01">${claimValueType1}</span></p></div>
                <div class="claim-type-el flex-core flex-row flex-center-start lg-mt-41"><p>y :: <span id="claim-type-id-02">${claimValueType2}</span></p></div>
                <div class="claim-type-el flex-core flex-row flex-center-start lg-mt-41"><p>z :: <span id="claim-type-id-03">${claimValueType3}</span></p></div>
            </div>

            <div class="claim-type-trigger-ctr flex-core flex-row flex-start">
                <div id="claim-trigger-btn" class="${claimTriggerConfig}"><p>claim(x,y,z)</p></div>
            </div>

        </div>
        <!-- claim-ctr-ui-wrap -->

    </div>
    <!-- claim-ctr-ui-sys-wrap -->

    </div>
    <!-- }}} -->
    `;
}

// }}}

// [render] :: generateStateThreeHTML {{{
function generateStateThreeHTML(machineUIDim = false, grindUIDim = false, grindState = false) {
    return `
    <!-- wrap -->
    <div class="wrap flex-core flex-col flex-center">
    <div class="machine-ui-ctr-wrap flex-core flex-row flex-start">
    ${generateMachineUIHTML(machineUIDim)}
    ${generateGrindUIAdvancedHTML(grindUIDim, grindData, grindState)}
    </div>
    </div>
    <!-- wrap -->
    `;
}

// }}}

// [render] :: generateMachineUIHTML {{{
function generateMachineUIHTML(dimmed = false) {
    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    return `
    <!-- machine UI {{{ -->
    <div class="flex-core flex-col flex-center lg-mr-25 ${dimConfig}">

    <!-- machine-ctr -->
    <div class="machine-ctr flex-core flex-row flex-start">

        <!-- machine-store-fn-btn -->
        <div id="machine-shop-fn" class="machine-shop-fn-ctr flex-core flex-row flex-center">
        <div class="machine-shop-fn-p flex-core flex-row flex-center">
        <p><span>store</span></p>
        <p>machine</p>
        </div>
        </div>
        <!-- machine-store-fn-btn -->

        <!-- machine-el-ctr-1 -->
        <div class="machine-ctr-s1 flex-core flex-col flex-center">
        <div id="machineUpgradeATypeMainUI" class="machine-ctr-el1">${machineUpgradeATypeMainUI}</div>
        </div>
        <!-- machine-el-ctr-1 -->

        <!-- machine-el-ctr-2 -->
        <div class="machine-ctr-s2">
        <div id="machineUpgradeBTypeMainUI" class="machine-ctr-el2 flex-core flex-col flex-center">${machineUpgradeBTypeMainUI}</div>
        <div id="machineUpgradeCTypeMainUI" class="machine-ctr-el3 flex-core flex-col flex-center">${machineUpgradeCTypeMainUI}</div>
        </div>
        <!-- machine-el-ctr-2 -->

    </div>
    <!-- machine-ctr -->

    <!-- data-ctr -->
    <div class="data-ctr flex-core flex-core flex-col">

        <!-- connection ctr -->
        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
        <p class="nfo-p1">connection</p>
        <p class="nfo-sep-1">::</p>
        <p class="nfo-p2">connected</p>
        </div>
        <!-- connection ctr -->

        <!-- addr ctr -->
        <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
        <p class="nfo-p1">addr</p>
        <p class="nfo-sep-1">::</p>
        <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
        </div>
        <!-- addr ctr -->

    </div>
    <!-- data-ctr -->

    <!-- energy-store-wrap -->
    <div class="energy-store-wrap fn-ctr flex-core flex-col flex-start">

    <!-- energy-store-ctr -->
    <div class="energy-store-ctr fn-ctr flex-core flex-row flex-center-start">

        <!-- hack-ctr -->
        <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
        <p class="nfo-p5">hack<span>$</span></p>
        </div>
        <!-- hack-ctr -->

        <!-- hacked-$-ctr -->
        <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
        <p class="nfo-p6">$</p>
        <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
        </div>
        <!-- hacked-$-ctr -->

        <!-- energy state -->
        <div class="nfo-sub-ctr-4 flex-core flex-row flex-center">
        <p class="nfo-p9"><span id="energyMax">${userMaxEnergy}</span>/<span id="energyUser">${userEnergy}</span></p>
        </div>
        <!-- energy state -->

    </div>
    <!-- energy-store-ctr -->

    <!-- energy-icon-ctr -->
    <div class="energy-icon-ctr flex-core flex-row flex-end">
    <div class="energy-icon flex-core flex-row flex-center"><p></p>
    </div>
    <!-- energy-icon-ctr -->

    </div>
    <!-- energy-store-wrap -->

    <!-- energy-store-trigger-ctr -->
    <div class="energy-store-trigger-ctr flex-core flex-row flex-end">
    <div id="energy-store-trigger" class="energy-store-trigger flex-core flex-row flex-center">
    <p><span>store</span></p>
    <p>energy</p>
    </div>
    </div>
    <!-- energy-store-trigger-ctr -->

    </div>
    <!-- machine-ctr -->

    </div>
    <!-- }}} -->
    `;
}

// }}}

// [render] :: generateGrindUIHTML {{{
function generateGrindUIHTML(dimmed = false) {
    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    return `
    <!-- grind UI {{{ -->
    <div class="flex-core flex-col flex-center ${dimConfig}">

    <!-- grind-ctr-ui-sys-wrap {{{ -->
    <div class="grind-ctr-ui-sys-wrap flex-core flex-row flex-start">

    <!-- grind-ctr-ui-wrap {{{ -->
    <div class="grind-ctr-ui-wrap flex-core flex-col flex-center">

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-01">x</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-01" class="connect-enabled grind-ctrl-el grind-ctrl-el-bb flex-core flex-col flex-center">+</div>
            <div id="grind-amnt-counter-sub-id-01" class="connect-enabled grind-ctrl-el grind-ctrl-el-bt flex-core flex-col flex-center">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-01" class="grind-state-el flex-core flex-col flex-center">0</div>
            <div id="grind-state-icon-id-01" class="grind-state-el flex-core flex-col flex-center">○</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-01" class="grind-counter-el flex-core flex-row flex-center">0s</div>
            <div id="grind-electro-ctr-id-01" class="grind-counter-el flex-core flex-row flex-center">0<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>x :: <span id="grind-crypto-counter-max-id-01">0</span> / <span id="grind-crypto-counter-current-id-01">0</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start lg-mt-25">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-02">y</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-02" class="connect-enabled grind-ctrl-el grind-ctrl-el-bb flex-core flex-col flex-center">+</div>
            <div id="grind-amnt-counter-sub-id-02" class="connect-enabled grind-ctrl-el grind-ctrl-el-bt flex-core flex-col flex-center">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-02" class="grind-state-el flex-core flex-col flex-center">0</div>
            <div id="grind-state-icon-id-02" class="grind-state-el flex-core flex-col flex-center">○</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-02" class="grind-counter-el flex-core flex-row flex-center">0s</div>
            <div id="grind-electro-ctr-id-02" class="grind-counter-el flex-core flex-row flex-center">0<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>y :: <span id="grind-crypto-counter-max-id-02">0</span> / <span id="grind-crypto-counter-current-id-02">0</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    <!-- grind-ctr-wrap {{{ -->
    <div class="grind-ctr-wrap flex-core flex-col flex-start lg-mt-25">

    <!-- grind-ctr -->
    <div class="grind-ctr flex-core flex-row flex-start">

        <!-- grind-type-ctr -->
        <div class="grind-type-ctr flex-core flex-col flex-center">
            <p id="grind-type-id-03">z</p>
        </div>
        <!-- grind-type-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-ctrl-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-add-id-03" class="connect-enabled grind-ctrl-el grind-ctrl-el-bb flex-core flex-col flex-center">+</div>
            <div id="grind-amnt-counter-sub-id-03" class="connect-enabled grind-ctrl-el grind-ctrl-el-bt flex-core flex-col flex-center">-</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-state-ctr flex-core flex-col flex-center">
            <div id="grind-amnt-counter-id-03" class="grind-state-el flex-core flex-col flex-center">0</div>
            <div id="grind-state-icon-id-03" class="grind-state-el flex-core flex-col flex-center">○</div>
        </div>
        <!-- grind-ctrl-ctr -->

        <!-- grind-ctrl-ctr -->
        <div class="grind-counter-ctr flex-core flex-row flex-start">
            <div id="grind-time-ctr-id-03" class="grind-counter-el flex-core flex-row flex-center">0s</div>
            <div id="grind-electro-ctr-id-03" class="grind-counter-el flex-core flex-row flex-center">0<span class="electro"></span></div>
        </div>
        <!-- grind-ctrl-ctr -->

    </div>
    <!-- grind-ctr -->

        <!-- grind-crypto-counter-ctr -->
        <div class="grind-crypto-counter-ctr flex-core flex-row flex-end">
            <div class="grind-crypto-counter-el flex-core flex-row flex-center">
            <p>z :: <span id="grind-crypto-counter-max-id-03">0</span> / <span id="grind-crypto-counter-current-id-03">0</span></p>
            </div>
        </div>
        <!-- grind-crypto-counter-ctr -->

    </div>
    <!-- grind-ctr-wrap }}} -->

    </div>
    <!-- grind-ctr-ui-wrap }}} -->

    <!-- grind-ctr-trigger-ctr {{{ -->
    <div id="grind-trigger-btn" class="connect-enabled grind-ctr-trigger-ctr flex-core flex-row flex-center lg-ml-25">
        <p class="grind-ctr-trigger">grind</p>
    </div>
    <!-- grind-ctr-trigger-ctr }}} -->

    </div>
    <!-- grind-ctr-ui-sys-wrap }}} -->

    <!-- claim-ctr-ui-sys-wrap -->
    <div class="claim-ctr-ui-sys-wrap flex-core flex-col flex-end">

        <!-- claim-ctr-ui-wrap -->
        <div class="claim-ctr-ui-wrap flex-core flex-row flex-start">

            <div class="claim-type-ctr flex-core flex-col flex-start">
                <div class="claim-type-el flex-core flex-row flex-center-start"><p>x :: <span id="claim-type-id-01">0</span></p></div>
                <div class="claim-type-el flex-core flex-row flex-center-start lg-mt-41"><p>y :: <span id="claim-type-id-02">0</span></p></div>
                <div class="claim-type-el flex-core flex-row flex-center-start lg-mt-41"><p>z :: <span id="claim-type-id-03">0</span></p></div>
            </div>

            <div class="claim-type-trigger-ctr flex-core flex-row flex-start">
                <div id="claim-trigger-btn" class="connect-disabled claim-type-trigger flex-core flex-row flex-center lg-ml-25"><p>claim(x,y,z)</p></div>
            </div>

        </div>
        <!-- claim-ctr-ui-wrap -->

    </div>
    <!-- claim-ctr-ui-sys-wrap -->

    </div>
    <!-- }}} -->
    `;
}

// }}}

// [event] :: setupGrindSelectors {{{
function setupGrindSelectors() {
    for (let i = 1; i <= 3; i++) {
        const addId = `grind-amnt-counter-add-id-0${i}`;
        const subId = `grind-amnt-counter-sub-id-0${i}`;
        const counterId = `grind-amnt-counter-id-0${i}`;
        const addElement = document.getElementById(addId);
        const subElement = document.getElementById(subId);
        if (addElement) {
            addElement.addEventListener('click', function(event) {
                handleGrindCounterChange(addId, counterId, event);
            });
        }
        if (subElement) {
            subElement.addEventListener('click', function(event) {
                handleGrindCounterChange(subId, counterId, event);
            });
        }
    }
}

// }}}

// [fn] :: handleGrindCounterChange {{{
function handleGrindCounterChange(triggerId, counterId, event) {
    const counterElement = document.getElementById(counterId);
    if (!counterElement) return;
    let userEnergyElement = document.getElementById('energyUser');
    let value = parseInt(counterElement.textContent, 10) || 0;
    const increment = event.shiftKey ? 10 : 1;

    // console.log(`value :: ${value}`);
    // console.log(`increment :: ${increment}`);
    // console.log(`userEnergy :: ${userEnergy}`);

    // === {add} ===
    if (triggerId.includes('add')) {
        if (userEnergy >= increment) {

            value += increment;
            userEnergy -= increment;
            userEnergyElement = document.getElementById('energyUser').innerText = userEnergy;

        } else {
            console.log('Not enough energy');
            return;
        }

    // === {sub} ===
    } else if (triggerId.includes('sub')) {

        // === {if valid sub} ===
        if (value > 0) {

            if (event.shiftKey && value < 10) {
                value -= 1;
                userEnergy += 1;
                userEnergyElement = document.getElementById('energyUser').innerText = userEnergy;
            } else {
                value -= increment;
                userEnergy += increment;
                userEnergyElement = document.getElementById('energyUser').innerText = userEnergy;
            }

        } else {
            console.log('Counter is already at 0, cannot subtract further');
            return;
        }

    }

    counterElement.textContent = value;
    updateGrindStateIcon(counterId, value);
    updateGrindConfig(counterId, value);

}

// }}}

// [fn] :: updateGrindStateIcon {{{
function updateGrindStateIcon(counterElement, value) {
    const stateIconId = counterElement.replace('amnt-counter-id', 'state-icon-id');
    const stateIconElement = document.getElementById(stateIconId);
    if (value > 0) {
        stateIconElement.innerHTML = '❖';
    } else {
        stateIconElement.innerHTML = '○';
    }
}
// }}}

// [fn] :: updateGrindConfig {{{
function updateGrindConfig(counterId, value) {

    const timeCtrId = counterId.replace('amnt-counter', 'time-ctr');
    const electroCtrId = counterId.replace('amnt-counter', 'electro-ctr');
    const cryptoCtrId = counterId.replace('amnt-counter', 'crypto-counter-max');

    const timeCtrElement = document.getElementById(timeCtrId);
    const electroCtrElement = document.getElementById(electroCtrId);
    const cryptoCtrElement = document.getElementById(cryptoCtrId);

    if (timeCtrElement) {
        timeCtrElement.textContent = (value * 3) + 's';
    }
    if(electroCtrElement) {
        electroCtrElement.innerHTML = (value * 1) + '<span class="electro"></span>';
    }
    if(cryptoCtrElement) {
        cryptoCtrElement.innerHTML = (value * 1);
    }
}

// }}}

// [fn] :: handleGrindTrigger {{{
function handleGrindTrigger() {

    const counterFlags = checkGrindCounters();

    if (counterFlags[0]) {
        specificFunctionForCounter1();
    }
    if (counterFlags[1]) {
        specificFunctionForCounter2();
    }
    if (counterFlags[2]) {
        specificFunctionForCounter3();
    }
}

// }}}

// [fn] :: checkGrindCounters {{{
function checkGrindCounters() {
    let counterFlags = [false, false, false];
    let isAnyCounterGreaterThanZero = false;

    for (let i = 1; i <= 3; i++) {
        const counterId = `grind-amnt-counter-id-0${i}`;
        const counterElement = document.getElementById(counterId);
        const value = parseInt(counterElement.textContent, 10) || 0;
        if (value > 0) {
            isAnyCounterGreaterThanZero = true;
            counterFlags[i - 1] = true;
        }
    }

    return counterFlags;
}
// }}}

// [fn...] :: startIntervalForCounter {{{
function specificFunctionForCounter1() {
    onAllIntervalsDone(1, grindData);
    startIntervalForCounter(1, onAllIntervalsDone);
}

function specificFunctionForCounter2() {
    onAllIntervalsDone(2, grindData);
    startIntervalForCounter(2, onAllIntervalsDone);
}

function specificFunctionForCounter3() {
    onAllIntervalsDone(3, grindData);
    startIntervalForCounter(3, onAllIntervalsDone);
}

function startIntervalForCounter(counterId, onAllIntervalsDone) {

    let cntrElement          = document.getElementById(`grind-amnt-counter-id-0${counterId}`);
    let timeElement          = document.getElementById(`grind-time-ctr-id-0${counterId}`);
    let electroElement       = document.getElementById(`grind-electro-ctr-id-0${counterId}`);
    let cryptoCounterElement = document.getElementById(`grind-crypto-counter-current-id-0${counterId}`);

    let nIntervId;

    nIntervId = setInterval(counterFn, 500 );

    let counter = 0;
    function counterFn() {

        timeElement     = document.getElementById(`grind-time-ctr-id-0${counterId}`);
        timeElementCntr = timeElement.textContent;
        timeElementInt  = parseInt(timeElementCntr.replace('s', ''), 10);

        if(timeElementInt !== 0) {
            timeElementInt  = timeElementInt - 1;
            timeElement.textContent = timeElementInt + 's';
            counter++;

            // console.log(`--- grind-time-ctr-id-0${counterId} ---`);
            // console.log(`--- counterFn(${counter}) call ---`);

            if (counter === 3) {

                cntrElement          = document.getElementById(`grind-amnt-counter-id-0${counterId}`);
                electroElement       = document.getElementById(`grind-electro-ctr-id-0${counterId}`);
                cryptoCounterElement = document.getElementById(`grind-crypto-counter-current-id-0${counterId}`);

                cntrElementStr = cntrElement.innerText;
                cntrElementInt = parseInt(cntrElementStr, 10);
                cntrElementInt = cntrElementInt - 1;

                electroElementStr = electroElement.innerText;
                electroElementInt = parseInt(electroElementStr.replace('', ''), 10);
                electroElementInt = electroElementInt - 1;

                cryptoCounterElementStr = cryptoCounterElement.innerText;
                cryptoCounterElementInt = parseInt(cryptoCounterElementStr, 10);
                cryptoCounterElementInt = cryptoCounterElementInt + 1;

                cntrElement.innerText = cntrElementInt;
                electroElement.innerHTML = electroElementInt + '<span class="electro"></span>';
                cryptoCounterElement.innerText = cryptoCounterElementInt;

                counter = 0;
            }

        } else {
            stopInterval();
            // console.log(nIntervId);
            onAllIntervalsDone(counterId, grindData);
            document.getElementById(`grind-state-icon-id-0${counterId}`).innerText = '◉';
        }
    }

    function stopInterval() {
        clearInterval(nIntervId);
        nIntervId = null;
    }

}

// }}}

// [fn] :: grindValidate {{{
function grindValidate() {
    let validateGrind = false;
    const counterFlags = checkGrindCounters();
    counterFlags.forEach((flag, _) => {
        if (flag) {
            validateGrind = true;
        }
    });
    return validateGrind;
}

// }}}

// [fn] :: grindConfig {{{
function grindConfig(configFlag = false, configArr = []) {
    let counterFlags;

    if(configFlag) {
        counterFlags = configArr;
    } else {
        counterFlags = checkGrindCounters();
    }

    const grindData = [];

    counterFlags.forEach((flag, i) => {
        if (flag) {
            const counterId = i + 1;
            validateGrind = true;
            // console.log(`Counter ${counterId} is active`);

            const data = {
                elementID: counterId,
                cntrElement: parseInt(document.getElementById(`grind-amnt-counter-id-0${counterId}`).innerText),
                timeElement: parseInt(document.getElementById(`grind-time-ctr-id-0${counterId}`).innerText.replace('s', ''), 10),
                electroElement: parseInt(document.getElementById(`grind-electro-ctr-id-0${counterId}`).innerText.replace('', ''), 10),
                cryptoCounterElement: parseInt(document.getElementById(`grind-crypto-counter-current-id-0${counterId}`).innerText),
                cryptoCounterElementMax: parseInt(document.getElementById(`grind-crypto-counter-max-id-0${counterId}`).innerText),
                grindIcon: document.getElementById(`grind-state-icon-id-0${counterId}`).innerText,
            };
            grindData.push(data);
        }
    });

    return grindData;

}

// }}}

// [fn] :: getActiveGrindCounters {{{
function getActiveGrindCounters(grindData) {
    let activeCounters = [false, false, false];

    grindData.forEach(data => {
        switch (data.elementID) {
            case 1:
                activeCounters[0] = true;
                break;
            case 2:
                activeCounters[1] = true;
                break;
            case 3:
                activeCounters[2] = true;
                break;
        }
    });

    return activeCounters;
}

// }}}

// [fn] :: setActiveCountersStatus {{{
function setActiveCountersStatus(grindData) {
    const activeCounters = getActiveGrindCounters(grindData);

    if (activeCounters[0]) {
        isCounter1Active = true;
    }
    if (activeCounters[1]) {
        isCounter2Active = true;
    }
    if (activeCounters[2]) {
        isCounter3Active = true;
    }
}

// }}}

// [fn] :: onAllIntervalsDone {{{
function onAllIntervalsDone(_, grindData) {
    setActiveCountersStatus(grindData);

    const activeCounters = getActiveGrindCounters(grindData);

    if (activeCounters[0]) {
        checkAndSetCounterCompleted(1);
    }
    if (activeCounters[1]) {
        checkAndSetCounterCompleted(2);
    }
    if (activeCounters[2]) {
        checkAndSetCounterCompleted(3);
    }
}

// }}}

// [fn] :: checkAndSetCounterCompleted {{{
function checkAndSetCounterCompleted(counterId) {
    const counterElement = document.getElementById(`grind-amnt-counter-id-0${counterId}`);
    const value = parseInt(counterElement.textContent, 10) || 0;

    if (value === 0) {
        switch (counterId) {
            case 1:
                isCounter1Completed = true;
                break;
            case 2:
                isCounter2Completed = true;
                break;
            case 3:
                isCounter3Completed = true;
                break;
        }
    }
}

// }}}

// [fn] :: validateCompletedCounters {{{
function validateCompletedCounters() {
    if (isCounter1Active && !isCounter1Completed) return false;
    if (isCounter2Active && !isCounter2Completed) return false;
    if (isCounter3Active && !isCounter3Completed) return false;
    return true;
}

// }}}
