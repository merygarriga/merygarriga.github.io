document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var curtain = true;
  var timeout;

  if (curtain) {
    timeout = setTimeout(function() {
      body.classList.toggle("open-curtains");
    }, 2000);

    document.addEventListener("click", function (event) {
      if (event.target.matches(".curtain")) {
        body.classList.toggle("open-curtains");
        clearTimeout(timeout);
      }
    });

    curtain = false;
  }
});

var cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", function (e) {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
