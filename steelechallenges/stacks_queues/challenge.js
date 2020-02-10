// //Array implementation of a stack using push/pop
// //STACK = LAST IN FIRST OUT
// const stack = [];

// stack.push({"Willow Rosenberg": "A"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" }]

// stack.push({"Xander Harris": "C"});
// //[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
// console.log(stack);

// stack.push({"Cordelia Chase": "B+"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

// stack.push({"Buffy Summers": "B"});
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]

// //REMOVAL
// const firstOut = stack.pop();
// // { "Buffy Summers": "B" }
// console.log(stack);
// //[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

// const secondOut = stack.pop();
// //{"Cordelia Chase": "B+"}
// console.log(stack);
// //[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]

//Array implementation of a stack using shift/unshift
//STACK = LAST IN FIRST OUT
const stack = [];

stack.unshift({"Willow Rosenberg": "A"});
console.log(stack);
//[{ "Willow Rosenberg": "A" }]

stack.unshift({"Xander Harris": "C"});
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]
console.log(stack);

stack.unshift({"Cordelia Chase": "B+"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

stack.unshift({"Buffy Summers": "B"});
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" },{ "Buffy Summers": "B" }]

//REMOVAL
const firstOut = stack.shift();
// { "Buffy Summers": "B" }
console.log(stack);
//[{ "Willow Rosenberg": "A" },{ "Xander Harris": "C" },{ "Cordelia Chase": "B+" }]

const secondOut = stack.shift();
//{"Cordelia Chase": "B+"}
console.log(stack);
//[{ "Willow Rosenberg": "A" }, { "Xander Harris": "C" }]

