// const output = document.querySelector("#output");
// const copybtn = document.querySelector("#copybtn");
// const lengths = document.querySelector("#lengths");
// const number = document.querySelector("#number");
// const capital = document.querySelector("#capital");
// const small = document.querySelector("#small");
// const symbol = document.querySelector("#symbol");
// const password = document.querySelector("#password");
// // const generate = document.querySelector("#generate");
// // for copy the password
// copybtn.addEventListener("click", async () => {
//   const pass = output.value;
//   if (pass) {
//     await navigator.clipboard.writeText(pass);
//     alert("Password copied to clipboard");
//   } else {
//     alert("No Password to copy");
//   }
// });
// function generateRandomValue(min, max) {
//   const limit = max - min + 1;
//   return String.fromCharCode(Math.floor(Math.random() * limit) + min);
// }
// function capitalValue() {
//   return generateRandomValue(65, 90);
// }
// function smallValue() {
//   return generateRandomValue(97, 122);
// }
// function numberValue() {
//   return generateRandomValue(48, 57);
// }
// function symbolValue() {
//   const symbols = "~`@#$%^&*()_+=-|][{}?/><.,;:";
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }
// const functionArray = [
//   {
//     element: capital,
//     func: capitalValue,
//   },
//   {
//     element: small,
//     func: smallValue,
//   },
//   {
//     element: number,
//     func: numberValue,
//   },
//   {
//     element: symbol,
//     func: symbolValue,
//   },
// ];
// password.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const limit = lengths.value;
//   let generatepassword = "";
//   const funArray = functionArray.filter(({ element }) => {
//     // console.log("element :",element)
//     element.checked;
//   });

//   for (i = 0; i < limit; i++) {
//     const index = Math.floor(Math.random() * funArray.length);
//     const letter = funArray[index].func();
//     generatepassword += letter;
//   }

//   output.value = generatepassword;
// });
const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const passwordLengthElement=document.querySelector('#length');
const numberElement=document.querySelector('#number');
const captialElement=document.querySelector('#captial');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const frm=document.querySelector('#frm');


//Button Click to copy password
btnCopy.addEventListener('click',async()=>{
  const pass=outputElement.value;
  if(pass){
      await navigator.clipboard.writeText(pass);
      alert("Copied to clipboard");
  }else{
    alert("There is no password to copy");
  }
});




function generateRandomChar(min,max)
{
  const limit=max-min+1;
  return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}

function captitalValue(){
  return generateRandomChar(65,90);
}
function smallValue(){
  return generateRandomChar(97,122);
}
function numberValue(){
  return generateRandomChar(48,57);
}

function symbolValue(){
  const symbols="~!@#$%^&*()_+|}{<>*./";
  return symbols[Math.floor(Math.random()*symbols.length)];
}


const functionArray=[
  {
    element:numberElement,
    fun:numberValue
  },
  {
    element:captialElement,
    fun:captitalValue
  },
  {
    element:smallElement,
    fun:smallValue
  },
  {
    element:symbolElement,
    fun:symbolValue
  }


];


frm.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const limit=passwordLengthElement.value;


  let generatedPassword="";

  const funArray=functionArray.filter(({element})=>element.checked);
  //console.log(funArray);

  for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword+=letter;//5$
  }



  outputElement.value=generatedPassword;
});
