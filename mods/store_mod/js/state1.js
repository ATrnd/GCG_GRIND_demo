function setupStateOne() {
    const html = `
        <div class="wrap flex-core flex-col flex-center">
            <div class="form-ctr flex-core flex-col">
                <div class="nfo-ctr-0 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">addr</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
                </div>
                <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
                    <p class="nfo-p1">connection</p>
                    <p class="nfo-sep-1">::</p>
                    <p class="nfo-p2">disconnected</p>
                </div>
                <div id="connection-trigger" class="nfo-ctr-3 flex-core flex-row flex-center-start connect-enabled">
                    <p class="nfo-p3">connect</p>
                </div>
            </div>
        </div>
    `;

    document.body.innerHTML = html;

    document.getElementById('connection-trigger').addEventListener('click', function() {
        setState(2);
    });
}

// v1 {{{

// function setupStateOne() {
//     const html = `
//         <div class="wrap flex-core flex-col flex-center">
//             <div class="form-ctr flex-core flex-col">
//                 <div class="nfo-ctr-0 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">addr</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">0x0000000000000000000000000000000000000000</p>
//                 </div>
//                 <div class="nfo-ctr-1 flex-core flex-row flex-center-start">
//                     <p class="nfo-p1">connection</p>
//                     <p class="nfo-sep-1">::</p>
//                     <p class="nfo-p2">disconnected</p>
//                 </div>
//                 <div id="connection-trigger" class="nfo-ctr-3 flex-core flex-row flex-center-start connect-enabled">
//                     <p class="nfo-p3">connect</p>
//                 </div>
//             </div>
//         </div>
//     `;
//
//     document.body.innerHTML = html;
//
//     document.getElementById('connection-trigger').addEventListener('click', function() {
//         setState(2);
//     });
// }
// }}}
