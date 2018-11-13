// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
//   this.color = 'blue'; 
//   this.top = top
//   //var dancer = {};
//   //var dancer = new Dancer();
//   //dancer.step(timeBetweenSteps);
//   //dancer.setPosition(top, left);
//   //return dancer;
// }

var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><img></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
}


Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log('help!!!')
  //console.log(JSON.stringify(this.step));
  //console.log(JSON.stringify(timeBetweenSteps));
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

  //return dancer;
