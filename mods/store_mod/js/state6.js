function setupStateSix() {
    const html = `
        <div class="wallet-wrap flex-core flex-col flex-center">
            <div class="wallet-ctr flex-core flex-col flex-start">
                <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">signature request</p>
                </div>
                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">from</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                </div>
                <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">to</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
                </div>
                <div class="nfo-ctr-6 flex-core flex-col flex-end-center">
                    <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
                        <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
                        <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
                    </div>
                    <div class="flex-core flex-row flex-center">
                        <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
                        <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap flex-core flex-col flex-center dim">
            <div class="machine-ctr flex-core flex-row flex-start">
                <div class="machine-shop-fn-ctr flex-core flex-row flex-center">
                    <div class="machine-shop-fn-p flex-core flex-row flex-center">
                        <p><span>store</span></p>
                        <p>machine</p>
                    </div>
                </div>
                <div class="machine-ctr-s1 flex-core flex-col flex-center">
                    <div class="machine-ctr-el1">${machineUpgradeATypeMainUI}</div>
                </div>
                <div class="machine-ctr-s2">
                    <div class="machine-ctr-el2 flex-core flex-col flex-center">${machineUpgradeBTypeMainUI}</div>
                    <div class="machine-ctr-el3 flex-core flex-col flex-center">${machineUpgradeCTypeMainUI}</div>
                </div>
            </div>
            <div class="data-ctr flex-core flex-core flex-col">
                <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">connection</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">connected</p>
                </div>
                <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">addr</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
                </div>
            </div>
            <div class="fn-ctr flex-core flex-row flex-center-start">
                <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
                    <p class="nfo-p5">hack<span>$</span></p>
                </div>
                <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
                    <p class="nfo-p6">$</p>
                    <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = html;

    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        setState(3);
    });

    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        calculateAndUpdateHackedDollars();
        updateMachineUpgradeUIState();
        setState(3);
    });
}

function calculateAndUpdateHackedDollars() {
    const machineUpgradeState = window.machineUpgradeState;
    let totalPrice = 0;
    const validPrices = [250, 500, 1000];

    if (machineUpgradeState) {
        const validValues = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

        if (validValues.includes(machineUpgradeState.machineUpgradeAType) && validPrices.includes(parseInt(machineUpgradeState.machineUpgradeATypePrice))) {
            totalPrice += parseInt(machineUpgradeState.machineUpgradeATypePrice) || 0;
        }
        if (validValues.includes(machineUpgradeState.machineUpgradeBType) && validPrices.includes(parseInt(machineUpgradeState.machineUpgradeBTypePrice))) {
            totalPrice += parseInt(machineUpgradeState.machineUpgradeBTypePrice) || 0;
        }
        if (validValues.includes(machineUpgradeState.machineUpgradeCType) && validPrices.includes(parseInt(machineUpgradeState.machineUpgradeCTypePrice))) {
            totalPrice += parseInt(machineUpgradeState.machineUpgradeCTypePrice) || 0;
        }
    }

    hackedDollars -= totalPrice;
}

function updateMachineUpgradeUIState() {
    const machineUpgradeState = window.machineUpgradeState;
    const validValues = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

    if (machineUpgradeState) {
        if (validValues.includes(machineUpgradeState.machineUpgradeAType)) {
            machineUpgradeATypeMainUI = machineUpgradeState.machineUpgradeAType;
        }
        if (validValues.includes(machineUpgradeState.machineUpgradeBType)) {
            machineUpgradeBTypeMainUI = machineUpgradeState.machineUpgradeBType;
        }
        if (validValues.includes(machineUpgradeState.machineUpgradeCType)) {
            machineUpgradeCTypeMainUI = machineUpgradeState.machineUpgradeCType;
        }
    }
}

// v2 {{{
// function setupStateSix() {
//     const html = `
//         <div class="wallet-wrap flex-core flex-col flex-center">
//             <div class="wallet-ctr flex-core flex-col flex-start">
//                 <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">signature request</p>
//                 </div>
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">from</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">to</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
//                 </div>
//                 <div class="nfo-ctr-6 flex-core flex-col flex-end-center">
//                     <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
//                         <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
//                         <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
//                     </div>
//                     <div class="flex-core flex-row flex-center">
//                         <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
//                         <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="wrap flex-core flex-col flex-center dim">
//             <div class="machine-ctr flex-core flex-row flex-start">
//                 <div class="machine-shop-fn-ctr flex-core flex-row flex-center">
//                     <div class="machine-shop-fn-p flex-core flex-row flex-center">
//                         <p><span>store</span></p>
//                         <p>machine</p>
//                     </div>
//                 </div>
//                 <div class="machine-ctr-s1 flex-core flex-col flex-center">
//                     <div class="machine-ctr-el1">${machineUpgradeATypeMainUI}</div>
//                 </div>
//                 <div class="machine-ctr-s2">
//                     <div class="machine-ctr-el2 flex-core flex-col flex-center">${machineUpgradeBTypeMainUI}</div>
//                     <div class="machine-ctr-el3 flex-core flex-col flex-center">${machineUpgradeCTypeMainUI}</div>
//                 </div>
//             </div>
//             <div class="data-ctr flex-core flex-core flex-col">
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">connection</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">connected</p>
//                 </div>
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">addr</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//             </div>
//             <div class="fn-ctr flex-core flex-row flex-center-start">
//                 <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
//                     <p class="nfo-p5">hack<span>$</span></p>
//                 </div>
//                 <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
//                     <p class="nfo-p6">$</p>
//                     <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
//                 </div>
//             </div>
//         </div>
//     `;
//
//     document.body.innerHTML = html;
//
//     document.getElementById('wallet-connection-reject').addEventListener('click', function() {
//         setState(3);
//     });
//
//     document.getElementById('wallet-connection-enable').addEventListener('click', function() {
//         updateMachineUpgradeUIState();
//         setState(3);
//     });
// }
//
// function updateMachineUpgradeUIState() {
//     const machineUpgradeState = window.machineUpgradeState;
//     const validValues = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
//
//     if (machineUpgradeState) {
//         if (validValues.includes(machineUpgradeState.machineUpgradeAType)) {
//             machineUpgradeATypeMainUI = machineUpgradeState.machineUpgradeAType;
//         }
//         if (validValues.includes(machineUpgradeState.machineUpgradeBType)) {
//             machineUpgradeBTypeMainUI = machineUpgradeState.machineUpgradeBType;
//         }
//         if (validValues.includes(machineUpgradeState.machineUpgradeCType)) {
//             machineUpgradeCTypeMainUI = machineUpgradeState.machineUpgradeCType;
//         }
//     }
// }
// }}}

// v1 {{{
// function setupStateSix() {
//     const html = `
//         <div class="wallet-wrap flex-core flex-col flex-center">
//             <div class="wallet-ctr flex-core flex-col flex-start">
//                 <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">signature request</p>
//                 </div>
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">from</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">to</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
//                 </div>
//                 <div class="nfo-ctr-6 flex-core flex-col flex-end-center">
//                     <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
//                         <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
//                         <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
//                     </div>
//                     <div class="flex-core flex-row flex-center">
//                         <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
//                         <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="wrap flex-core flex-col flex-center dim">
//             <div class="machine-ctr flex-core flex-row flex-start">
//                 <div class="machine-shop-fn-ctr flex-core flex-row flex-center">
//                     <div class="machine-shop-fn-p flex-core flex-row flex-center">
//                         <p><span>store</span></p>
//                         <p>machine</p>
//                     </div>
//                 </div>
//                 <div class="machine-ctr-s1 flex-core flex-col flex-center">
//                     <div class="machine-ctr-el1">${machineUpgradeATypeMainUI}</div>
//                 </div>
//                 <div class="machine-ctr-s2">
//                     <div class="machine-ctr-el2 flex-core flex-col flex-center">${machineUpgradeBTypeMainUI}</div>
//                     <div class="machine-ctr-el3 flex-core flex-col flex-center">${machineUpgradeCTypeMainUI}</div>
//                 </div>
//             </div>
//             <div class="data-ctr flex-core flex-core flex-col">
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">connection</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">connected</p>
//                 </div>
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">addr</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//             </div>
//             <div class="fn-ctr flex-core flex-row flex-center-start">
//                 <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
//                     <p class="nfo-p5">hack<span>$</span></p>
//                 </div>
//                 <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
//                     <p class="nfo-p6">$</p>
//                     <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
//                 </div>
//             </div>
//         </div>
//     `;
//
//     document.body.innerHTML = html;
//
//     document.getElementById('wallet-connection-reject').addEventListener('click', function() {
//         setState(3);
//     });
//
//     document.getElementById('wallet-connection-enable').addEventListener('click', function() {
//         updateMachineUpgradeUIState();
//         setState(3);
//     });
// }
//
// function updateMachineUpgradeUIState() {
//     const machineUpgradeState = window.machineUpgradeState;
//     const validValues = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
//
//     if (machineUpgradeState) {
//         if (validValues.includes(machineUpgradeState.machineUpgradeAType)) {
//             machineUpgradeATypeMainUI = machineUpgradeState.machineUpgradeAType;
//         }
//         if (validValues.includes(machineUpgradeState.machineUpgradeBType)) {
//             machineUpgradeBTypeMainUI = machineUpgradeState.machineUpgradeBType;
//         }
//         if (validValues.includes(machineUpgradeState.machineUpgradeCType)) {
//             machineUpgradeCTypeMainUI = machineUpgradeState.machineUpgradeCType;
//         }
//     }
// }
// }}}
