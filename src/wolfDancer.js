var WolfDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('wolf-dancer').append('<img src="https://www.clipartmax.com/png/small/34-349185_zombie-clipart-werewolf-werewolf-clipart.png">');
}

WolfDancer.prototype = Object.create(Dancer.prototype);
WolfDancer.prototype.constructor = WolfDancer;

WolfDancer.prototype.step = function(timeBetweenSteps) {
    Dancer.prototype.step.call(this, timeBetweenSteps);
    //$('span').append('<img src="...."')
    //console.log($(this))
    //console.log(this.$node)
    $('.wolf-dancer').toggle( "puff", { times: 1 }, "slow" )
    //this.$node.effect('shake');   
};
