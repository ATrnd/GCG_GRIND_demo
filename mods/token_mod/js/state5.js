function setupStateFive() {
    const html = `
        ${generateStateFiveHTML()}
    `;
    document.body.innerHTML = html;
    document.getElementById('machine-shop-ui-exit').addEventListener('click', function() {
        resetClickCounts();
        setState(3);
    });
    document.getElementById('machineUpgradeFn').addEventListener('click', function() {
        if (hackedDollars >= parseInt(document.getElementById('machineUpgradeTotalPrice').textContent)) {
            window.machineUpgradeState = {
                machineUpgradeAType: document.getElementById('machineUpgradeAType').textContent,
                machineUpgradeBType: document.getElementById('machineUpgradeBType').textContent,
                machineUpgradeCType: document.getElementById('machineUpgradeCType').textContent,
                machineUpgradeATypePrice: document.getElementById('machineUpgradeATypePrice').textContent,
                machineUpgradeBTypePrice: document.getElementById('machineUpgradeBTypePrice').textContent,
                machineUpgradeCTypePrice: document.getElementById('machineUpgradeCTypePrice').textContent,
                machineUpgradeTotalPrice: document.getElementById('machineUpgradeTotalPrice').textContent
            };
            resetClickCounts();
            setState(6);
        } else {
            console.log('insufficient balance || invalid input data');
        }
    });
    document.getElementById('machine-shop-el-a1').addEventListener('click', function() {
        handleMachineShopClick('a1');
    });
    document.getElementById('machine-shop-el-a2').addEventListener('click', function() {
        handleMachineShopClick('a2');
    });
    document.getElementById('machine-shop-el-a3').addEventListener('click', function() {
        handleMachineShopClick('a3');
    });
    document.getElementById('machine-shop-el-b1').addEventListener('click', function() {
        handleMachineShopClick('b1');
    });
    document.getElementById('machine-shop-el-b2').addEventListener('click', function() {
        handleMachineShopClick('b2');
    });
    document.getElementById('machine-shop-el-b3').addEventListener('click', function() {
        handleMachineShopClick('b3');
    });
    document.getElementById('machine-shop-el-c1').addEventListener('click', function() {
        handleMachineShopClick('c1');
    });
    document.getElementById('machine-shop-el-c2').addEventListener('click', function() {
        handleMachineShopClick('c2');
    });
    document.getElementById('machine-shop-el-c3').addEventListener('click', function() {
        handleMachineShopClick('c3');
    });
}

function generateStateFiveHTML(dimmed = false) {
    let dimConfig = '';
    if(dimmed) {
        dimConfig = 'dim';
    }
    return `
        <!-- wrap -->
        <div class="wrap flex-core flex-col flex-center ${dimConfig}">

        <!-- machine-shop-ui-ctr -->
        <div class="machine-shop-ui-ctr flex-core flex-row flex-start">

                <div class="machine-shop-ui-1">
                <div class="machine-shop-el-ctr-wrap-ctrlr flex-core flex-row flex-start">
                    ${generateMachineShopElement('machine-shop-el-a1', 'a1', 'x', 3000)}
                    ${generateMachineShopElement('machine-shop-el-a2', 'a2', 'x', 8000)}
                    ${generateMachineShopElement('machine-shop-el-a3', 'a3', 'x', 13000)}
                </div>
                <div class="machine-shop-el-ctr-wrap-ctrlr flex-core flex-row flex-start">
                    ${generateMachineShopElement('machine-shop-el-b1', 'b1', 'y', 3000)}
                    ${generateMachineShopElement('machine-shop-el-b2', 'b2', 'y', 8000)}
                    ${generateMachineShopElement('machine-shop-el-b3', 'b3', 'y', 13000)}
                </div>
                <div class="machine-shop-el-ctr-wrap-ctrlr flex-core flex-row flex-start">
                    ${generateMachineShopElement('machine-shop-el-c1', 'c1', 'z', 3000)}
                    ${generateMachineShopElement('machine-shop-el-c2', 'c2', 'z', 8000)}
                    ${generateMachineShopElement('machine-shop-el-c3', 'c3', 'z', 13000)}
                </div>
                </div>

                <div id="machine-shop-ui-exit" class="machine-shop-ui-2 connect-enabled-2 flex-core flex-row flex-center">
                <p>⏻</p>
                </div>

            </div>
            <!-- machine-shop-ui-ctr -->

            <!-- machine-shop-price-ctr -->
            <div class="machine-shop-price-ctr flex-core flex-row flex-center-start">

                <div class="machine-upgrade-price-ctr lg-ml-41">
                <span id="machineUpgradeAType">[]</span> :: $ <span id="machineUpgradeATypePrice">-</span>
                </div>

                <div class="machine-upgrade-price-div">&amp;&amp;</div>
                <div class="machine-upgrade-price-ctr">
                <span id="machineUpgradeBType">[]</span> :: $ <span id="machineUpgradeBTypePrice">-</span>
                </div>

                <div class="machine-upgrade-price-div">&amp;&amp;</div>
                <div class="machine-upgrade-price-ctr">
                <span id="machineUpgradeCType">[]</span> :: $ <span id="machineUpgradeCTypePrice">-</span>
                </div>

            </div>
            <!-- machine-shop-price-ctr -->

            <!-- machine-shop-upgrade-ctr -->
            <div class="machine-shop-upgrade-ctr flex-core flex-row flex-center-start">
                <div class="machine-shop-upgrade-price flex-core flex-row flex-center">
                <span id="machineUpgradeTotalPrice">-</span>&nbsp$
                </div>
                <div id="machineUpgradeFn" class="connect-enabled machine-shop-upgrade-btn flex-core flex-row flex-center">upgrade</div>
            </div>
            <!-- machine-shop-upgrade-ctr -->

        </div>
        <!-- wrap -->
    `;
}

