$(document).ready(function()
{
	$('#loadPhotos').click(function()
	{
		var userId = $('#inputId').val();
		var photoTag = $('#inputTag').val();
		// Si se ha introducido algún valor...
		if (userId || photoTag)
		{
			// Vacía el contenido del div contenedor del mensaje de error
			$('#error').empty();
			// Vacía el contenido del div contenedor de fotos
			$('#flickrPhotos').empty();
			// Desabilita el botón para evitar enviar múltiples peticiones simultaneas
			$(this).attr('disabled','disabled');
			// Canvia el texto mostrado en el botón
			$(this).html('Cargando');
			$.ajax(
			{
				// Dirección a la que se realiza la petición, devuelta con formato 'JSON', los filtros de 'ID' y 'TAG', y la especificación de 'CALLBACK'
				url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=' + userId + '&tags=' + photoTag + '&jsoncallback=?',
				dataType: 'json',
				complete: function(jqXHR, textStatus)
				{
					// Canvia el texto mostrado en el botón
					$('#loadPhotos').html('Buscar fotos');
					// Vuelve a activar el botón
					$('#loadPhotos').removeAttr('disabled');
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
	                // status = código de error
	                $('#error').text('Error: ' + jqXHR.status + ' - ' + errorThrown);
	            },
	            success: function(jsonFlickr)
	            {
	            	// Muestra el JSON recibido por consola
	            	console.log(jsonFlickr);
	            	$.each(jsonFlickr.items, function(i, item)
	            	{
	            		//$('#flickrPhotos').append(imageHTML(item));
	            		$('#flickrPhotos').append('<img src="' + item.media.m + '"/>');
	            		// Si sólo se ha introducido el TAG a buscar...
	            		if (!userId)
	            		{
	            			$('#flickrPhotos').append('<p><strong>ID autor:</strong> ' + item.author_id + '</p>');
	            		};
	            		$('#flickrPhotos').append('<p><strong>Etiquetas:</strong> ' + item.tags + '</p>');
	            		$('#flickrPhotos').append('<hr />');
	            	});	
	            	// Si sólo se ha introducido la ID del usuario a buscar...
	            	if (userId)
	            	{
	            		// jsonFlickr.items.entry.author.name
	            		$('#photos').prepend('<p><strong>ID usuario:</strong> ' + userId + '</p>');
	            	}
	            	// $.ajax(
	            	// {
	            		
	            	// })
	            }
			});
		}
		else
			$('#error').text('Introduzca almenos 1 campo.');
	});
	/*function imageHTML(item)
	{
		return '<img src="' + item.media + '"/>';
	}*/
});