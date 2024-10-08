// Task 1: Filter Even Numbers 
// Create an array of numbers. Write a program that uses a loop to filter out even 
// numbers and stores them in a new array. Then, display the new array. 

// for(var i = 0 ; i<=100 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }




// Task 2: Sum of Odd Numbers 
// Given an array of numbers, calculate the sum of all odd numbers using a loop and 
// display the result.
// var num = 0
// for(var i = 0 ; i<=100 ; i++){
//     if(i % 3 === 0 ){
//         num +=i
//     }
//     console.log(num);
    
// }




// Task 3: FizzBuzz 
// Write a program that prints numbers from 1 to 100. For multiples of 3, print "Fizz" 
// instead of the number. For multiples of 5, print "Buzz." For numbers that are 
// multiples of both 3 and 5, print "FizzBuzz."

// for (var i = 0 ; i<=100 ; i++){
//     if(i % 3 === 0){
//        console.log('fizz ' + i)
        
//     }
// }
// for (var i = 0 ; i<=100 ; i++){
//     if(i % 5 === 0){
//        console.log('buzz ' + i)
        
//     }
// }
// for (var i = 0 ; i<=100 ; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//        console.log('fizz buzz ' + i)
        
//     }
// }




// Task 4: Count Characters 
// Given an array of words (strings), write a program to count and display the total 
// number of characters (letters) in all the words combined.

// var arr =['A brown fox jumps on the lazy dog qickley']
// console.log(arr[0]);
// console.log(arr[0].length-1);



// ---------------------------------------------------------------------------------------------
// Task 5: Find Maximum Length Word 
// Create an array of words (strings). Write a program to find and display the word 
// with the maximum length from the array. Use a loop and an if-else statement.

// var arr =['A brown fox jumps on the lazy dog quickley']
// var letter = 0
// for(var i = 0 ; i<arr.length ; i++){
//     if(arr[i].length >=4){
//         console.log(letter);
        
//     }

// }
// ---------------------------------------------------------------------------------------------




// Task 6: Remove Short Words 
// Given an array of words (strings), write a program to remove words with fewer 
// than three characters from the array using a loop and if-else statements.








// Task 7: Multiplication table 
// Take a number from the user and create a multiplication table for the given 
// number N. Use a loop to display a table from 1 to 10 for that number.

// var N = 0
// var table = prompt('which table number do you want?')
// for(var i = 1 ; i<=10 ; i++){
//     if( table ){
//         console.log(table + ' x ' + i + ' = ' + table*i);
        
//     }
// }



// -------------------------------------------------------------------------------------------------------
// Task 8: Array Sorting 
// Create an array of numbers. Write a program to sort the numbers in ascending 
// order using a loop and if-else statements. Display the sorted array.

// var arr =[2,7,1,6,98,35,79,90,34,12,76,84,54,78,0,25,32,76,32,55,71,42]

// for( var i = 0 ; i<=arr.length-1 ; i++){
//     if(arr === i){
//         console.log(arr);
        
//     }
    
// }
// -------------------------------------------------------------------------------------------------------

// Task 9: Search and Replace 
// Create an array of strings. Write a program that allows the user to search for a 
// specific word within the array. If the word is found, replace it with a new word 
// provided by the user. Display the updated array. use loop and if-else statement. 




// var myStr = "My name is Ruhama Malik. My favourite color is Black. My sister name is Irma Malik"


// console.log(myStr.slice(0, 18) + "Malik" +   myStr.slice(22) );


// for(var i=0; i < myStr.length; i++){

//     if(myStr.slice(i, i+5) === "Malik"){
//       myStr=   myStr.slice(0, i) + "Gull" +   myStr.slice(i + 5)
//     }

// }

// console.log(myStr);

var arr ='a quick brown fox jumps over a lazy dog , the fox was trying to snatch food'

console.log(arr.slice(0,14) + 'tiger' + arr.slice(17));
