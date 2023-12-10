let buttonClick=document.querySelector(".button-click");
let buttonOver=document.querySelector(".button-over");
let outputMessage=document.querySelector("#outputMessage");

buttonClick.addEventListener("click",()=>{
    outputMessage.innerText="You Clicked on me";
})
buttonOver.addEventListener("mouseover",()=>{
    outputMessage.innerText="You Overed on me";
})