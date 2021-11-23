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
    let mostVisited = this.dinosaurs[0];

    for (const dino of this.dinosaurs){
      if (dino.guestsAttractedPerDay > mostVisited.guestsAttractedPerDay) {
        mostVisited = dino;
      }
    }

    return mostVisited;
}

Park.prototype.findBySpecies = function(species){
    let foundDinos = [];
    for (const dino of this.dinosaurs){
        if (dino.species === species){
            foundDinos.push(dino);
        }
    }
    return foundDinos;
}


Park.prototype.totalVisitorsDay = function(){
    let totVisitors = 0;        // why doesn't work if not initialises as 0?!
    for (const dino of this.dinosaurs){ // why const for loop?!
        totVisitors += dino.guestsAttractedPerDay;
    }
    return totVisitors;
}

module.exports = Park;