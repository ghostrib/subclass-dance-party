var SkullDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('skull-dancer');
}

SkullDancer.prototype = Object.create(Dancer.prototype);
SkullDancer.prototype.constructor = SkullDancer;

SkullDancer.prototype.step = function(timeBetweenSteps) {
    Dancer.prototype.step.call(this, timeBetweenSteps);
};

