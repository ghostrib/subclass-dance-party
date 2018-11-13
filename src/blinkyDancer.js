var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = new BlinkyDancer();
  blinkyDancer.step(timeBetweenSteps);
  blinkyDancer.setPosition(top, left);
  return blinkyDancer;
}

var BlinkyDancer = function() {
  Dancer.call(this);
}

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 

  BlinkyDancer.prototype = Object.create(Dancer.prototype);
  BlinkyDancer.prototype.constructor = BlinkyDancer;

  var oldStep = BlinkyDancer.step;

  BlinkyDancer.prototype.step = function(timeBetweenSteps) {
    // call the old version of step at the beginning of any call to this new version of step
    console.log('argh')
    oldStep(timeBetweenSteps);

    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };

  //return blinkyDancer;
//};

