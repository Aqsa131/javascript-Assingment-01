// Task 1: 
// Identify which of the following variable names are legal and 
// which are illegal: 
// a) myVariable --------------legal
// b) 123variable -------------illegal
// c) _special ----------------legal
// d) first name  -------------illegal
// e) 7eleven  ----------------illegal
// f) $price ------------------legal
// g) your-variable -----------legal



// Task 2:
// Assignment Operators  
// - Create a variable named total and initialize it to 10. 
// - Use the += operator to add 5 to total. 
// - Use the -= operator to subtract 3 from total. 
// - Use the *= operator to multiply total by 2. 
// - Use console.log() to display the final value of total.

// var total = 10
// console.log(total += 5);   15
// console.log(total -= 3);   12
// console.log(total *= 2);   24



// Task 3:   
// Prompt and Variables (Math): 
// Ask the user for two numbers using prompt and store them in variables.Then, 
// calculate and display the sum of those numbers.

// var num1 = +prompt('Type 1st number');
// var num2 = +prompt('Type 2nd number')
// console.log(num1 + num2);



// Task 4:   
// String Concatenation: 
// Create variables for a book title, author, and year of publication. Use string 
// concatenation to create a sentence that introduces the book. 
// For example, "The book 'Title' by Author was published in Year."

// var bookTitle = 'Tug of war'
// var author = 'Thomas janson'
// var publication = 1990
// console.log('The Book ' + bookTitle + ' by ' + author + ' was published in ' + publication );
// The Book Tug of war by Thomas janson was published in 1990



// Task 5: 
// Checking Even or Odd 
// - Create a program that prompts the user to enter a number. 
// - Use an if-else statement to check if the number is even or odd. 
// - Display a message indicating whether the number is even or odd.

// var num = +prompt('Enter any number to know if its even or odd')
// if(num % 2 === 0){
//     alert('Your given number is a EVEN number')
// }
// else{
//     alert('Your given number is a ODD number')
// }



// Task 6: Grade Calculation 
// Create a program that prompts the user to enter their exam score (out of 100). 
// Use if-else statements to determine the letter grade based on the - following 
// scale: - 90-100: A - 80-89: B - 70-79: C - 60-69: D - Below 60: F

// var score = +prompt('Type your Score to know your result')
// if(score >=90 && score<=100){
//     alert('Your grade is A')
// }
// else if( score >=80 && score <=89){
//     alert('Your grade is B')
// }
// else if( score >=70 && score <=79){
//     alert('Your grade is C')
// }
// else if( score >=60 && score <=69){
//     alert('Your grade is D')
// }
// else if (score <60 ){
//     alert ('You are FAIL')
// }
// else{
//     alert('Type valid number')
// }



// Task 7: Maximum of Three Numbers 
// Create a program that prompts the user to enter three numbers. 
// Use if-else statements to find and display the maximum of the three numbers.

// var num1 = +prompt('Enter first Number')
// var num2 = +prompt('Enter Second Number')
// var num3 = +prompt('Enter Third Number')
// if(num1 >= num2 && num1 >=num3){
//     alert('First Number is greater')
// }
// else if(num2 >= num1 && num2 >=num3){
//     alert('Second Number is greater')
// }
// else{
//     alert('Third Number is greater')
// }




// Task 8: Odd or Even Sum 
// Write a program that calculates the sum of all even numbers from 1 to 100 using 
// a loop and the post-increment operator. Display the sum. 

// var sum = 0
// for(var i = 0 ; i<=100 ; i++){
//     if(i % 2 === 0){
//         sum += i
//     }
//     console.log(sum);
    
// }




// Task 9: Output ? 
// a = ? , b= ? , c =? , result =? 
// 1) 
// var a=5;  b=3;  c=7;   
// console.log(a++  -  ++c +  b + ++c - b++ ); 6
            //  5    -  8  +   3 + 9  -  3
// console.log(a); 6
// console.log(b); 4
// console.log(c); 9

// 2) 
// var a=1;  b=2;  c=0;   
// console.log( ++a  -  --a +  ++c + c - a++ + --b);
//             //   2   -   1  +    1  + 1 - 1  +  1
// console.log(a); 2
// console.log(b); 1
// console.log(c); 1

// 3) 
// var a=2;  b=4;  c=6;   
// console.log(a++ - --b + c-- + b++ - ++c);
//             //  2  -  3  +  6  + 3   - 6
// console.log(a); 3
// console.log(b); 4
// console.log(c); 6

// 4) 
// var a=10;  b=5;  c=8;   
// console.log( ++a + --b - c++ - ++c + b--);
//             //   11 + 4   -  8  -  10 + 4
// console.log(a); 11
// console.log(b); 3
// console.log(c); 10

// 5) 
// var a= 3;  b=2;  c=1;   
// console.log(b-- - --a + ++c - a++ + ++b - a )
//             // 2   -  2  + 2   -  2  +  2  - 3
// console.log(a); 
// console.log(b); 
// console.log(c); 



// 6)
// var a=1;  b=5;  c=3;   
// console.log(++c + a-- - b++ + c-- - --a);  
//             // 4   + 1   - 5   +  4  -  -1
// console.log(a); -1
// console.log(b); 6
// console.log(c); 3


 
// 7) var a=7;  b=0  c=1;   result = ++c - a-- + --b + b++ - --c + c; 
// 8) var a=3;  b=4;  c=9;   result = --a + ++b + c-- - b++ + ++c - --c - --b; 
// 9) var a=6;  b=1;  c=3;   result = c++ - b + a-- - --c + b ; 
// 10) var a=10;  b=5;  c=8;   result = a + --b - c - ++c + b-- + a++ ; 
