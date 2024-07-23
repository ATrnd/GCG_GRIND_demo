function logStateChange(newState) {

    switch (newState) {
        case 1:
            console.log("[State 1] :: default state triggered");
            console.log("------------------------------------");
            break;
        case 2:
            console.log("[State 2] :: connection request triggered");
            console.log("------------------------------------");
            break;
        case 3:
            console.log("[State 3] :: machine|hack$|grind UI triggered");
            console.log(`hackedDollars: ${hackedDollars}`);
            console.log(`machineUpgradeA: ${machineUpgradeATypeMainUI}`);
            console.log(`machineUpgradeB: ${machineUpgradeBTypeMainUI}`);
            console.log(`machineUpgradeC: ${machineUpgradeCTypeMainUI}`);
            console.log(`userEnergy: ${userEnergy}`);
            console.log(`virtualCryptoX: ${claimValueType1}`);
            console.log(`virtualCryptoY: ${claimValueType2}`);
            console.log(`virtualCryptoZ: ${claimValueType3}`);
            console.log("------------------------------------");
            break;
        case 4:
            console.log("[State 4] :: hack$ signature request triggered");
            console.log("------------------------------------");
            break;
        case 5:
            console.log("[State 5] :: machine store UI triggered");
            console.log("------------------------------------");
            break;
        case 6:
            console.log("[State 6] :: signature request with machine shop data triggered");
            console.log(`machineUpgradeState.machineUpgradeAType: ${window.machineUpgradeState.machineUpgradeAType}`);
            console.log(`machineUpgradeState.machineUpgradeBType: ${window.machineUpgradeState.machineUpgradeBType}`);
            console.log(`machineUpgradeState.machineUpgradeCType: ${window.machineUpgradeState.machineUpgradeCType}`);
            console.log(`machineUpgradeState.machineUpgradeATypePrice: ${window.machineUpgradeState.machineUpgradeATypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeBTypePrice: ${window.machineUpgradeState.machineUpgradeBTypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeCTypePrice: ${window.machineUpgradeState.machineUpgradeCTypePrice}`);
            console.log(`machineUpgradeState.machineUpgradeTotalPrice: ${window.machineUpgradeState.machineUpgradeTotalPrice}`);
            console.log("------------------------------------");
            break;
        case 7:
            console.log("[State 7] :: energy store UI triggered");
            console.log("------------------------------------");
            break;
        case 8:
            console.log("[State 8] :: energy store signature request triggered");
            console.log("------------------------------------");
            break;
        case 9:
            console.log("[State 9] :: grind config signature request triggered");
            console.log("------------------------------------");
            break;
        case 10:
            console.log("[State 10] :: claim config signature request triggered");
            console.log("------------------------------------");
            break;
        default:
            console.log("Unknown state");
    }

}
