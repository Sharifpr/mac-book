const memory8gb = document.getElementById('memory-8gb-button');
const memory16gb = document.getElementById('memory-16gb-button');

const storage1 = document.getElementById('256gb-storage-button');
const storage2 = document.getElementById('512gb-storage-button');
const storage3 = document.getElementById('1tb-storage-button');

const extraMemoryCost = document.getElementById('etra-memory-cost');
const bastPrice = document.getElementById('bast-price');
const totalPrice = document.getElementById('total-price');
const extraStorageCost = document.getElementById('etra-storage-cost');
const total = document.getElementById('total-cost');

// handle memory 
memory8gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    // update total
    getUpdateValue();

})
memory16gb.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    // update total
    getUpdateValue();
})

// handle Storage
storage1.addEventListener('click', function () {
    extraStorageCost.innerText = '0';
    // update total
    getUpdateValue();
})
storage2.addEventListener('click', function () {
    extraStorageCost.innerText = '100';
    // update total
    getUpdateValue();
})
storage3.addEventListener('click', function () {
    extraStorageCost.innerText = '180';
    // update total
    getUpdateValue();
})

// handle delivery charge
const freeDalivery = document.getElementById('free-dalivery');
const chargeDalivery = document.getElementById('charge-dalivery');

const totalDaliveryCost = document.getElementById('total-dalivery-charge');

freeDalivery.addEventListener('click', function () {
    totalDaliveryCost.innerText = '0';
    // update total
    getUpdateValue()
})
chargeDalivery.addEventListener('click', function () {
    totalDaliveryCost.innerText = '20';
    // update total
    getUpdateValue()
})

// update total price
function getUpdateValue() {
    const extraCharge = parseInt(extraMemoryCost.innerText);
    const extraStorage = parseInt(extraStorageCost.innerText);
    const productPrice = parseInt(bastPrice.innerText);
    const granDaliveryCost = parseInt(totalDaliveryCost.innerText);
    const totalCost = extraCharge + productPrice + granDaliveryCost + extraStorage;
    totalPrice.innerText = totalCost;
    total.innerText = totalCost;
}

// promo code apply
function promoCode(myEvent) {
    if (myEvent.value == 'stevekaku') {
        const discountPrice = parseInt(totalPrice.innerText) * 20;
        console.log(discountPrice)
        const newPrice = discountPrice / 100;
        total.innerText = totalPrice.innerText - newPrice;
    }
    else {
        inputField.value = 'your promo code is worng';
    }
}

// update total 
totalPrice.addEventListener('click', function () {
    getUpdateValue();
})
total.addEventListener('click', function () {
    getUpdateValue();
})

// promo code section
const inputField = document.getElementById('promo-input-field');
document.getElementById('cupon-button').addEventListener('click', function () {
    promoCode(inputField);
})


