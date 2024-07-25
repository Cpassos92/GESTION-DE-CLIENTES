
  document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener valores del formulario
    const nombres = document.getElementById('nombres').value;
    const tipoDoc = document.getElementById('tipoDoc').value;
    const numeroDoc = document.getElementById('numeroDoc').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Crear una nueva fila en la tabla
    const tableBody = document.querySelector('#clientTable tbody');
    const newRow = tableBody.insertRow();

    newRow.insertCell().textContent = nombres;
    newRow.insertCell().textContent = tipoDoc;
    newRow.insertCell().textContent = numeroDoc;
    newRow.insertCell().textContent = telefono;
    newRow.insertCell().textContent = email;

    // Limpiar el formulario
    document.getElementById('clientForm').reset();
  });
  
