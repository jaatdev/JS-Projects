let mouseOverButton=document.querySelector("#mouseoverButton");

mouseOverButton.addEventListener("mouseover",()=>{
    mouseOverButton.style.backgroundColor="red";
})
mouseOverButton.addEventListener("mouseout",()=>{
    mouseOverButton.style.backgroundColor="blue";
})