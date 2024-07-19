function setupStateThree() {
    const html = `
        ${generateStateThreeHTML()}
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
}

function generateStateThreeHTML() {
    return `
        <!-- wrap -->
        <div class="wrap flex-core flex-col flex-center">

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
        </div>
        <!-- wrap -->
    `;
}
