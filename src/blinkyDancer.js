// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = new BlinkyDancer();
//   return blinkyDancer;
// }

var BlinkyDancer = function(top,left,timeBetweenSteps) {
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this,top,left,timeBetweenSteps);
  //this.step(timeBetweenSteps);
  //this.setPosition(top, left);
}

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 

  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;

  var oldStep = Dancer.prototype.step;

  BlinkyDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
    //console.log('argh')
    oldStep.call(this,timeBetweenSteps);

    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //console.log('this.node = ', this.$node)
    this.$node.toggle();
  };

  //return blinkyDancer;
//};

