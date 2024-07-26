function setupStateEleven() {
    const html = `
        ${generateStateElevenHTML()}
    `;
    document.body.innerHTML = html;

    document.getElementById('token-trade-ui-trigger').addEventListener('click', function() {
        console.log('token-trade-ui-trigger');
        setState(12);
    });

    document.getElementById('swap-xyz-tokens-trigger').addEventListener('click', function() {
        console.log('swap-xyz-tokens-trigger');
        if(verifyTokenSwap()) {
            tradeTokenXyzValue = parseInt(document.getElementsByName('trade-credit-value')[0].value, 10) || 0;
            tradeTokenHackedDollarValueA = parseInt(document.getElementById('trade-ui-hacked-dollar-ctr').textContent, 10) || 0;
            setState(13);
        } else {
            console.log('ini token swap :: false');
        }
    });

    document.getElementById('trade-ui-exit-trigger').addEventListener('click', function() {
        setState(3);
    });

 const tradeCreditInput = document.getElementsByName('trade-credit-value')[0];

    tradeCreditInput.addEventListener('keydown', function(event) {
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const inputElement = event.target;
        const navigationKeys = ['ArrowLeft', 'ArrowRight'];
        if (event.metaKey || event.ctrlKey || event.key === 'Tab' || navigationKeys.includes(event.key)) {
            return;
        }

        if (inputElement.value.length >= 11 && !['Backspace', 'Delete'].includes(event.key)) {
            event.preventDefault();
        }

        if (!validKeys.includes(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
        }

        if (event.key === 'Escape') {
            setState(3);
        }

    });

    tradeCreditInput.addEventListener('keyup', function(event) {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        if (inputValue.length > 0) {
            const multipliedValue = parseInt(inputValue) * 1000;
            document.getElementById('trade-ui-hacked-dollar-ctr').textContent = multipliedValue;
        } else {
            document.getElementById('trade-ui-hacked-dollar-ctr').textContent = '0';
        }
    });
}

function verifyTokenSwap() {
    let tokenSwapFlag = false;
    const tradeCreditValue = parseInt(document.getElementsByName('trade-credit-value')[0].value, 10) || 0;
    if (tradeCreditValue <= claimValueType1 &&
        tradeCreditValue !== 0 &&
        tradeCreditValue <= claimValueType2 &&
        tradeCreditValue !== 0 &&
        tradeCreditValue <= claimValueType3 &&
        tradeCreditValue !== 0) {
        tokenSwapFlag = true;
    }
    return tokenSwapFlag;
}

function handleSwapGrindTokens() {
    const tradeCreditValue = parseInt(document.getElementsByName('trade-credit-value')[0].value, 10) || 0;
    const hackedDollarValue = parseInt(document.getElementById('trade-ui-hacked-dollar-ctr').textContent, 10) || 0;

    if (tradeCreditValue <= claimValueType1 && tradeCreditValue <= claimValueType2 && tradeCreditValue <= claimValueType3) {
        claimValueType1 -= tradeCreditValue;
        claimValueType2 -= tradeCreditValue;
        claimValueType3 -= tradeCreditValue;
        hackedDollars += hackedDollarValue;

        console.log(`Updated claim values: ${claimValueType1}, ${claimValueType2}, ${claimValueType3}`);
        console.log(`Updated hacked dollars: ${hackedDollars}`);
    } else {
        console.log('Insufficient claim values for the trade credit value');
    }
}

// [render] :: generateStateElevenHTML v2 {{{
function generateStateElevenHTML(dimmed = false) {
    if(tradeTokenXyzValue === 0) {
        tradeTokenXyzValue = '';
    }
    if(tradeTokenHackedDollarValueA === 0) {
        tradeTokenHackedDollarValueA = '0';
    }
    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    return `
    <!-- wrap -->
    <div class="wrap flex-core flex-col flex-center ${dimConfig}">

    <!-- trade-ui-wrap -->
    <div class="trade-ui-wrap flex-core flex-row flex-center">

    <!-- trade-ui-1 {{{ -->
    <div class="trade-ui-1">

    <!-- trade-ui-switch-ctr-wrap {{{ -->
    <div class="trade-ui-switch-ctr-wrap flex-core flex-row flex-start">
        <div id="xyz-tokens-ui-trigger" class="trade-ui-switch-ctr trade-ui-switch-ctr-active flex-core flex-col flex-center">xyz</div>
        <div id="token-trade-ui-trigger" class="connect-enabled-2 trade-ui-switch-ctr trade-ui-switch-ctr-closer flex-core flex-col flex-center">token</div>
    </div>
    <!-- trade-ui-switch-ctr-wrap }}} -->

    <!-- trade-ui-ctr-wrap {{{ -->
    <div class="trade-ui-ctr-wrap flex-core flex-row flex-start">

        <!-- trade-ui-ctr -->
        <div class="trade-ui-ctr-2 flex-core flex-row flex-start">
            <div class="trade-ui-crypto-value-ctr-2 flex-core flex-row flex-center-start">
            <p id="trade-ui-hacked-dollar-ctr">${tradeTokenHackedDollarValueA}</p>
            </div>
            <div class="trade-ui-crypto-type-ctr flex-core flex-row flex-center">$</div>
        </div>
        <!-- trade-ui-ctr -->

    </div>
    <!-- trade-ui-ctr-wrap }}} -->

    <div class="trade-ui-trade-ctr-wrap flex-core flex-row flex-start">
        <div class="trade-ui-trade-credit-ctr flex-core flex-row flex-center-start">
        <p class="trade-ui-trade-xyz-id">(xyz)</p>
        <input name="trade-credit-value" tabindex="0" class="trade-ui-trade-credit-value" type="text" value="${tradeTokenXyzValue}">
        </div>
        <div id="swap-xyz-tokens-trigger" tabindex="0" class="connect-enabled trade-ui-convert-ctr flex-core flex-row flex-center">swap</div>
    </div>

    </div>
    <!-- trade-ui-1 }}} -->

    <!-- trade-ui-2 {{{ -->
    <div class="trade-ui-2">

        <div id="trade-ui-exit-trigger" class="trade-ui-exit-btn connect-enabled-2 flex-core flex-row flex-center">
        <p>⏻</p>
        </div>

    </div>
    <!-- trade-ui-2 }}} -->

    </div>
    <!-- trade-ui-wrap -->

    </div>
    <!-- wrap -->
    `;
}

// }}}
