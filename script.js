let clip = document.querySelector(".vid")
    
clip.addEventListener("mouseover", function (e) {
        clip.play();
        clip.style.cursor="pointer"
})
let clip1 = document.querySelector(".portClip")
clip1.addEventListener("mouseover", function (e) {
        clip1.play();
        clip1.style.cursor="pointer"
})
let clip5 = document.querySelector(".eComClip")
clip5.addEventListener("mouseover", function (e) {
        clip5.play();
        clip5.style.cursor="pointer"
})
let clip2 = document.querySelector(".digiClip")
clip2.addEventListener("mouseover", function (e) {
        clip2.play();
        clip2.style.cursor="pointer"
})
let clip3 = document.querySelector(".blogClip")
clip3.addEventListener("mouseover", function (e) {
        clip3.play();
        clip3.style.cursor="pointer"
})
let clip4 = document.querySelector(".courseClip")
clip4.addEventListener("mouseover", function (e) {
        clip4.play();
        clip4.style.cursor="pointer"
})

let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector(".mobileNav")
hamburger.addEventListener("click", ()=>{
    if(nav.style.display === "block"){
        nav.style.display = "none";
    }

    else{
        nav.style.display = "block";
        
    }
})