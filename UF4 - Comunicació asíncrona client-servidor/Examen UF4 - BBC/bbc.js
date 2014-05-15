$(document).ready(function()
{
	$('#visualClue').html('Loading...');
	$.ajax(
	{
		url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
		dataType: 'json',
		complete: function(jqXHR, textStatus)
		{
			$('#visualClue').html('Load complete');
		},
		error: function(jqXHR, textStatus, errorThrown)
		{
	        // status = código de error
	        $('#visualClue').text('Error: ' + jqXHR.status + ' - ' + errorThrown);
	    },
	    success: function(jsonBBC)
	    {
	    	$.each(jsonBBC.broadcasts, function(i, item)
			{
				$('#series>ol').append('<li>' + item.programme.display_titles.title + ', ' + item.programme.display_titles.subtitle + '</li>');
			});
			$('li').click(function()
			{
				$('#infoSeries>ol').empty();
				$('#visualClue').html('Loading...');
				$.ajax(
				{
					url: 'http://www.bbc.co.uk/tv/programmes/genres/drama/scifiandfantasy/schedules/upcoming.json',
					dataType: 'json',
					complete: function(jqXHR, textStatus)
					{
						$('#visualClue').html('Load complete');
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
	        			// status = código de error
	        			$('#visualClue').text('Error: ' + jqXHR.status + ' - ' + errorThrown);
	    			},
	    			success: function(jsonBBC)
	    			{
	    				$.each(jsonBBC.broadcasts, function(i, item)
	    				{
	    					$('#infoSeries>ol').append('<li>' + item.programme.short_synopsis + '</li>');
	    				});
	    			}
				});
			});
	    }	    
	});
});