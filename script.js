//loginbutton functionality
 document.getElementById("loginButton").addEventListener("click",function(e){ 
    e.preventDefault();
   const mobileNumber=12345;
   const pinNumber=123;

   const mobileNumberValue=document.getElementById("mobile-number").value;
const mobileNumberValueConverted=parseInt(mobileNumberValue);

const pinNumberValue=document.getElementById("pin-number").value;
 const pinNumberValueConverted=parseInt(pinNumberValue);

 if(mobileNumber===mobileNumberValueConverted && pinNumber=== pinNumberValueConverted){
   window.location.href="./home.html"
 }else{
    alert("Invalid Credentials");
 }
 })

