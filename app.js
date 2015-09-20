var Game = function(){};
Game.prototype.init = function(){
	// dt - data
	this.dt = [];
	for (var i = 0; i < 16; i++) {
		this.dt[i] = 0;
	};
	return this;
}
Game.prototype.render = function(){
	// prnt - parent
	this.prnt = document.createElement('div');
	// chld - child
	this.chld = [];
  for (var i = 0; i < this.dt.length; i++) {
  	this.chld[i] = document.createElement('div');
  	this.chld[i].textContent = this.dt[i];
  	this.prnt.appendChild(this.chld[i]);
  };
	document.body.appendChild(this.prnt);
	return this;
}
var game = new Game();
game.init().render();
