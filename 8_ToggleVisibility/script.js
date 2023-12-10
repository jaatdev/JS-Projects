let toggleElement=document.querySelector("#toggleElement");
let toggleVisibility=document.querySelector("#toggleVisibility");

toggleVisibility.addEventListener("click",()=>{
    if(toggleElement.style.display==="none"){
        toggleElement.style.display="block";
    }
    else{
        toggleElement.style.display="none";

    }
})

