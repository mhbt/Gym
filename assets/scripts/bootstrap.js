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
  var slides  = document.querySelectorAll(".slideshow .slides li");
  var slide_ptr = document.querySelectorAll(".slideshow .slide-pointer li");
  slide_ptr.forEach((item, index)=>{
      item.addEventListener("click",displaySlide, true);
  });
  var slide_animations = ["slide-to-left","slide-from-left","slide-to-right","slide-from-right"];
  var _this;
  function displaySlide(e){
    e.preventDefault();
    var toToggle ={
      clicked:null,
      active: null
    };
    _this = this;
    slide_ptr.forEach((slide,index)=>{
        if(slide.isSameNode(this)) {
          toToggle.clicked = index;
        }
        if(slide.classList.contains("active")=== true){
          toToggle.active = index;
        }
      });
      // slides[toToggle.clicked].classList.toggle("active");
      if(toToggle.active == toToggle.clicked){
          return;
      }
      else {
        slide_ptr[toToggle.clicked].classList.toggle("active");
        slide_ptr[toToggle.active].classList.toggle("active");
        slides[toToggle.clicked].classList.toggle("active");
      }
      if(toToggle.active < toToggle.clicked){
        slides[toToggle.active].classList.toggle("slide-to-left");
        slides[toToggle.clicked].classList.toggle("slide-from-right");
        setTimeout(()=>{
          slides[toToggle.active].classList.toggle("slide-to-left");
          slides[toToggle.active].classList.toggle("active");
          slides[toToggle.clicked].classList.toggle("slide-from-right");
        },1010);
      }
      else if(toToggle.active > toToggle.clicked){
        slides[toToggle.active].classList.toggle("slide-to-right");
        slides[toToggle.clicked].classList.toggle("slide-from-left");
        setTimeout(()=>{
          slides[toToggle.active].classList.toggle("slide-to-right");
          slides[toToggle.active].classList.toggle("active");
          slides[toToggle.clicked].classList.toggle("slide-from-left");
        },1010);
      }
  }
}

//second redundant slideshow
if(document.querySelector(".slideshow2")){
  console.log("slideshow2 enabled");
  var slides2  = document.querySelectorAll(".slideshow2 .slides2 li");
  var slide_ptr2 = document.querySelectorAll(".slideshow2 .slide-pointers-2 li");
  slide_ptr2.forEach((item, index)=>{
      item.addEventListener("click",displaySlide2, true);
  });
  var slide_animations = ["slide-to-left","slide-from-left","slide-to-right","slide-from-right"];
  var _this2;
  function displaySlide2(e){
    e.preventDefault();
    var toToggle ={
      clicked:null,
      active: null
    };
    _this2 = this;
    slide_ptr2.forEach((slide,index)=>{
        if(slide.isSameNode(this)) {
          toToggle.clicked = index;
        }
        if(slide.classList.contains("active")=== true){
          toToggle.active = index;
        }
      });
      // slides[toToggle.clicked].classList.toggle("active");
      if(toToggle.active == toToggle.clicked){
          return;
      }
      else {
        slide_ptr2[toToggle.clicked].classList.toggle("active");
        slide_ptr2[toToggle.active].classList.toggle("active");
        slides2[toToggle.clicked].classList.toggle("active");
      }
      if(toToggle.active < toToggle.clicked){
        slides2[toToggle.active].classList.toggle("slide-to-left");2
        slides2[toToggle.clicked].classList.toggle("slide-from-right");
        setTimeout(()=>{
          slides2[toToggle.active].classList.toggle("slide-to-left");
          slides2[toToggle.active].classList.toggle("active");
          slides2[toToggle.clicked].classList.toggle("slide-from-right");
        },1010);
      }
      else if(toToggle.active > toToggle.clicked){
        slides2[toToggle.active].classList.toggle("slide-to-right");
        slides2[toToggle.clicked].classList.toggle("slide-from-left");
        setTimeout(()=>{
          slides2[toToggle.active].classList.toggle("slide-to-right");
          slides2[toToggle.active].classList.toggle("active");
          slides2[toToggle.clicked].classList.toggle("slide-from-left");
        },1010);
      }
  }
}


// accordion
if(document.querySelector(".accordion")){
  console.log("accordion enabled");
  var panels = document.querySelectorAll(".accordion .panel");
  panels.forEach((panel)=>{
    panel.querySelector(".toggle").addEventListener("click",(e)=>{
      e.preventDefault();
      var is_collapsed = panel.querySelector(".toggle .fa");
      if(is_collapsed.classList.contains("fa-minus")) {
        is_collapsed.classList.remove("fa-minus");
        is_collapsed.classList.add("fa-plus");
        panel.querySelector(".panel .panel-body").classList.add("collapse");
      }
      else {
        is_collapsed.classList.remove("fa-plus");
        is_collapsed.classList.add("fa-minus");
        panels.forEach((panel)=>{
          if(!panel.querySelector(".panel-body").classList.contains("collapse")){
              var collapse= panel.querySelector(".toggle .fa");
              collapse.classList.remove("fa-minus");
              collapse.classList.add("fa-plus");
              panel.querySelector(".panel-body").classList.add("collapse");
          }
        });
        panel.querySelector(".panel .panel-body").classList.remove("collapse");
      }
    });
  });
}
