const validpin=1234;

//function to get input values
function getInputValueNumber(id){

    const value=parseInt(document.getElementById(id).value)

    return value;

}

function getInputValue(id){
    const value=document.getElementById(id).value;
    return value;
}

//function to get innertext
function getInnerText(id){
  const element= document.getElementById(id)
  const elementValue=element.innerText;
  const elementValueNumber=parseInt(elementValue)
  //console.log(elementValueNumber)
  return elementValueNumber
}

//function to set innertext
function setInnerText(value){
  const availableBalanceElement=document.getElementById("available-balance")
  availableBalanceElement.innerText=value

}
//function to toggle
function handleToggle(id){
  const forms=document.getElementsByClassName("form")

for(const form of forms){
  form.style.display="none"
}

document.getElementById(id).style.display="block"
}








//add money feature
document.getElementById("add-money-btn").addEventListener("click",function(e){
e.preventDefault();
console.log("button_clicked");
const bank =getInputValue("bank");

const accountNumber=document.getElementById("account-number").value;
const amount=getInputValueNumber("add-amount");
const pin=getInputValueNumber("add-pin");
const avaiableBalance=getInnerText("available-balance")
console.log(avaiableBalance);

if(accountNumber.length<11){
    alert("Please Provide valid account number")
     return;
}
if(pin !=validpin){
    alert("Please provide valid pin number")
     return;
}
const totalNewAvailableBalance=amount+avaiableBalance;

// document.getElementById("available-balance").innerText=totalNewAvailableBalance;
setInnerText(totalNewAvailableBalance)
})

//cash out money feature"
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
   
    const amount=parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance=getInnerText("available-balance")

  const totalNewAvailableBalance=availableBalance-amount;
// document.getElementById("available-balance").innerText=totalNewAvailableBalance;
  setInnerText(totalNewAvailableBalance)

})



//toggling feature
//1
//AddMoney
document.getElementById("add-button").addEventListener("click",function(){

  // document.getElementById("cash-out-parent").style.display="none";

  // document.getElementById("add-money-parent").style.display="block" 
  
const forms=document.getElementsByClassName("form")

for(const form of forms){
  form.style.display="none"
}

document.getElementById("add-money-parent").style.display="block"

});
//2

document.getElementById("cash-out-button").addEventListener("click",function(){

  //CashOut
//   document.getElementById
// ("add-money-parent").style.display="none"
// document.getElementById("cash-out-parent").style.display="block"
// 

const forms=document.getElementsByClassName("form")

for(const form of forms){
  form.style.display="none"
}

document.getElementById("cash-out-parent").style.display="block"


});



//transfer money
document.getElementById("transfer-button").addEventListener("click",function(){
handleToggle("transfer-money-parent")
})

//Get Bonus
document.getElementById("get-bonus-button").addEventListener("click",function(){
handleToggle("get-bonus-parent")
})

//PayBill
document.getElementById("pay-bill-button").addEventListener("click",function(){
handleToggle("Pay-bill-parent")
})

//Transactions
document.getElementById("transactions-button").addEventListener("click",function(){
handleToggle("transactions-parent")
})


