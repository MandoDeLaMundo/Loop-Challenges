function odds(){
    for (var i = 1; i <= 20; i ++){
        if (i % 2 == 1){
            console.log(i)
        }
    }
}

function multiplesThree(){
    for (var i = 100; i >= 0; i --){
        if (i % 3 == 0){
            console.log(i)
        }
    }
}

function sequence(){
    for (i = 4; i >= -3.5; i -= 1.5){
        console.log(i);
        }
}
// console.log values in [4, 2.5, 1, -0.5, -2, -3.5]
// code got stuck in infite loop
// while loop written wrong
// wrote (i -1.5); needed to be (i -= 1.5)

sum = 0;
function sigma(){
    for (var i = 1; i <= 100; i ++){
        sum += i;
    }
    console.log(sum);
}
//Write code that will add all of the values from 1-100 onto some variable sum 
//and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
// Don't forget (;)

var product = 1;
function factorial(){
    for (var i = 1; i <= 12; i ++){
        product *= i;
    }
    console.log(product);
}
//Write code that will multiply all of the values from 1-12 onto some variable product 
//and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
// Don't over think the instructions.
