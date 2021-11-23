const Park = function(name, price){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];

}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
}


Park.prototype.removeDino = function(){
    this.dinosaurs.shift();
}

Park.prototype.mostVisitors = function(){
    return this.dinosaurs.guestsAttractedPerDay.max();
}


module.exports = Park;