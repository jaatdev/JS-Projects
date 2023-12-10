let main=document.querySelector(".main");

let para=document.createElement("p");
para.className="para";
para.innerText="Click Here";
main.appendChild(para);
para.addEventListener("click",()=>{

    alert("You clicked here");

})