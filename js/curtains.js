document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      if (event.target.matches('.curtain')) {
        var body = document.querySelector('body');
        body.classList.toggle('open-curtains');
      }
    });
  });

  var cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);
  
  document.addEventListener("mousemove", function(e) {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });
  