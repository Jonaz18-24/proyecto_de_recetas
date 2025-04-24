document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.querySelector(".recetas-lista");
    const busquedaInput = document.getElementById("busqueda");
  
    // Función para mostrar recetas
    const mostrarRecetas = (recetas) => {
      if (!contenedor) return;
  
      contenedor.innerHTML = "";
  
      if (recetas.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron recetas.</p>";
        return;
      }
  
      recetas.forEach(receta => {
        const card = document.createElement("div");
        card.classList.add("card-receta");
        card.innerHTML = `
          <img src="${receta.imagen}" alt="${receta.nombre}" class="thumb">
          <h3>${receta.nombre}</h3>
          <p>${receta.tiempo} min | ${receta.dificultad}</p>
          <a href="recipe.html?id=${receta.id}"><button>Ver receta</button></a>

        `;
        contenedor.appendChild(card);
      });
    };
  
    // Obtener recetas desde JSON + LocalStorage
    const cargarRecetas = () => {
      fetch("data/recipes.json")
        .then(res => res.json())
        .then(recetasJSON => {
          const recetasLocales = JSON.parse(localStorage.getItem("recetas")) || [];
          const todas = [...recetasJSON, ...recetasLocales];
          mostrarRecetas(todas);
  
          // Habilitar búsqueda en tiempo real
          if (busquedaInput) {
            busquedaInput.addEventListener("input", () => {
              const texto = busquedaInput.value.toLowerCase();
              const filtradas = todas.filter(receta =>
                receta.nombre.toLowerCase().includes(texto)
              );
              mostrarRecetas(filtradas);
            });
          }
        })
        .catch(err => {
          if (contenedor) {
            contenedor.innerHTML = "<p>Error al cargar recetas.</p>";
          }
          console.error(err);
        });
    };
  
    // Si estamos en index.html, cargar recetas
    if (contenedor) {
      cargarRecetas();
    }
  
    // Manejar subida de recetas en upload.html
    const form = document.getElementById("form-upload");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const nuevaReceta = {
          id: Date.now(),
          nombre: form.nombre.value,
          imagen: form.imagen.value || "img/default.jpg",
          tiempo: form.tiempo.value,
          dificultad: form.dificultad.value,
          ingredientes: form.ingredientes.value.split("\n"),
          instrucciones: form.instrucciones.value.split("\n")
        };
  
        const recetasGuardadas = JSON.parse(localStorage.getItem("recetas")) || [];
        recetasGuardadas.push(nuevaReceta);
        localStorage.setItem("recetas", JSON.stringify(recetasGuardadas));
  
        alert("Receta subida con éxito!");
        form.reset();
      });
    }
  });
  // Iniciar sesión simulada
const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = formLogin.querySelector("input[type='email']").value;
    const password = formLogin.querySelector("input[type='password']").value;

    if (email && password) {
      // Aquí puedes validar contra un usuario fijo si quieres
      localStorage.setItem("usuario", JSON.stringify({ email }));
      window.location.href = "index.html"; // Redirigir al home
    } else {
      alert("Completa todos los campos.");
    }
  });
}
document.querySelectorAll('.like-btn, .dislike-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('selected');
    btn.parentNode.querySelectorAll('button').forEach(b => {
      if (b !== btn) b.classList.remove('selected');
    });
    console.log(`Feedback: ${btn.textContent}`);
  });
});
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => alert('¡Gracias por tu opinión positiva!'));
});

document.querySelectorAll('.dislike-btn').forEach(btn => {
  btn.addEventListener('click', () => alert('Gracias por tu comentario. ¡Seguiremos mejorando!'));
});
const carrusel = document.querySelector('.contenedor-carrusel');
const btnLeft = document.querySelector('.btn-carrusel.left');
const btnRight = document.querySelector('.btn-carrusel.right');

btnLeft.addEventListener('click', () => {
  carrusel.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carrusel.scrollBy({ left: 300, behavior: 'smooth' });
});
