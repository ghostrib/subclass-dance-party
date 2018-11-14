var ClownDancer = function(top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('clown-dancer').append('<img src="https://media.istockphoto.com/vectors/scary-cartoon-clown-illustration-blackwork-adult-flesh-tattoo-concept-vector-id855494040">');
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

