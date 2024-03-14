$(document).ready(function() {
    const ingredientesDisponibles = ['Harina', 'Huevos', 'Leche', 'Azúcar', 'Sal', 'Aceite'];

    $('#ingredienteInput').on('input', function() {
      const inputValue = $(this).val().trim();
      const ingredientesFiltrados = ingredientesDisponibles.filter(ingrediente => ingrediente.toLowerCase().includes(inputValue.toLowerCase()));

      mostrarIngredientes(ingredientesFiltrados);
    });

    function mostrarIngredientes(ingredientes) {
      const ingredientesList = $('#ingredientesList');
      ingredientesList.empty();

      if (ingredientes.length === 0) {
        ingredientesList.append('<p>No se encontraron ingredientes.</p>');
      } else {
        ingredientes.forEach(ingrediente => {
          ingredientesList.append(`<button type="button" class="btn btn-outline-primary btn-sm mb-2" onclick="seleccionarIngrediente('${ingrediente}')">${ingrediente}</button>`);
        });
      }
    }

    window.seleccionarIngrediente = function(ingrediente) {
      $('#ingredienteInput').val(ingrediente);
    }

  });