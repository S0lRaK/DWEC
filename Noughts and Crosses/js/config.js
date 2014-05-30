var config =
{
	// Setting the variables to be used
	emptyBoxes: 8,
	boxes: new Array(),
	chips: new Array(),
	// Player's turn
	turn: 1,
	// Starting a game...
	createBox: function()
	{
		// Eliminates previous boards to not duplicate them
		$('#board').empty();
		// Adds 9 boxes into the board
		for (i = 0; i < 9; i++)
		{
			$('#board').append('<div id="box' + i + '" class="box"></div>');
			var box = new Box(i, true, null);
			config.boxes[i] = box;
		}
		events.boxClicked();
	},
	createChip: function(boxId)
	{
		var chip = new Chip(boxId, config.turn);
		// Adds the array into the object
		config.chips.push(chip);
		// Set the chip into the clicked box
		config.boxes[boxId].setChip(chip);
		// Set color chip for first player
		if (config.turn == 1)
		{
			$('#' + boxId).append('<div class="chip player1"></div>');
			config.turn = 2;
		}
		// Set color chip for second player
		else if (config.turn == 2)
			{
				$('#' + boxId).append('<div class="chip player2"></div>');
				config.turn = 1;
			}
		// Drops an empty one from the counter
		config.emptyBoxes --;
		// Verify if a player has won
		config.win();
	},
	// Verify if a player has won
	win: function()
	{

	},
	// Verify if there are 3 chips in a row vertically
	vRow: function(colorChip)
	{

	},
	// Verify if there are 3 chips in a row horizontally
	hRow: function(colorChip)
	{

	},
	// Verify if there are 3 chips in a row diagonally
	dRow: function(colorChip)
	{

	}
};