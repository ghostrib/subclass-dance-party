var SkullDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('skull-dancer').append('<img src="http://pluspng.com/img-png/horror-png-death-horror-monster-halloween-scary-fear-dark-506.png">');
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

