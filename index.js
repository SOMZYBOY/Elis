
    $('.nav-item').click(function(){
     $('.navbar div').removeClass('show');
     document.querySelector("span.navicon").classList.add("navbar-toggler-icon");
  document.querySelector("span.navicon").classList.remove("fa-solid");
  document.querySelector("span.navicon").classList.remove("fa-xmark");
  document.querySelector("span.navicon").classList.toggle("fa-3x");
  }); 

  $('.navicon').click(function(){
   // $('.navbar div').removeClass('show');
  document.querySelector("span.navicon").classList.toggle("navbar-toggler-icon");
  document.querySelector("span.navicon").classList.toggle("fa-solid");
  document.querySelector("span.navicon").classList.toggle("fa-xmark");
  document.querySelector("span.navicon").classList.toggle("fa-3x");
 }); 

//  LOADING 
 document.querySelector("button.btnCarousel").addEventListener("click",function(){
    document.querySelector(".box2").style.display="block";
});

window.onload(function(){
setTimeout(function(){
    document.querySelector(".box2").style.display="none";
},100);
})

 