//update memory cost use funtion 
function getUpdateMemoryCost(isMemory) {
    let extraMemoryCost = document.getElementById('extra-memory-cost').innerText;
    let totalMemoryCost = document.getElementById('extra-memory-cost');

    if (isMemory == '8gb') {
        totalMemoryCost.innerText = 0;
    }
    else if (isMemory == '16gb') {
        totalMemoryCost.innerText = 180;
    }
    return totalMemoryCost;

}

//update storage cost use funtion 
function updateTotalStorageCost(isStorage) {
    let extraStorageCost = document.getElementById('extra-storage-cost').innerText;
    let totalStorageCost = document.getElementById('extra-storage-cost');

    if (isStorage == '256gb-storage') {
        totalStorageCost.innerText = 0;

    }
    else if (isStorage == '512gb-storage') {
        totalStorageCost.innerText = 100;
    }
    else if (isStorage == '1tb-storage') {
        totalStorageCost.innerText = 180;
    }
    return totalStorageCost;

}
//update delivery cost use funtion 

function updateDeliveryCost(isDeliveryCharge) {
    let deliveryCost = document.getElementById('extra-delivery-cost').innerText;
    let totalDeliveryCost = document.getElementById('extra-delivery-cost');

    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryCost.innerText = 0;
    }
    else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryCost.innerText = 20;
    }
    return totalDeliveryCost;
}

//calculate total charge 

function calculateTotal(memory, storage, deliverycharge, code) {

    let memoryCost = getUpdateMemoryCost(memory).innerText;
    const finalMemoryCost = parseInt(memoryCost);
    let storageCost = updateTotalStorageCost(storage).innerText;
    const finalStorageCost = parseInt(storageCost);
    let deliveryCost = updateDeliveryCost(deliverycharge).innerText;
    const finaldeliveryCost = parseInt(deliveryCost);


    let currentBalance = document.getElementById('best-cost').innerText;
    let totalBalance = document.getElementById('total-cost');
    totalBalance.innerText = finalMemoryCost + finalStorageCost + finaldeliveryCost + parseInt(currentBalance);

    /* Total Cost */

    let displayCost = document.getElementById('display-cost');
    displayCost.innerText = totalBalance.innerText;

    /* Apply Promo Code */

    code = document.getElementById('promo-code').value;
    if (code == 'stevekaku') {
        const reducingAmount = parseFloat(totalBalance.innerText) * .20;
        const afterPromoCost = totalBalance.innerText - parseFloat(reducingAmount);
        displayCost.innerText = afterPromoCost;
    }
}

//Update memory cost 
document.getElementById('16gb-memory').addEventListener('click', function () {

    getUpdateMemoryCost('16gb');
    // update total 
    calculateTotal('16gb');

});
document.getElementById('8gb-memory').addEventListener('click', function () {

    getUpdateMemoryCost('8gb');
    // update total 
    calculateTotal('8gb');

});

//update Storage Cost 
document.getElementById('256gb-ssd').addEventListener('click', function () {

    updateTotalStorageCost('256gb-storage');
    // update total 
    calculateTotal('256gb-storage');

});
document.getElementById('512gb-ssd').addEventListener('click', function () {

    updateTotalStorageCost('512gb-storage');
    // update total 
    calculateTotal('512gb-storage');

});
document.getElementById('1tb-ssd').addEventListener('click', function () {

    updateTotalStorageCost('1tb-storage');
    // update total 
    calculateTotal('1tb-storage');

});

//update delivery cost
document.getElementById('without-delivery-charge').addEventListener('click', function () {

    updateDeliveryCost('without-charge');
    // update total 
    calculateTotal('without-charge');

});
document.getElementById('with-delivery-charge').addEventListener('click', function () {

    updateDeliveryCost('with-charge');
    // update total 
    calculateTotal('with-charge');

});

// update promo code
document.getElementById('code-entered').addEventListener('click', function () {

    calculateTotal('stevekaku');
    document.getElementById('promo-code').value = '';

});

