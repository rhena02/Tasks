function myFunc(data) {
    let data = "Data from function" //local variable
    return data //sends data out from the function
}

function getName(sName) {
    return `My name is ${sName}`
}

function sum(a, b) {
    a = Number(a)
    b = Number(b)
    let sum = a + b
    return sum
}
sum (45, 78) //invocation
console.log(`Sum of ${a} and ${b} is ${sum}`); //interpoltion: it allows u pass statements as a string

const showData = () => {
    console.log("Data from arrow function");
    
} //Arrow function



    
