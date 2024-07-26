function setupStateTwelve() {
    const html = `
        ${generateStateTwelveHTML()}
    `;
    document.body.innerHTML = html;

    document.getElementById('swap-grind-tokens-trigger').addEventListener('click', function() {
        setState(11);
        console.log('swap-grind-tokens-trigger');
    });

    document.getElementById('swap-erc-tokens-trigger').addEventListener('click', function() {
        console.log('swap-erc-tokens-trigger');
        if(verifyERCTokenSwap()) {
            tradeTokenHackedDollarValueB = parseInt(tradeCreditInput.value, 10);
            tradeTokenGrindValue = parseInt(document.getElementById('trade-ui-token-grind-ctr').textContent, 10);
            setState(14);
        } else {
            console.log('ini token swap :: false');
        }
    });

    document.getElementById('trade-ui-exit-trigger').addEventListener('click', function() {
        console.log('trade-ui-exit-trigger');
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

        console.log('Key pressed:', event.key);

        if (inputValue.length >= 4) {
            const dividedValue = Math.floor(parseInt(inputValue) / 1000);
            document.getElementById('trade-ui-token-grind-ctr').textContent = dividedValue;
        } else {
            document.getElementById('trade-ui-token-grind-ctr').textContent = '0';
        }
    });
}

function verifyERCTokenSwap() {
    let tokenSwapFlag = false;
    const tradeCreditInput = document.getElementsByName('trade-credit-value')[0];
    const tradeCreditValue = parseInt(tradeCreditInput.value, 10);
    if(tradeCreditValue <= hackedDollars) {
        tokenSwapFlag = true;
    }
    return tokenSwapFlag;
}

function handleSwapErcTokens() {
    const tradeCreditInput = document.getElementsByName('trade-credit-value')[0];
    const tradeCreditValue = parseInt(tradeCreditInput.value, 10);

    if (tradeCreditValue <= hackedDollars) {
        // Subtract tradeCreditValue from hackedDollars
        hackedDollars -= tradeCreditValue;

        // Get the value from trade-ui-token-grind-ctr and add it to gcgTokens
        const tokenGrindValue = parseInt(document.getElementById('trade-ui-token-grind-ctr').textContent, 10);
        gcgTokens += tokenGrindValue;

        // Logging for verification
        console.log('Tokens swapped:', tokenGrindValue);
        console.log('Remaining hacked dollars:', hackedDollars);
    } else {
        // Logging for insufficient hacked dollars
        console.log('Insufficient hacked dollars for trade');
    }
}

// [render] :: generateStateTwelveHTML {{{
function generateStateTwelveHTML(dimmed = false) {
    if(tradeTokenHackedDollarValueB === 0) {
        tradeTokenHackedDollarValueB = '';
    }
    if(tradeTokenGrindValue === 0) {
        tradeTokenGrindValue = '0';
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
        <div id="swap-grind-tokens-trigger" class="connect-enabled-2 trade-ui-switch-ctr flex-core flex-col flex-center">xyz</div>
        <div class="trade-ui-switch-ctr trade-ui-switch-ctr-active trade-ui-switch-ctr-closer flex-core flex-col flex-center">token</div>
    </div>
    <!-- trade-ui-switch-ctr-wrap }}} -->

    <!-- trade-ui-ctr-wrap {{{ -->
    <div class="trade-ui-ctr-wrap flex-core flex-row flex-start">

        <!-- trade-ui-ctr -->
        <div class="trade-ui-ctr-2 flex-core flex-row flex-start">
            <div class="trade-ui-crypto-value-ctr-2 flex-core flex-row flex-center-start">
            <p id="trade-ui-token-grind-ctr">${tradeTokenGrindValue}</p>
            </div>
            <div class="trade-ui-crypto-type-ctr flex-core flex-row flex-center">T</div>
        </div>
        <!-- trade-ui-ctr -->

    </div>
    <!-- trade-ui-ctr-wrap }}} -->

    <div class="trade-ui-trade-ctr-wrap flex-core flex-row flex-start">
        <div class="trade-ui-trade-credit-ctr flex-core flex-row flex-center-start">
        <p class="trade-ui-trade-credit-id">$</p>
        <input name="trade-credit-value" tabindex="0" class="trade-ui-trade-credit-value" type="text" value="${tradeTokenHackedDollarValueB}">
        </div>
        <div id="swap-erc-tokens-trigger" tabindex="0" class="connect-enabled trade-ui-convert-ctr flex-core flex-row flex-center">swap</div>
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
