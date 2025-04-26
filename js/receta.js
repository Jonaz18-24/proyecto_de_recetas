// Obtener los elementos del formulario y la lista de comentarios
const comentarioForm = document.querySelector(".form-comentario");
const comentariosLista = document.querySelector("#comentarios-lista");
const nombreComentarioInput = document.querySelector("#nombre-comentario");
const comentarioTextoInput = document.querySelector("#comentario-texto");
const enviarComentarioBtn = document.querySelector("#enviar-comentario");

// Función para validar los campos
function validarCampos() {
  if (nombreComentarioInput.value.trim() === "" || comentarioTextoInput.value.trim() === "") {
    alert("Por favor, complete todos los campos.");
    return false;
  }
  return true;
}

// Función para agregar un comentario
function agregarComentario(event) {
  event.preventDefault();

  if (validarCampos()) {
    const comentario = document.createElement("div");
    comentario.classList.add("comentario");
    
    // Crear el contenido del comentario
    comentario.innerHTML = `
      <p><strong>${nombreComentarioInput.value}</strong> <span>${new Date().toLocaleDateString()}</span></p>
      <p>${comentarioTextoInput.value}</p>
    `;

    // Añadir el comentario a la lista
    comentariosLista.appendChild(comentario);

    // Limpiar los campos del formulario
    nombreComentarioInput.value = "";
    comentarioTextoInput.value = "";
  }
}

// Escuchar el evento submit en el formulario de comentarios
comentarioForm.addEventListener("submit", agregarComentario);
// Función para manejar la calificación con estrellas
const estrellas = document.querySelectorAll(".star");
const feedback = document.querySelector("#rating-feedback");

estrellas.forEach((estrella) => {
  estrella.addEventListener("click", (event) => {
    // Obtener el valor de la estrella seleccionada
    const valor = event.target.getAttribute("data-value");
    
    // Establecer las estrellas seleccionadas
    estrellas.forEach((s) => {
      s.classList.remove("selected");
      if (s.getAttribute("data-value") <= valor) {
        s.classList.add("selected");
      }
    });

    // Actualizar el mensaje de feedback
    feedback.textContent = `¡Has calificado con ${valor} estrellas!`;
  });
});
// Función para agregar un comentario con fecha
function agregarComentario(event) {
    event.preventDefault();
  
    if (validarCampos()) {
      const comentario = document.createElement("div");
      comentario.classList.add("comentario");
      
      // Crear el contenido del comentario con fecha
      const fecha = new Date();
      const fechaComentario = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} - ${fecha.getHours()}:${fecha.getMinutes()}`;
      
      comentario.innerHTML = `
        <p><strong>${nombreComentarioInput.value}</strong> <span>${fechaComentario}</span></p>
        <p>${comentarioTextoInput.value}</p>
      `;
  
      // Añadir el comentario a la lista
      comentariosLista.appendChild(comentario);
  
      // Limpiar los campos del formulario
      nombreComentarioInput.value = "";
      comentarioTextoInput.value = "";
    }
  }
  