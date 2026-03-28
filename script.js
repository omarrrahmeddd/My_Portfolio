let DarkMode=document.getElementById("darkmode-icon");
let logo=document.querySelector(".logo");
let navAllLinks=document.querySelectorAll(".navigation a");
let header=document.querySelector("header");
let tittle=document.querySelectorAll(".tittle");


DarkMode.addEventListener("click",()=>{
    document.body.classList.toggle("DarkMode");
    if(document.body.classList.contains("DarkMode")){
        logo.style.color="white";
        navAllLinks.forEach(link=>{
            link.style.color="white";
        });
        DarkMode.style.color="black";
        header.style.backgroundColor="rgb(38, 31, 48)";
        tittle.forEach(t=>{
            t.style.color="white";
        });

    }else{
        logo.style.color="blue";
        navAllLinks.forEach(link=>{
            link.style.color="blue";
        });
        DarkMode.style.color="Grey";
        header.style.backgroundColor="rgb(236, 221, 221)";
        tittle.forEach(t=>{
            t.style.color="rgb(23, 23, 102)";
        });

    }
});