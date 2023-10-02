
// ex 1 | Compare two numbers

// const martin = [76,64,81,57,94];
// const thomas = [85,49,81,72,55];
// const klaus = [65,91,84,67,85];
// const maria = [93,70,81,64,84];
// const david = [81,99,71,100,69];

// const calcAvgGrades = (arr) => {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum/arr.length;
// };

// let average = calcAvgGrades(martin);
// let averageGrade;

//  if ( average < 60) {
//     averageGrade = 'F';
//     console.log(averageGrade);
//  } else if ( average < 70) {
//     averageGrade = 'D';
//     console.log(averageGrade);
//  } else if ( average < 80) {
//     averageGrade = 'C';
//     console.log(averageGrade);
//  } else if (average < 90) {
//     averageGrade = 'B';
//     console.log(averageGrade);
//  } else if (average < 100) {
//     averageGrade = 'A';
//     console.log(averageGrade);
//  } else {
//     averageGrade = 'E';
//     console.log(averageGrade);
// };

// const classGrades = [74.4, 68.4, 78.4, 78.4, 84];

// const getAvgGrades = (numbers) => {
//     let sum1 = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum1 += numbers[i];
//     }
//     return sum1/numbers.length;
// };

// let averageClass = getAvgGrades(classGrades);
//  if ( averageClass < 60) {
//     console.log('F');
//  } else if ( averageClass < 70) {
//     console.log('D');
//  } else if ( averageClass < 80) {
//     console.log('C');
//  } else if (averageClass < 90) {
//     console.log('B');
//  } else if (averageClass < 100) {
//     console.log('A');
//  } else {
//     console.log('E');
// };

// ex 2 | FizzBuzz


for ( let i = 1; i < 100; i++) {
    if ( i % 5 === 0 && i % 3 === 0 ) {
        console.log(`FizzBuzz`);
    } else if ( i % 5 === 0 ) {
        console.log(`Buzz`);
    } else if ( i % 3 === 0) {
        console.log(`Fizz`);
    } else {
        console.log(i);
    }
}