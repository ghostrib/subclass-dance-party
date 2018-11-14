var ClownDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('clown-dancer').append('<img src="http://www.pngmart.com/files/3/Creepy-Transparent-Background.png">');
}

ClownDancer.prototype = Object.create(Dancer.prototype);
ClownDancer.prototype.constructor = ClownDancer;

ClownDancer.prototype.step = function(timeBetweenSteps) {
    Dancer.prototype.step.call(this, timeBetweenSteps);
    //$('span').append('<img src="...."')
    //console.log($(this))
    //console.log(this.$node)
    $('.clown-dancer').toggle( "bounce", { times: 3 }, "slow" )
    //this.$node.effect('shake');   
};

