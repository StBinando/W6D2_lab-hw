const Park = function(name, price){
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
}

Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
}

module.exports = Park;