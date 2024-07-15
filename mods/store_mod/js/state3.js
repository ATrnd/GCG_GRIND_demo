function setupStateThree() {
    const html = `
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

            <!-- fn-ctr -->
            <div class="fn-ctr flex-core flex-row flex-center-start">
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
            </div>
            <!-- fn-ctr -->
        </div>
        <!-- wrap -->
    `;

    document.body.innerHTML = html;

    document.getElementById('machine-shop-fn').addEventListener('click', function() {
        setState(5);
    });

    document.getElementById('hack-dollars-trigger').addEventListener('click', function() {
        setState(4);
    });
}

// v1 {{{
// function setupStateThree() {
//     const html = `
//         <!-- wrap -->
//         <div class="wrap flex-core flex-col flex-center">
//             <!-- machine-ctr -->
//             <div class="machine-ctr flex-core flex-row flex-start">
//                 <!-- machine-store-fn-btn -->
//                 <div id="machine-shop-fn" class="machine-shop-fn-ctr flex-core flex-row flex-center">
//                     <div class="machine-shop-fn-p flex-core flex-row flex-center">
//                         <p><span>store</span></p>
//                         <p>machine</p>
//                     </div>
//                 </div>
//                 <!-- machine-store-fn-btn -->
//
//                 <!-- machine-el-ctr-1 -->
//                 <div class="machine-ctr-s1 flex-core flex-col flex-center">
//                     <div id="machineUpgradeATypeMainUI" class="machine-ctr-el1">a</div>
//                 </div>
//                 <!-- machine-el-ctr-1 -->
//
//                 <!-- machine-el-ctr-2 -->
//                 <div class="machine-ctr-s2">
//                     <div id="machineUpgradeBTypeMainUI" class="machine-ctr-el2 flex-core flex-col flex-center">b</div>
//                     <div id="machineUpgradeCTypeMainUI" class="machine-ctr-el3 flex-core flex-col flex-center">c</div>
//                 </div>
//                 <!-- machine-el-ctr-2 -->
//             </div>
//             <!-- machine-ctr -->
//
//             <!-- data-ctr -->
//             <div class="data-ctr flex-core flex-core flex-col">
//                 <!-- connection ctr -->
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">connection</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">connected</p>
//                 </div>
//                 <!-- connection ctr -->
//
//                 <!-- addr ctr -->
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">addr</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//                 <!-- addr ctr -->
//             </div>
//             <!-- data-ctr -->
//
//             <!-- fn-ctr -->
//             <div class="fn-ctr flex-core flex-row flex-center-start">
//                 <!-- hack-ctr -->
//                 <div id="hack-dollars-trigger" class="connect-enabled nfo-sub-ctr-1 flex-core flex-row flex-center">
//                     <p class="nfo-p5">hack<span>$</span></p>
//                 </div>
//                 <!-- hack-ctr -->
//
//                 <!-- hacked-$-ctr -->
//                 <div class="nfo-sub-ctr-2 flex-core flex-row flex-center-start">
//                     <p class="nfo-p6">$</p>
//                     <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
//                 </div>
//                 <!-- hacked-$-ctr -->
//             </div>
//             <!-- fn-ctr -->
//         </div>
//         <!-- wrap -->
//     `;
//
//     document.body.innerHTML = html;
//
//     document.getElementById('machine-shop-fn').addEventListener('click', function() {
//         setState(5);
//     });
//
//     document.getElementById('hack-dollars-trigger').addEventListener('click', function() {
//         setState(4);
//     });
// }
//
// }}}