function generateMachineShopElement(id, type, grindType, price) {
    return `
        <div id="${id}" class="machine-shop-el-ctr connect-enabled-2 wrap flex-core flex-col flex-start">
            <div class="machine-shop-el-s1 flex-core flex-row flex-start">
                <div class="machine-shop-el-s1-a flex-core flex-row flex-center">
                    <p>${type}</p>
                </div>
                <div class="machine-shop-el-s1-b flex-core flex-col flex-start">
                    <div class="machine-shop-el-s1-b-1 flex-core flex-row flex-center"><p>${grindType}</p></div>
                    <div class="machine-shop-el-s1-b-2"></div>
                </div>
            </div>
            <div class="machine-shop-el-s2 flex-core flex-row flex-start">
                <div class="machine-shop-el-s2-a"></div>
                <div class="machine-shop-el-s2-b flex-core flex-row flex-center">
                    <p>$<span id="${id}-price">${price}</span></p>
                </div>
            </div>
        </div>
    `;
}

function handleMachineShopClick(type) {
    let priceElement;
    let priceTargetElement;
    let typeTargetElement;

    if (!window.clickCounts) {
        window.clickCounts = {
            'a1': 0, 'a2': 0, 'a3': 0,
            'b1': 0, 'b2': 0, 'b3': 0,
            'c1': 0, 'c2': 0, 'c3': 0
        };
    }

    window.clickCounts[type] += 1;

    if (window.clickCounts[type] === 2) {
        resetMachineShopUI(type);
        window.clickCounts[type] = 0;
    } else {
        if (type.startsWith('a')) {
            priceElement = document.getElementById(`machine-shop-el-${type}-price`);
            priceTargetElement = document.getElementById('machineUpgradeATypePrice');
            typeTargetElement = document.getElementById('machineUpgradeAType');
        } else if (type.startsWith('b')) {
            priceElement = document.getElementById(`machine-shop-el-${type}-price`);
            priceTargetElement = document.getElementById('machineUpgradeBTypePrice');
            typeTargetElement = document.getElementById('machineUpgradeBType');
        } else if (type.startsWith('c')) {
            priceElement = document.getElementById(`machine-shop-el-${type}-price`);
            priceTargetElement = document.getElementById('machineUpgradeCTypePrice');
            typeTargetElement = document.getElementById('machineUpgradeCType');
        }

        const price = priceElement.textContent;
        priceTargetElement.textContent = price;
        typeTargetElement.textContent = type;
        updateTotalPrice();
    }
}

function resetMachineShopUI(type) {
    if (type.startsWith('a')) {
        document.getElementById('machineUpgradeAType').textContent = '[]';
        document.getElementById('machineUpgradeATypePrice').textContent = '-';
    } else if (type.startsWith('b')) {
        document.getElementById('machineUpgradeBType').textContent = '[]';
        document.getElementById('machineUpgradeBTypePrice').textContent = '-';
    } else if (type.startsWith('c')) {
        document.getElementById('machineUpgradeCType').textContent = '[]';
        document.getElementById('machineUpgradeCTypePrice').textContent = '-';
    }
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = (
        (parseInt(document.getElementById('machineUpgradeATypePrice').textContent) || 0) +
        (parseInt(document.getElementById('machineUpgradeBTypePrice').textContent) || 0) +
        (parseInt(document.getElementById('machineUpgradeCTypePrice').textContent) || 0)
    ).toString();
    document.getElementById('machineUpgradeTotalPrice').textContent = totalPrice === '0' ? '-' : totalPrice;
}

function resetClickCounts() {
    window.clickCounts = {
        'a1': 0, 'a2': 0, 'a3': 0,
        'b1': 0, 'b2': 0, 'b3': 0,
        'c1': 0, 'c2': 0, 'c3': 0
    };
}
