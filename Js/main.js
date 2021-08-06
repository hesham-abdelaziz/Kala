window.onload = function(){
    let image = document.querySelector(".left");
    let rightDiv = document.querySelector(".right");
    let scale = document.querySelectorAll(".scale-sec");
    let scaleArray = Array.from(scale)
    image.classList.add("load");
    rightDiv.classList.add("slideInTop");
    
    scaleArray.forEach((ele)=>{
        ele.classList.add("active");
    });

}

// Toggle scroll to top button 




// Toggle side menu 
//#region 
let iconMeun = document.querySelector(".fa-bars");
let Menu = document.getElementById("menu");
let menuContainer = document.querySelector(".menu-container");
let menuClose = document.querySelector(".close");

iconMeun.addEventListener("click" , function(){
    Menu.style.visibility ="visible";
    menuContainer.style.left = "0";
});

menuClose.addEventListener("click" , function() {
    Menu.style.visibility ="hidden";
    menuContainer.style.left = "-400px";
});

window.onclick= function(e){
    if(e.target == Menu) {
        Menu.style.visibility ="hidden";
        menuContainer.style.left = "-400px";
    }
}

//#endregion

// Scroll to top 
//#region 
let scrolltop = document.querySelector(".up");
window.onscroll = function(){
if (scrollY >= 100){
    scrolltop.classList.add("show");
}
else  {
    scrolltop.classList.remove("show");

}
  
};

scrolltop.onclick = function(){
    window.scrollTo({
        top :0 ,
        behavior: 'smooth'
    });
}
//#endregion

// Tabs 
//#region 

// get list and store it in array 
let list = document.querySelectorAll(".links-container li");
let listArray = Array.from(list);

// get the div inside the demo container and store it in array 
let div = document.querySelectorAll(".demos-container > div");
let divArray = Array.from(div);



listArray.forEach((ele)=>{
    ele.addEventListener("click" , function(e){
        listArray.forEach((ele)=>{
            ele.classList.remove("active");

        });
        // Add active class

    e.currentTarget.classList.add("active");
    divArray.forEach((div)=>{
        div.style.display = "none"
    });
        document.querySelector(e.currentTarget.dataset.content).style.display ="flex";
        


        

    });

});


//#endregion

// Reveal on scroll
//#region 

window.addEventListener("scroll" , reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal , .scale");

    for(var i = 0; i<reveals.length;i++){
        var windowheigth = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheigth - revealpoint){
            reveals[i].classList.add("active");
        }
       else { 
        reveals[i].classList.remove("active");

       }
    }
};

