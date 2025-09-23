const validpin=1234
const transactionData=[]

//function to get input values
function getInputValueNumber(id){

    const value=parseInt(document.getElementById(id).value)

    return value

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

//funciton to toggle button

function handleButtonToggle(id){
const formBtns =document.getElementsByClassName("form-btn")

for(const btn of formBtns){
 btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
 btn.classList.add("border-gray-300")

}
document.getElementById(id).classList.remove("border-gray-300")
document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
 
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
handleButtonToggle()

const data={
  name:"Add Money",
  date: new Date().toLocalTimeString()
}
transactionData.push(data)
})

//cash out money feature"
document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault();
   
    const amount=parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance=getInnerText("available-balance")

  const totalNewAvailableBalance=availableBalance-amount;
// document.getElementById("available-balance").innerText=totalNewAvailableBalance;
  setInnerText(totalNewAvailableBalance)

  const data={
  name:"Cash Out",
  date: new Date().toLocalTimeString()
}
transactionData.push(data)

})

//Transactions
document.getElementById("transactions-button").addEventListener("click",function(){
// const transactionContainer=document.getElementById("transaction-container")



for(const data of transactionData){
  const div = document.createElement("div")
  div.innerHTML=` <div class="flex justify-between items-center bg-white p-3 rounded-xl">
        <div class="flex items-center">
            <div class=" p-3 rounded-full bg-[rgb(244,245,247)]">
             <img src="./assets/wallet1.png" class="mx-auto" alt="">   
            </div>
            <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
            </div>
        </div>
        <div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div> `

    transactionContainer.appendChild(div)
}

})



//toggling feature
//1
//AddMoney
document.getElementById("add-button").addEventListener("click",function(){
handleToggle("add-money-parent")
handleButtonToggle("add-button")
  // document.getElementById("cash-out-parent").style.display="none";

  // document.getElementById("add-money-parent").style.display="block" 
  
// const forms=document.getElementsByClassName("form")

// for(const form of forms){
//   form.style.display="none"
// }

// document.getElementById("add-money-parent").style.display="block"

});
//2

document.getElementById("cash-out-button").addEventListener("click",function(){
handleToggle("cash-out-parent")
handleButtonToggle("cash-out-button")
  //CashOut
//   document.getElementById
// ("add-money-parent").style.display="none"
// document.getElementById("cash-out-parent").style.display="block"
// 

// const forms=document.getElementsByClassName("form")

// for(const form of forms){
//   form.style.display="none"
// }

// document.getElementById("cash-out-parent").style.display="block"


});



//transfer money
document.getElementById("transfer-button").addEventListener("click",function(){
handleToggle("transfer-money-parent")
handleButtonToggle("transfer-button")
})

//Get Bonus
document.getElementById("get-bonus-button").addEventListener("click",function(){
handleToggle("get-bonus-parent")
handleButtonToggle("get-bonus-button")
})

//PayBill
document.getElementById("pay-bill-button").addEventListener("click",function(){
handleToggle("Pay-bill-parent")
handleButtonToggle("pay-bill-button")
})

//Transactions
document.getElementById("transactions-button").addEventListener("click",function(){
handleToggle("transactions-parent")
handleButtonToggle("transactions-button")
})


