document.addEventListener("DOMContentLoaded", () => {
    const envoltura = document.querySelector(".envoltura-sobre");
    const corazon = document.querySelector(".corazon");
    const carta = document.querySelector(".carta");
  
    let abierta = false;
  
    corazon.addEventListener("click", () => {
      abierta = !abierta;
  
      if (abierta) {
        envoltura.classList.add("abierto");
        carta.classList.add("mostrar-carta");
        carta.classList.remove("cerrando-carta");
      } else {
        envoltura.classList.remove("abierto");
        carta.classList.remove("mostrar-carta");
        carta.classList.add("cerrando-carta");
  
        // Espera a que termine la animación antes de quitar clases
        setTimeout(() => {
          carta.classList.remove("cerrando-carta");
        }, 500);
      }
    });
  });
  

