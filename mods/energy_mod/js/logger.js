function logStateChange(newState) {

    console.log(`===========================`);

    switch (newState) {
        case 1:
            console.log("State 1 :: default state triggered");
            break;
        case 2:
            console.log("State 2 :: connection request triggered");
            break;
        case 3:
            console.log("State 3 :: machine store and hack$ UI triggered");
            console.log(`hackedDollars: ${hackedDollars}`);
            break;
        case 4:
            console.log("State 4 :: hack$ signature request triggered");
            break;
        case 5:
            console.log("State 5 :: machine store UI triggered");
            break;
        case 6:
            console.log("State 6 :: signature request with machine shop data triggered");
            console.log(`machineUpgradeState.machineUpgradeAType: ${window.machineUpgradeState.machineUpgradeAType}`);
            console.log(`machineUpgradeState.machineUpgradeBType: ${window.machineUpgradeState.machineUpgradeBType}`);
            console.log(`machineUpgradeState.machineUpgradeCType: ${window.machineUpgradeState.machineUpgradeCType}`);
            console.log(`machineUpgradeState.machineUpgradeATypePrice: ${window.machineUpgradeState.machineUpgradeATypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeBTypePrice: ${window.machineUpgradeState.machineUpgradeBTypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeCTypePrice: ${window.machineUpgradeState.machineUpgradeCTypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeTotalPrice: ${window.machineUpgradeState.machineUpgradeTotalPrice}`);
            break;
        case 7:
            console.log("State 7 :: energy store UI triggered");
            break;
        default:
            console.log("Unknown state");
    }

}
