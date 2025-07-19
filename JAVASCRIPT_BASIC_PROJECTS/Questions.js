// console.log("debjit", "love to karate")
// import
// console.log(45 * 2 - 10)


// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth() + 1)


// const fname = "debjit"
// const lname = " chatterjee"
// console.log(fname + lname)


// let a = 5;
// console.log(a)
// a++
// console.log(a)


// let a= 5
// console.log(a++) // prints 5 and then increase to 6
// console.log(++a) // increase to 7 then prints it


// console.log(12**2) //144
// console.log(2**12) //4096


// isNull = true
// console.log(typeof(isNull))


// console.log(100/0)


// let na = "debjit";
// console.log(na);
//  na = "sovan";
// console.log(na);


// console.log(typeof(null)) // object
// const str = "25"
// console.log(typeof str)
// const isTrue = true
// console.log(typeof isTrue)
// const a = undefined
// console.log(typeof a)



// const arr = [3,6,4,3,2,5,6,9]
// console.log(arr)
// arr = [5,2,5,7,8,8,5,4,3,2,9]
// console.log(arr)        //will throw a error because the arr is a constant type array.


// for(i=1;i<=50;i++){
//     console.log(i)
// }


// let num = 1
// let sum = 0
// while(num<=10){
//     sum = sum + num  
//     num++
// }
// console.log(sum)


// //For...of Loop for print each character in a str
// let str = "Debjit"
// for(let char of str){
//     console.log(char)
// }


// for(i=1; i<=20; i++){
//     if(i%2===0){
//         continue
//     }
//     else console.log((i))
// }


// let fact = 1                       //Factorial
// for(i=5; i>=1; i--){
//     fact = fact * i
// }
// console.log(fact)


// let num = 1
// for(i=0; i<3; i++){
    
//     arr = []
//     for(j=0; j<3; j++){               //1 2 3
//         arr.push(num)                 //4 5 6
//         num++                         //7 8 9
//     }
//     console.log(...arr)
// }



// let arr = [3,4,6,7];         //Reverse an array

// for(i=0; i<Math.floor(arr.length/2); i++){
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1]
//     arr[arr.length - 1] = temp
// }
// console.log(arr)




//For...in Loop
// const obj = {
//     fname: "debjit",
//     lname: "chatterjee"
// };

// for (const key in obj){
//     console.log(key);
// }


// let arr = [4,5,9,7,34,6]                              //bubble sort.......
// for(i=0; i<arr.length - 1; i++){
//     for(j=0; j<arr.length - i - 1; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
// }
// }
// console.log(arr)