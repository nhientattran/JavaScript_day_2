// Excersie #1:
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crush"],
    tacos: "Anything not from Taco Bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function showFood() {
    for (let [key, value] of Object.entries(person3)){
        if (Array.isArray(value)){
            console.log(`${key}:`)
            value.forEach(value => console.log(value))
        } else{
            console.log(`${key}: ${value}`)
        }
    }
}
showFood()

// Exercise 2:
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () =>{
        console.log(`${this.name} turns ${this.age} years old in 2023`)
    }

    this.increaseAge = (num) =>{
        if (typeof num == 'number'){
            this.age += num
        }else {
            this.age += 1
        }console.log(`Sorry I'm wrong, ${this.name} actually turns ${this.age} years old in 2023`)
    }
}

let person1 = new Person('Anh', 28)
person1.printInfo()
let person2 = new Person('Nhien', 27)
person2.printInfo()
person2.increaseAge()
person2.increaseAge(3)

// Excercise 3:
function checkString(str){
    return new Promise((resolve) => {
        if (str.length > 10){
            resolve(true)
            console.log('Big Word')
        } else{
            console.log('Small Number')
        }
    })
}
checkString('This is the best IPhone ever')
checkString('Hi')

// Codewars 1:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    let splitStr = str.split("")
    let reverse1 = splitStr.reverse()
    let reverse2 = reverse1.join("")
    return reverse2
}
console.log(solution("Hello"))

// Codewars 2:
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3){
    let ave = (s1 + s2 +s3) / 3
    if (100 >= ave && ave >= 90){
        return 'A'
    } else if (90 >= ave && ave >= 80){
        return 'B'
    } else if (80 >= ave && ave >= 70){
        return 'C'
    } else if (70 >= ave && ave >= 60){
        return 'D'
    } else {
        return 'F'
    } 
}
console.log(getGrade(95,92,94))