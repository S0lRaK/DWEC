// Constructor for the class Chip
function Chip(id, color)
{
	var id = id;
	var color = color;
	// Getters
	this.getId = function()
	{
		return id;
	};
	this.getColor = function()
	{
		return color;
	};
}