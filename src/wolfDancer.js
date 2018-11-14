var ZombieDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('zombie-dancer').append('<img src="http://pngimg.com/uploads/zombie/zombie_PNG22.png">');
}

ZombieDancer.prototype = Object.create(Dancer.prototype);
ZombieDancer.prototype.constructor = ZombieDancer;

ZombieDancer.prototype.step = function(timeBetweenSteps) {
    Dancer.prototype.step.call(this, timeBetweenSteps);
    //$('span').append('<img src="...."')
    //console.log($(this))
    //console.log(this.$node)
    $('.zombie-dancer').toggle( "puff", { times: 1 }, "slow" )
    //this.$node.effect('shake');   
};
