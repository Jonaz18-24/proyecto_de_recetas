function agregarItem() {
    const nuevoItem = document.getElementById('nuevo-item').value.trim();
    if (nuevoItem === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox"> ${nuevoItem}`;
    document.getElementById('lista-compras').appendChild(li);
    document.getElementById('nuevo-item').value = '';
  }
  
  function exportarLista() {
    const items = document.querySelectorAll('#lista-compras li');
    let contenido = 'Lista de compras:\n\n';
    items.forEach(item => {
      const texto = item.textContent.trim();
      const marcado = item.querySelector('input').checked ? '[x]' : '[ ]';
      contenido += `${marcado} ${texto}\n`;
    });
  
    const blob = new Blob([contenido], { type: 'text/plain' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'lista_de_compras.txt';
    enlace.click();
  }
  
  function enviarCorreo() {
    let cuerpo = 'Aquí tienes mi lista de compras:\n\n';
    document.querySelectorAll('#lista-compras li').forEach(item => {
      const texto = item.textContent.trim();
      const marcado = item.querySelector('input').checked ? '[x]' : '[ ]';
      cuerpo += `${marcado} ${texto}\n`;
    });
  
    const mailto = `mailto:?subject=Lista%20de%20Compras&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailto;
  }
  