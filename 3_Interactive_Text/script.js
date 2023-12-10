let textInput=document.querySelector("#textInput");
let displayText=document.querySelector("#displayText");

textInput.addEventListener("input",()=>{
    displayText.innerText=textInput.value;

})