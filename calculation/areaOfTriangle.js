// JavaScript Program to Calculate the Area of a Triangle
/*
 If you know the base and height of a triangle, you can find the area using the formula:
 area = (base * height) / 2 
 */
//  Calculation Of Tringle Area



const baseValue = 4;
const heightValue = 6;

const areaValue = (baseValue * heightValue) / 2;

console.log(`The area of the tringle is ${areaValue}`);



/* If you know all the sides of a triangle, you can find the area using Herons' formula. If a, b and c are the three sides of a triangle, then

s = (a+b+c)/2
area = √(s(s-a)*(s-b)*(s-c))

*/


const side1 = parseInt(3);
const side2 = parseInt(4);
const side3 = parseInt(5);

const s = (side1 + side2 + side3) / 2;

const area = Math.sqrt(
    s * (s-side1) * (s-side2) * (s-side3)
);

console.log(`The area of the triangle is: ${area}`);
