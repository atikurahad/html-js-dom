
function productCost(macCost, price) {
  const smallMemory = document.getElementById(macCost);
  smallMemory.innerText = parseInt(price);
  purchaseCost();
}


function purchaseCost() {
  const baseCost = document.getElementById("base-cost").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const deliveryCost = document.getElementById("delivery-cost").innerText;
  const totalCost = document.getElementById("total-price");
  const subTotal = document.getElementById("sub-total");

  totalCost.innerText =
    parseInt(baseCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
  subTotal.innerText = totalCost.innerText;
}
document.getElementById("memory-8gb").addEventListener("click", function () {
  productCost("memory-cost", 0);
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  productCost("memory-cost", 150);
  console.log('memory 16 gb')
});
// Storage
document.getElementById('storage-256gb').addEventListener('click',function(){
  productCost("storage-cost",0);
});
document.getElementById('storage-512gb').addEventListener('click', function () {
  productCost("storage-cost", 100);
});
document.getElementById('storage-1tb').addEventListener('click', function () {
  productCost("storage-cost", 180);
});

// delivery
document.getElementById('prime-delivery').addEventListener('click',function (){
  productCost("delivery-cost",0);
});
document.getElementById('urgent-delivery').addEventListener('click', function () {
  productCost("delivery-cost", 20);
});

// promo code
document.getElementById('apply-button').addEventListener('click',function(){
  const afterDiscountTotal = document.getElementById('total-price').innerText;
  const promoCode = document.getElementById('promo-code')
  const subTotal = document.getElementById('sub-total')
  const discount = (parseInt(afterDiscountTotal) / 100) * 20;

  if (promoCode.value == "stevekaku") {
    subTotal.innerText = afterDiscountTotal - discount;
  } else {
    subTotal.innerText = afterDiscountTotal;
}


  promoCode.value = '';
});
