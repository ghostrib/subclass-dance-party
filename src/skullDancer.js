var SkullDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('skull-dancer').append('<img src="https://www.clipartmax.com/png/middle/232-2326475_human-skull-symbolism-clip-art-skull-logo-vector-png.png">');
}

SkullDancer.prototype = Object.create(Dancer.prototype);
SkullDancer.prototype.constructor = SkullDancer;

SkullDancer.prototype.step = function(timeBetweenSteps) {
    Dancer.prototype.step.call(this, timeBetweenSteps);
    //$('span').append('<img src="...."')
    //console.log($(this))
    //console.log(this.$node)
    $('.skull-dancer').effect('shake');
    //this.$node.effect('shake');
};

