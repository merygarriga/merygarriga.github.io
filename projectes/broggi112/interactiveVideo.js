var video = document.getElementById("myVideo");
var stats = document.getElementById("stats");
var carta = document.getElementById("carta");
var admin = document.getElementById("admin");

// Función para mostrar el botón
function mostrarBoton(boton) {
  boton.style.display = "block";
}

// Función para ocultar el botón
function ocultarBoton(boton) {
  boton.style.display = "none";
}

stats.addEventListener("click", function () {
  video.currentTime = 6; // Salta a 6s
  video.play();
  ocultarBoton(carta);
  ocultarBoton(admin);
  ocultarBoton(stats);
});

admin.addEventListener("click", function () {
  video.currentTime = 60 + 46; // Salta a 1:46
  video.play();
  ocultarBoton(carta);
  ocultarBoton(admin);
  ocultarBoton(stats);
});

carta.addEventListener("click", function () {
  video.currentTime = 43; // Salta a 0:43
  video.play();
  ocultarBoton(carta);
  ocultarBoton(admin);
  ocultarBoton(stats);
});

//parar el video para escoger opcion
video.addEventListener("timeupdate", function () {
  var current_time = video.currentTime;

  // Mostrar el botones en el minuto 0:25
  if (current_time >= 39 && current_time < 40) {
    mostrarBoton(carta);
    mostrarBoton(admin);
    mostrarBoton(stats);
    video.pause();
  }

// Mostrar el botones en el minuto 1:43
if (current_time >= 103 && current_time < 104) {
    mostrarBoton(carta);
    mostrarBoton(admin);
    mostrarBoton(stats);
    video.pause();
  }

  // Mostrar el botones en el minuto 3:32
if (current_time >= 212 && current_time < 213) {
    mostrarBoton(carta);
    mostrarBoton(admin);
    mostrarBoton(stats);
    video.pause();
  }
});

// 2 minutos y 30 segundos,
// 2 minutos * 60 segundos + 30 segundos = 120 + 30 = 150
// puedes establecer
// video.currentTime = 150;
