function challengeBanner(n) {
    return "######### Challenge " + n + " ######### " 
}
//     console.log(`"######### Challenge  ${n * 2}  ######### " `)
// 



console.log(challengeBanner(1))
let num = 1;
while (num <= 5){
    console.log(num);
    num = num + 1;
}



console.log(challengeBanner(2))
function oneToWhatever(x){
    let count = 1
    while (count <= x){
        console.log(count);
        count = count + 1; 
}}
oneToWhatever(6);



console.log(challengeBanner(3))
function numberToNumber(num1, num2){
    let count = num1
    while(num2 >= count){
        console.log(count);
        count = count + 1
    }
}
numberToNumber(3,9);
numberToNumber(-2,1)
// figure a way to determine smaller number first always



console.log(challengeBanner(4))
function evenOdd(parameter){
    let number = 1

    while(parameter >= number){
        if (number % 2 == 0){
            console.log(number + ' Even')
        }
        else { console.log(number + ' Odd')}
        number = number + 1
    }
}
evenOdd(5);


console.log(challengeBanner(5))
function onlyEvenNumbers(parameter){
    let number = 1
    while (number <= parameter){
        if(number % 2 == 0){
            console.log(number)
        }
        number =  number + 1;
    }
}
onlyEvenNumbers(11)




console.log(challengeBanner(6))
function tenToOne(){
    let count = 10
    while (count >= 1){
        console.log(count);
        count = count - 1; 
}}
tenToOne()



console.log(challengeBanner(7))
function tenToOneBlastOff(){
    let count = 10
    while (count >= 1){
        console.log(count);
        count = count - 1;       
}
console.log("Blast off!")
}
tenToOneBlastOff()




console.log(challengeBanner(8))
function descendBy3(parameter){
    let count = parameter
    while (count >= 1){
        console.log(count);
        count = count - 3; 
}
}
descendBy3(20)



console.log(challengeBanner(9))
function hello7Time(){
    let count = 1;
    while (count <= 7){
        console.log(count + '. Hello!')
        count = count + 1
    }
}
hello7Time()



console.log(challengeBanner(10))
function plusOne7Time(){
    let count = 1;
    while (count <= 7){
        console.log(count  + ' plus one = ')
        count = count + 1
    }
}
plusOne7Time()


console.log(challengeBanner(11))
function stringNum(parameter1, parameter2){
    let count = 1
    while (count <= parameter2 ){
    console.log(parameter1)
    count = count +1;
    }
}
stringNum("Good-bye", 4)
stringNum("Get out!", 6)




console.log(challengeBanner(12))
function printCharacters(str){
    let i = 0;
    while (i < str.length) {
        const currentChar = str[i];
        console.log(currentChar);
        i = i + 1
    }
}
printCharacters('think')

// for loop challenge 12
// function stringSplit(parameter){
//     for (let i in parameter) {
//         console.log(parameter[i]);
//     }
// }
// stringSplit('think')





console.log(challengeBanner(13))
function printEveryOtherCharacter(str) {
    let i = 1;
    while (i < str.length) {
        if(i % 2 ===1){
        const currentChar = str[i];
        console.log(currentChar);
        i = i + 2
        }
    }
}
printEveryOtherCharacter('Nobody')

// for loop version
// function everyOtherCharacter(parameter){
//     for(let i in parameter){
//         if (i % 2 !== 0)
//         console.log(parameter[i] );
//     }
// }
// everyOtherCharacter('Nobody')




console.log(challengeBanner(14))
function printCharactersBackwards(str) {
    let i = str.length - 1;
    while (i >= 0) {
        const currentChar = str[i];
        console.log(currentChar);
        i = i - 1
    }
}
printCharactersBackwards('Mesuara')





console.log(challengeBanner(15))

function FizzBuzz(parameter){
    let num = 1
    while(parameter >= num){
        if (num % 3 === 0 && num % 5 !==0) {
        console.log('Fizz');
        }
        
        if (num % 5 === 0 && num % 3 !== 0) {
        console.log('Buzz');
        }
        
        if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz');
        }
        
        if (num % 5 !== 0 && num % 3 !== 0) {
        console.log(num);
        }
        
        num = num + 1
    }
}
FizzBuzz(15);





console.log(challengeBanner(16))
function fibonacci(end){
    let current = 1;
    let previous =  1;
    console.log(current)
    while (current <= end){
        console.log(current)
        const temp = current;
        current = current + previous;
        previous = temp;
    }
}
fibonacci(21)