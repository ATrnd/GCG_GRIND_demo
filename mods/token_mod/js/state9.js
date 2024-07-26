function setupStateNine() {
    const html = `
        ${generateSignReq()}
        ${generateStateNineHTML(true, true)}
    `;
    document.body.innerHTML = html;
    document.getElementById('wallet-connection-reject').addEventListener('click', function() {
        applyGrindConfig(grindData)
        setState(3);
    });
    document.getElementById('wallet-connection-enable').addEventListener('click', function() {
        applyGrindConfig(grindData)
        grindState = true;
        setState(3);
    });
}

function generateStateNineHTML(machineUIDim = false, grindUIDim = false) {
    return `
    <!-- wrap -->
    <div class="wrap flex-core flex-col flex-center">
    <div class="machine-ui-ctr-wrap flex-core flex-row flex-start">
    ${generateMachineUIHTML(machineUIDim)}
    ${generateGrindUIHTML(grindUIDim)}
    </div>
    </div>
    <!-- wrap -->
    `;
}

function applyGrindConfig(grindData) {
    const defaultConfig = {
        grindAmntCounterId01: 0,
        grindStateIconId01: '○',
        grindTimeCtrId01: 0,
        grindElectroCtrId01: 0,
        grindCryptoCounterMaxId01: 0,
        grindCryptoCounterCurrentId01: 0,
        grindAmntCounterId02: 0,
        grindStateIconId02: '○',
        grindTimeCtrId02: 0,
        grindElectroCtrId02: 0,
        grindCryptoCounterMaxId02: 0,
        grindCryptoCounterCurrentId02: 0,
        grindAmntCounterId03: 0,
        grindStateIconId03: '○',
        grindTimeCtrId03: 0,
        grindElectroCtrId03: 0,
        grindCryptoCounterMaxId03: 0,
        grindCryptoCounterCurrentId03: 0,
    };

    if (grindData.length > 0) {
        grindData.forEach(data => {
            switch (data.elementID) {
                case 1:
                    defaultConfig.grindAmntCounterId01 = data.cntrElement;
                    defaultConfig.grindStateIconId01 = data.grindIcon;
                    defaultConfig.grindTimeCtrId01 = data.timeElement;
                    defaultConfig.grindElectroCtrId01 = data.electroElement;
                    defaultConfig.grindCryptoCounterMaxId01 = data.cryptoCounterElementMax;
                    defaultConfig.grindCryptoCounterCurrentId01 = data.cryptoCounterElement;
                    break;
                case 2:
                    defaultConfig.grindAmntCounterId02 = data.cntrElement;
                    defaultConfig.grindStateIconId02 = data.grindIcon;
                    defaultConfig.grindTimeCtrId02 = data.timeElement;
                    defaultConfig.grindElectroCtrId02 = data.electroElement;
                    defaultConfig.grindCryptoCounterMaxId02 = data.cryptoCounterElementMax;
                    defaultConfig.grindCryptoCounterCurrentId02 = data.cryptoCounterElement;
                    break;
                case 3:
                    defaultConfig.grindAmntCounterId03 = data.cntrElement;
                    defaultConfig.grindStateIconId03 = data.grindIcon;
                    defaultConfig.grindTimeCtrId03 = data.timeElement;
                    defaultConfig.grindElectroCtrId03 = data.electroElement;
                    defaultConfig.grindCryptoCounterMaxId03 = data.cryptoCounterElementMax;
                    defaultConfig.grindCryptoCounterCurrentId03 = data.cryptoCounterElement;
                    break;
            }
        });
    }

    return defaultConfig;
}
