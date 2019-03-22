function add (a,b){
    return a+b;
}

console.log(add(3, 1));

var toAdd = [9,5];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Pako'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Ondra', 25];
var person2 = ['Jana', 25];

function greet(name, age){
    console.log('Hi '+ name + ', you are ' + age);
}
greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Ondra', ...names]

final.forEach(function(name){
    console.log('Hi '+ name);
});