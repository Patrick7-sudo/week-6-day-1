import { sum } from "./index.js"

const actual = sum(2, 1);
const expected = 3;

if(actual != expected){
    throw new error(`${actual} does not equal ${expected}`);
} else{
    console.log(`${actual} is equal to ${expected}`)
};