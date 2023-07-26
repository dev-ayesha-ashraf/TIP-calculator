function tipCalc(){
let amount =  document.getElementById("bill-amount").value;
let tipPercent =  document.getElementById("tip").value;
let tipVal = document.getElementById("tip-amount");
let totalBill= document.getElementById("bill-total");
var percentage = amount * (tipPercent/100);
tipVal.value = percentage;
totalBill.value =  Number(percentage) + Number(amount);

}