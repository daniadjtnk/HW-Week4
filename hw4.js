//100 nilai random (1 sampai 50) pada 1 array
const numbers = []

for(let i = 0; i < 100; i++){
    const randomNumbers = Math.floor(Math.random()*50)+1
    numbers.push(randomNumbers)
}

console.log(numbers)

/*Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan
nilai baru pada array*/

const evenNumbers = []
const oddNumbers = []

for(let i=0; i < numbers.length; i++){
    if(i % 2 === 0){
        evenNumbers.push(numbers[i])
    }else{
        oddNumbers.push(numbers[i])
    }
}

console.log("Even Numbers Array:", evenNumbers)
console.log("Odd Numbers Array:", oddNumbers)

// Nilai minimum di array ganjil & genap
function findMin(arr){
    let minValue = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < minValue){
            minValue = arr[i]
        }
    }
    return minValue;
}

let minEven = findMin(evenNumbers)
let minOdd = findMin(oddNumbers)


console.log("Minimum value in array of even numbers:", minEven)
console.log("Minimum value in array of odd numbers:", minOdd)


// Nilai maximum di array ganjil & genap
function findMax(arr){
    let maxValue = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maxValue){
            maxValue = arr[i]
        }
    }
    return maxValue;
}

let maxEven = findMax(evenNumbers)
let maxOdd = findMax(oddNumbers)


console.log("Maximum value in array of even numbers:", maxEven)
console.log("Maximum value in array of odd numbers:", maxOdd)


// total nilai di array genap dan ganjil
function findtotal(arr){
    let total = arr[0]
    for (let i = 0; i < arr.length; i++){
         total += arr[i]
    }
    return total;
}
let totalEven = findtotal(evenNumbers)
console.log("total value in array of even numbers:", totalEven)

let totalOdd = findtotal(oddNumbers)
console.log("total value in array of odd numbers:", totalOdd)

//Rata rata array ganjil & genap
function findaverage(arr){
    let total = 0
    for (let i = 0; i < arr.length; i++){
         total += arr[i]
    }
    const average = total / arr.length
    return average;
}
let averageEven = findaverage(evenNumbers)
console.log("The average value in array of even numbers:", averageEven)

let averageOdd = findaverage(oddNumbers)
console.log("The average value in array of odd numbers:", averageOdd)

// Perbandingan
function comparisonMin(arr1, arr2){
    let comparisonResultMin = arr1 < arr2 ? "The lowest value (Min) is lower in an Even array": arr1 > arr2 ? "The lowest value (Min) is lower in an Odd array" : "The lowest value (Min) have the same value"
    return comparisonResultMin;
}

let comparisonResultMin = comparisonMin(minEven,minOdd)
console.log(comparisonResultMin)

function comparisonMax(arr1, arr2){
    let comparisonResultMax = arr1 > arr2 ? "The highest value (Max) is greater in an Even array" : arr1 < arr2 ? "The highest value (Max) is greater in an Odd array" : "The highest value (Max) have the same value";
    return comparisonResultMax;
}

let comparisonResultMax = comparisonMax(maxEven,maxOdd)
console.log(comparisonResultMax)

function comparisonTotal(arr1, arr2){
    let comparisonResultTotal = arr1 === arr2 ? "The totals in the Even and Odd arrays have the same value" : "The total in the Even and Odd arrays haven't the same value"
    return comparisonResultTotal
}

let comparisonResultTotal = comparisonTotal (totalEven,totalOdd)
console.log(comparisonResultTotal)

function comparisonAverage(arr1, arr2){
    let comparisonResultAverage = arr1 > arr2 ? "The Average value is greater in the Even array" : arr1 < arr2 ? "The Average value is greater in the Odd array" : "The Average value have the same value";
    return comparisonResultAverage;
}

let comparisonResultAverage = comparisonAverage(averageEven,averageOdd)
console.log(comparisonResultAverage)

