const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  let dino2;
  beforeEach(function () {
    park = new Park("Jurassic Park", 5);
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('velociraptor', 'carnivore', 130);
    // dino3 = new Dinosaur('t-rex', 'carnivore', 50);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });
  
  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 5); 
  });
  
  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dino1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dino1);
    park.removeDino();
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dino1);
    park.addDino(dino2);
    const actual = park.mostVisitors();
    assert.strictEqual(actual, dino2);
  });

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
