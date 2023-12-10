const button=document.querySelector(".button")
const whatsUpLogo=document.querySelector(".whats-up-logo");

whatsUpLogo.addEventListener("mouseover",()=>{
    if(button.style.display==='none')
    {
        button.style.display='block';
    }
    else{
        button.style.display='none';

    }

})