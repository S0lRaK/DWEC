$(document).ready(function()
{
    // Start a game
    $('#btnStart').click(function()
    {
        config.createBox();
    })
    
    var events =
    {
        // Setting a chip in a box
        boxClicked: function()
        {   
            $('.box').click(function()
            {
                if(config.boxes[$(this).attr('id')].getEmpty() == true)
                {
                    config.createChip($(this).attr('id'));
                    // Set the box as not empty
                    config.boxes[$(this).attr('id')].setEmpty(false);
                }  
            });
        }
    };
});