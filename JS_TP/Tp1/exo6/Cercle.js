var Cercle = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;

	this.ache = function(dure)
	{

		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,50,0,2*Math.PI*dure,false);
		this.canvas2dContext.fillStyle = "black";
		this.canvas2dContext.stroke();
	}

	this.clean = function()
	{
		this.canvas2dContext.clearRect(0, 0, 200, 200);
	}
}
