let num1: number = 1;
let num2: number = 1;

console.log(num1); 
console.log(num2); 

for (let i = 3; i <= 10; i++) {
    let num3: number = num1 + num2; 
    console.log(num3); 

    num1 = num2;
    num2 = num3;
}
