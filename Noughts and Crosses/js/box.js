// Constructor for the class Box
function Box(id, empty, chip)
{
	var id = id;
	var empty = empty;
	var chip = chip;
	// Getters
	this.getId = function()
	{
		return id;
	};
	this.getEmpty = function()
	{
		return empty;
	};
	this.getChip = function()
	{
		return chip;
	};
	// Setters
	this.setEmpty = function(e)
	{
		empty = e;
	};
	this.setChip = function(c)
	{
		chip = c;
	};
}