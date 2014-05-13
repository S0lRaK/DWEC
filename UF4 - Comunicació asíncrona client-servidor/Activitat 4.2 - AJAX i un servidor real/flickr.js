$(document).ready(function()
{
	$('#loadPhotos').click(function()
	{
		var userId, photoTag;
		$('#flickrPhotos').empty(); // Vacía el contenido del div contenedor de fotos
		$(this).toggleClass('btn-primary');
		$(this).html('Cargando');
		$.ajax({
			url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&id='+userId+'&tags='+photoTag+'&jsoncallback=?',
			dataType: 'json',
			complete: function(jqXHR, textStatus)
			{
				$('#loadPhotos').html('Cargar de nuevo');
				$('#loadPhotos').toggleClass('btn-primary');
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
                $('#error').text('Error: '+jqXHR.status+' - '+errorThrown);
            },
            success: function(response)
            {
            	$.each(response.item, function(i, item)
            	{
            		$('#flickrPhotos').append(imageHTML(item));
            	});
            }
		})
	});
	function imageHTML(item)
});