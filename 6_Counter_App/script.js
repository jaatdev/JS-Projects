let count=document.querySelector("#count");
let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let num=0;


plus.addEventListener("click",()=>{
    num+=1;
    count.innerText=num;
})
minus.addEventListener("click",()=>{
    num-=1;
    count.innerText=num;
})