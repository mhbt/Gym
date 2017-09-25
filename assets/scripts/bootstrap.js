// carousel handles
//-----------------------------------------------------------------------------
if(document.querySelector(".carousel")){
    var carousel = {
        content: document.querySelectorAll(".carousel-content li"),
        control : {
          left: document.querySelector(".carousel-control.left a"),
          right:document.querySelector(".carousel-control.right a")
        },
        pointer: 0
    };
    console.log("carousel-true");
     carousel.control.left.addEventListener("click",function(e){
      e.preventDefault();
        document.querySelector(".carousel-content img").style.animation = "carousel1 1s ease-in";
      carousel.content.forEach(function(item,index){
          if(item.classList.contains("active")){
            carousel.content[carousel.pointer].classList.toggle("active");
            carousel.pointer = carousel.pointer === 0 ? carousel.content.length-1 : index -1;
          }
      });
      carousel.content[carousel.pointer].classList.toggle("active");
    }, false);
    carousel.control.right.addEventListener("click",function(e){
     e.preventDefault();
     carousel.content.forEach(function(item,index){
         if(item.classList.contains("active")){
           carousel.content[carousel.pointer].classList.toggle("active");
           carousel.pointer = carousel.pointer === carousel.content.length-1 ? 0 : index + 1;
         }
     });
     carousel.content[carousel.pointer].classList.toggle("active");
   }, false);
  }
  // carousel handles End
  //-----------------------------------------------------------------------------

// Affix Handles
// -----------------------------------------------------------------------------
if (document.querySelector(".affix")){
  var affix = document.querySelector(".affix");
  console.log("affix enabled");
  var offset = affix.getAttribute("data-offset");
  offset = parseInt(offset);
  window.onscroll = ()=> {
    if(offset > window.scrollY) {
      if (affix.classList.contains("fix-affix"))  affix.classList.remove("fix-affix");
    } else {
      if (!affix.classList.contains("fix-affix"))  affix.classList.add("fix-affix");
    }
  }
}
// ------------End Affix Handles------------------------------------------
// -----------------------------------------------------------------------------


//Slide Show mainly text
if(document.querySelector(".slideshow")){
  console.log("slideshow enabled");
  var slides  = document.querySelectorAll(".slide");
  var slide_ptr = document.querySelectorAll(".slide-pointer li");
  slide_ptr.forEach((item, index)=>{
      item.addEventListener("click",displaySlide, true);
  });
  function displaySlide(e){
    e.preventDefault();
    // this.parentNode.querySelector("li.active").classList.toggle("active");
    slide_ptr.querySelector("")
    slides.forEach(selectSlide);
  }
  function selectSlide(item, index){

  }
}
