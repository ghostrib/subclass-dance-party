var BlinkyDancer = function (top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

}

// class BlinkyDancer extends Dancer {
//   constructor(top, left, timeBetweenSteps) {
//     super(top, left, timeBetweenSteps);
//   }
//   //Dancer.call(this, top, left, timeBetweenSteps)
// }

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

var oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.step = function (timeBetweenSteps) {

  oldStep.call(this, timeBetweenSteps);
  this.$node.toggle();
};

