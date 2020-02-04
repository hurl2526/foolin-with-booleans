/********************
 * YOUR CODE BELOW! *
 ********************/

const iGetTheJoke = true;
const havingFun = true;
const learning = true;
const killingIt = learning && havingFun;

function returnFalse() {
  return false;
}

function isOpposite(thing) {
  return !thing;
}

function both(thing1, thing2) {
  return thing1 && thing2;
}

function either(thing1, thing2) {
  return thing1 || thing2;
}

function firstOnly(thing1, thing2) {
  return thing1 && !thing2;
}

function secondOnly(thing1, thing2) {
  return !thing1 && thing2;
}

function neither(thing1, thing2) {
  return !thing1 && !thing2;
}

function itsComplicated(thing1, thing2, thing3) {
  return !thing1 || thing2 && thing3
}



/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof iGetTheJoke === 'undefined') {
  iGetTheJoke = undefined;
}

if (typeof havingFun === 'undefined') {
  havingFun = undefined;
}

if (typeof learning === 'undefined') {
  learning = undefined;
}

if (typeof killingIt === 'undefined') {
  killingIt = undefined;
}

if (typeof isOpposite === 'undefined') {
  isOpposite = undefined;
}

if (typeof returnFalse === 'undefined') {
  returnFalse = undefined;
}

if (typeof both === 'undefined') {
  both = undefined;
}

if (typeof either === 'undefined') {
  either = undefined;
}

if (typeof firstOnly === 'undefined') {
  firstOnly = undefined;
}

if (typeof secondOnly === 'undefined') {
  secondOnly = undefined;
}

if (typeof neither === 'undefined') {
  neither = undefined;
}

if (typeof itsComplicated === 'undefined') {
  itsComplicated = undefined;
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  firstOnly,
  secondOnly,
  neither,
  itsComplicated,
}