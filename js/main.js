

let topContent = document.querySelector(".main-content p");
let topContentName = document.querySelector(".main-content h1");


function mySlide(){
    setTimeout(()=>{
        // topContentName.style.top='500px'
        topContentName.style.opacity='1'
       
    },800)
    
    setTimeout(()=>{
        topContent.style.opacity='1'
       
    },400)
}



window.addEventListener("scroll" , () => {
    let stickyHeader = document.querySelector("header");
    console.log(stickyHeader);

    stickyHeader.classList.toggle("sticky", window.scrollY>450);
});




let aboutImg=document.querySelector('.about-grid img');
let aboutContent=document.querySelector('.about-content');

// let header=document.querySelector('.slide h1')
// let desc=document.querySelector('.slide p')

window.addEventListener("scroll" , () => {
    
    setTimeout(()=>{
        aboutImg.style.transform= 'translateX(0%)';
        
    },1000)
    
});


let burgerMenuLine = document.querySelector('.burger-menu .line');
let bulgerMenuLineLi = document.querySelector('.burger-menu .line ul li');
let toggleMenu = document.querySelector('.toggle-menu')
let menuStatus= true;
burgerMenuLine.addEventListener('click',() =>{
   
    if(menuStatus){
        toggleMenu.style.display = 'block';
        document.querySelector("body").style.background='rgba(255, 255, 255, 0.1)';
        document.querySelector("body").style.opacity='1';
        bulgerMenuLineLi.style.background = '#121212';
        menuStatus=false;
    } else{
        console.log('salam da salam')
        toggleMenu.style.display = 'none';
        document.querySelector("body").style.background='rgba(0, 0, 0, 1)';
        menuStatus=true;
    }

})


