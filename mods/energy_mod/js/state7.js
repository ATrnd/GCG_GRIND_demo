function setupStateSeven() {
    const html = `
        ${generateStateSevenHTML()}
    `;
    document.body.innerHTML = html;
    document.getElementById('energy-shop-ui-exit').addEventListener('click', function() {
        console.log('reset state 7 => state 3');
        selectedEnergyPrice = 0;
        currentSelectedElementId = null
        setState(3);
    });
    document.getElementById('buy-energy-trigger').addEventListener('click', function() {
        try {
            // valid amnt check
            selectedEnergyAmnt = getEnergyValueFromSelector(currentSelectedElementId);
            if(!((selectedEnergyAmnt + userEnergy) > userMaxEnergy)) {

                // valid energy selection check
                if(selectedEnergyAmnt !== 0) {

                    // valid balance check
                    if(hackedDollars >= selectedEnergyPrice) {
                        console.log(`=================================`);
                        console.log(`hackedDollars :: ${hackedDollars}`);
                        console.log(`selectedEnergyPrice :: ${selectedEnergyPrice}`);
                        console.log(`selectedEnergyAmnt :: ${selectedEnergyAmnt}`);
                        setupStateEight();
                    } else {
                        console.log('Insufficient balance');
                    }
                } else {
                    console.log('invalid energy selection :: 0');
                }
            } else {
                console.log(`invalid energy amount :: > MaxEnergy(${userMaxEnergy})`);
            }
        } catch(e) {
            console.log(e);
        }
    });
    setupEnergySelectors();
}

let selectedEnergyPrice = 0;
let currentSelectedElementId = null;

function generateStateSevenHTML(dimmed = false) {
    let energyShopDim = '';
    if(dimmed) {
        energyShopDim = 'dim';
    }
    return `
    <!-- wrap -->
    <div class="wrap flex-core flex-col flex-center ${energyShopDim}">
    <div class="energy-shop-ui-wrap flex-core flex-col flex-start">

            <!-- energy-shop-ui-ctr -->
            <div class="energy-shop-ui-ctr flex-core flex-row flex-start">

            <!-- energy-shop-ui-1 -->
            <div class="energy-shop-ui-1 flex-core flex-row flex-start">

                <!-- buy-energy-btn -->
                <div id="buy-energy-trigger" class="buy-energy-btn flex-core flex-col flex-center">
                <p>buy</p>
                <p><span>energy</span></p>
                </div>
                <!-- buy-energy-btn -->

                <!-- account-hacked-dollar-ctr -->
                <div class="account-hacked-dollar-ctr flex-core flex-row flex-center-start">
                <p class="nfo-p6">$</p>
                <p class="nfo-p7" id="hacked-dollars">${hackedDollars}</p>
                </div>
                <!-- account-hacked-dollar-ctr -->

                <!-- user energy -->
                <div class="account-energy-ctr flex-core flex-row flex-center">
                <p class="nfo-p9"><span id="energyMax">${userMaxEnergy}</span>/<span id="energyUser">${userEnergy}</span></p>
                </div>
                <!-- user energy -->

                </div>
                <!-- energy-shop-ui-1 -->

                <!-- energy-shop-ui-2 -->
                <div id="energy-shop-ui-exit" class="energy-shop-ui-2 connect-enabled-2 flex-core flex-row flex-center">
                <p>⏻</p>
                </div>
                <!-- energy-shop-ui-2 -->

            </div>
            <!-- energy-shop-ui-ctr -->

            <!-- energy-shop-ui-type-ctr -->
            <div class="energy-shop-ui-type-ctr flex-core flex-row flex-start">

                <div id="energy-selector-01" class="connect-enabled-2 energy-shop-type-el flex-core flex-col flex-end">
                <p id="energy-selector-01-value" class="energy-shop-type-class flex-core flex-col flex-center">10</p>
                <p id="energy-selector-01-price" class="energy-shop-type-price flex-core flex-row flex-center"><span>$</span>250</p>
                </div>

                <div id="energy-selector-02" class="connect-enabled-2 energy-shop-type-el flex-core flex-col flex-end">
                <p id="energy-selector-02-value" class="energy-shop-type-class flex-core flex-col flex-center">20</p>
                <p id="energy-selector-02-price" class="energy-shop-type-price flex-core flex-row flex-center"><span>$</span>450</p>
                </div>

                <div id="energy-selector-03" class="connect-enabled-2 energy-shop-type-el flex-core flex-col flex-end">
                <p id="energy-selector-03-value" class="energy-shop-type-class flex-core flex-col flex-center">30</p>
                <p id="energy-selector-03-price" class="energy-shop-type-price flex-core flex-row flex-center"><span>$</span>650</p>
                </div>

                <div id="energy-selector-04" class="connect-enabled-2 energy-shop-type-el flex-core flex-col flex-end">
                <p id="energy-selector-04-value" class="energy-shop-type-class flex-core flex-col flex-center">50</p>
                <p id="energy-selector-04-price" class="energy-shop-type-price flex-core flex-row flex-center"><span>$</span>950</p>
                </div>

                <div class="energy-shop-type-el">
                <p class="energy-shop-type-class-icon energy-shop-type-class energy-shop-type-class-closer flex-core flex-col flex-center"></p>
                </div>

            </div>
            <!-- energy-shop-ui-type-ctr -->

        </div>
        <!-- energy-shop-ui-wrap -->

    </div>
    <!-- wrap -->
    `;
}

function setupEnergySelectors() {
    for (let i = 1; i <= 4; i++) {
        const id = `energy-selector-0${i}`;
        const element = document.getElementById(id);

        if (element) {
            element.addEventListener('click', function() {
                handleEnergySelection(id);
            });
            console.log(`Click event listener added for: ${id}`);
        }
    }
}

function handleEnergySelection(id) {

    const priceElement = document.getElementById(`${id}-price`);
    const price = parseInt(priceElement.textContent.replace('$', ''));

    if (currentSelectedElementId === id) {
        priceElement.classList.remove('energy-shop-type-selected');
        selectedEnergyPrice = 0;
        currentSelectedElementId = null;
        console.log('Price reset to:', selectedEnergyPrice);
    } else {

        if (currentSelectedElementId) {
            document.getElementById(`${currentSelectedElementId}-price`).classList.remove('energy-shop-type-selected');
        }

        priceElement.classList.add('energy-shop-type-selected');
        selectedEnergyPrice = price;
        currentSelectedElementId = id;
        console.log('Price updated to:', selectedEnergyPrice);
    }
}

function getEnergyValueFromSelector(id) {
    try {
        const valueElement = document.getElementById(`${id}-value`);
        if (valueElement) {
            return parseInt(valueElement.textContent);
        } else {
            console.log(`Element with ID energy-value-${id} not found`);
            return 0;
        }
    } catch(e) {
        console.log(e);
    }
}
