let button=document.querySelector("button");
button.addEventListener("click",()=>{
    document.body.style.backgroundColor="#"+Math.floor(Math.random()*65535).toString(16);

})