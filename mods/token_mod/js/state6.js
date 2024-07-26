function setupStateSix() {
    const html = `
        ${generateSignReq()}
        ${generateStateFiveHTML(true)}
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
    const validPrices = [3000, 8000, 13000];

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
