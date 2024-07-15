function setupStateFour() {
    const html = `
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

        <!-- wrap -->
        <div class="wrap flex-core flex-col flex-center dim">
            <!-- machine-ctr -->
            <div class="machine-ctr flex-core flex-row flex-start">
                <!-- machine-store-fn-btn -->
                <div class="machine-shop-fn-ctr flex-core flex-row flex-center">
                    <div class="machine-shop-fn-p flex-core flex-row flex-center">
                        <p><span>store</span></p>
                        <p>machine</p>
                    </div>
                </div>
                <!-- machine-store-fn-btn -->

                <!-- machine-el-ctr-1 -->
                <div class="machine-ctr-s1 flex-core flex-col flex-center">
                    <div class="machine-ctr-el1">a</div>
                </div>
                <!-- machine-el-ctr-1 -->

                <!-- machine-el-ctr-2 -->
                <div class="machine-ctr-s2">
                    <div class="machine-ctr-el2 flex-core flex-col flex-center">b</div>
                    <div class="machine-ctr-el3 flex-core flex-col flex-center">c</div>
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

    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        setState(3);
    });

    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        hackedDollars += 1000;
        setState(3);
    });
}

// v1 {{{
// function setupStateFour() {
//     const html = `
//         <!-- wallet-wrap -->
//         <div class="wallet-wrap flex-core flex-col flex-center">
//             <div class="wallet-ctr flex-core flex-col flex-start">
//                 <!-- sig-req -->
//                 <div class="nfo-ctr-4 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">signature request</p>
//                 </div>
//                 <!-- sig-req -->
//
//                 <!-- addr-from -->
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">from</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xAcc257213D080DB495149F248561ac94e1C2BC29</p>
//                 </div>
//                 <!-- addr-from -->
//
//                 <!-- addr-to -->
//                 <div class="nfo-ctr-5 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">to</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p4">0xD8561ac94e1Acc257213080DB495149F24C2BC29</p>
//                 </div>
//                 <!-- addr-to -->
//
//                 <!-- wallet-fn -->
//                 <div class="nfo-ctr-6 flex-core flex-col flex-end-center">
//                     <!-- gas-amount -->
//                     <div class="nfo-sub-ctr-3 flex-core flex-col flex-start">
//                         <p class="nfo-p8 lg-mb-16"><span>gas fee</span> :: 0,0001 ETH</p>
//                         <p class="nfo-p8"><span>amount</span> :: 0 ETH</p>
//                     </div>
//                     <!-- gas-amount -->
//
//                     <!-- sign-ctr -->
//                     <div class="flex-core flex-row flex-center">
//                         <div id="wallet-connection-reject" class="btn-01 flex-core flex-center">cancel</div>
//                         <div id="wallet-connection-enable" class="btn-02 flex-core flex-center">sign</div>
//                     </div>
//                     <!-- sign-ctr -->
//                 </div>
//                 <!-- wallet-fn -->
//             </div>
//         </div>
//         <!-- wallet-wrap -->
//
//         <!-- wrap -->
//         <div class="wrap flex-core flex-col flex-center dim">
//             <!-- machine-ctr -->
//             <div class="machine-ctr flex-core flex-row flex-start">
//                 <!-- machine-store-fn-btn -->
//                 <div class="machine-shop-fn-ctr flex-core flex-row flex-center">
//                     <div class="machine-shop-fn-p flex-core flex-row flex-center">
//                         <p><span>store</span></p>
//                         <p>machine</p>
//                     </div>
//                 </div>
//                 <!-- machine-store-fn-btn -->
//
//                 <!-- machine-el-ctr-1 -->
//                 <div class="machine-ctr-s1 flex-core flex-col flex-center">
//                     <div class="machine-ctr-el1">a</div>
//                 </div>
//                 <!-- machine-el-ctr-1 -->
//
//                 <!-- machine-el-ctr-2 -->
//                 <div class="machine-ctr-s2">
//                     <div class="machine-ctr-el2 flex-core flex-col flex-center">b</div>
//                     <div class="machine-ctr-el3 flex-core flex-col flex-center">c</div>
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
//     document.getElementById('wallet-connection-reject').addEventListener('click', function() {
//         setState(3);
//     });
//
//     document.getElementById('wallet-connection-enable').addEventListener('click', function() {
//         hackedDollars += 1000;
//         setState(3);
//     });
// }
//
// }}}
