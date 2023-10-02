
// ex 1 | Highest value in an array

// let arr = [1, 7, -3, 9];

// function findMax(){
//     let max = -Infinity;
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//           max = arr[i];
//         }
//       }
//       console.log(max);
// }
//  findMax(arr);


// ex 2 | Temperature v2.0


let temp = Math.floor(Math.random()*40) -25;

if (temp <-25){
    console.log( "It is freezing outside");
} else if (temp <-15) {
    console.log("Dress warmly");
} else if (temp <-5) {
    console.log("It is getting colder");
} else if (temp >5) {
    console.log("At least it is above zero");
} else if (temp >15) {
    console.log("Not bad");
} else if (temp >25) {
    console.log("Take sunglasses");
} else if (temp >35) {
    console.log("Be sure to wear sunscreen");
} else {
    console.log("You better stay home");
}
