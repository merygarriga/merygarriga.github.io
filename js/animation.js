function mostrarScroll() {
  let animation = document.querySelectorAll(".animado");
  var altura = window.innerHeight;
  console.log("altura:" + altura);

  for (let i = 0; i < animation.length; i++) {
    var distancia = animation[0].getBoundingClientRect().top;
    console.log("dist:" + distancia);    console.log("altura: " + altura);
    if (distancia <= altura-300) {
        animation[i].style = "opacity: 1";
    }
  }
  var distancia = animation[0].getBoundingClientRect().top;
  console.log("dist:" + distancia);
}

window.addEventListener("scroll", mostrarScroll);


(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight-250 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  