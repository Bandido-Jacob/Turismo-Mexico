// Cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll(".card");
  
    tarjetas.forEach((tarjeta) => {
      // Zoom al pasar el mouse
      tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "scale(1.05)";
        tarjeta.style.transition = "transform 0.3s ease";
        tarjeta.style.cursor = "pointer";
      });
  
      tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "scale(1)";
      });
  
      // Ir a otra página al hacer clic
      tarjeta.addEventListener("click", () => {
        const destino = tarjeta.getAttribute("data-link");
        window.location.href = destino;
      });
    });
  });
  