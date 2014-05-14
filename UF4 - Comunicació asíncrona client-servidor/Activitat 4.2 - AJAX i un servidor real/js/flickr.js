$(document).ready(function()
{
	$('#loadPhotos').click(function()
	{
		var userId = $('#inputId').val();
		var photoTag = $('#inputTag').val();
		if (userId || photoTag)	// Si se ha introducido algún valor...
		{
			$('#error').empty(); // Vacía el contenido del div contenedor del mensaje de error
			$('#flickrPhotos').empty(); // Vacía el contenido del div contenedor de fotos
			$(this).attr('disabled','disabled'); // Desabilita el botón para evitar enviar múltiples peticiones simultaneas
			$(this).html('Cargando'); // Canvia el texto mostrado en el botón
			$.ajax(
			{
				// Dirección a la que se realiza la petición, devuelta con formato 'JSON', los filtros de 'ID' y 'TAG', y la especificación de 'CALLBACK'
				url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=' + userId + '&tags=' + photoTag + '&jsoncallback=?',
				dataType: 'json',
				complete: function(jqXHR, textStatus)
				{
					$('#loadPhotos').html('Cargar fotos'); // Canvia el texto mostrado en el botón
					$('#loadPhotos').removeAttr('disabled'); // Vuelve a activar el botón
				},
				error: function(jqXHR, textStatus, errorThrown)
				{
	                $('#error').text('Error: ' + jqXHR.status + ' - ' + errorThrown); // status = código de error
	            },
	            success: function(data)
	            {
	            	console.log(data); // Para mostrar el objeto JSON recibido
	            	if (userId) // Si sólo se ha introducido la ID del usuario a buscar...
	            	{
	            		$('#photos').prepend('<p>ID usuario: ' + userId + '</p>'); // data.items.entry.author.name
	            		$.each(data.items, function(i, item)
	            		{
	            			//$('#flickrPhotos').append(imageHTML(item));
	            			$('#flickrPhotos').append('<img src="' + data.items[i].media.m + '"/>');
	            			$('#flickrPhotos').append('<p>Etiquetas: ' + data.items[i].tags + '</p>');
	            		});	
	            	}
	            	else // Si sólo se ha introducido el TAG a buscar
	            	{
	            		$.each(data.items, function(i, item)
	            		{
	            			//$('#flickrPhotos').append(imageHTML(item));
	            			$('#flickrPhotos').append('<img src="' + data.items[i].media.m + '"/>');
	            			$('#flickrPhotos').append('<p>ID autor: ' + data.items[i].author_id + '</p>');
	            			$('#flickrPhotos').append('<p>Etiquetas: ' + data.items[i].tags + '</p>');
	            			$('#flickrPhotos').append('<hr />');
	            		});
	            	}
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