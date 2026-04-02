let DarkMode=document.getElementById("darkmode-icon");
let logo=document.querySelector(".logo");
let navAllLinks=document.querySelectorAll(".navigation a");
let header=document.querySelector("header");
let tittle=document.querySelectorAll(".tittle");
let home=document.querySelector(".home");


DarkMode.addEventListener("click",()=>{
    document.body.classList.toggle("DarkMode");
    if(document.body.classList.contains("DarkMode")){
        logo.style.color="white";
       
        DarkMode.style.color="black";
        header.style.backgroundColor="rgb(38, 31, 48)";
        tittle.forEach(t=>{
            t.style.color="white";
        });
       
       

    }else{
        
        
        logo.style.color="rgb(51, 32, 113)";
       
        DarkMode.style.color="Grey";
        header.style.backgroundColor="rgb(236, 221, 221)";
        tittle.forEach(t=>{
            t.style.color="rgb(23, 23, 102)";
        });

    }
});