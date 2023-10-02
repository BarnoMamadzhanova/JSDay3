
// ex 1 | Highest value in an array

let arr = [1, 7, -3, 9];

function findMax(){
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
      }
      console.log(max);
}
 findMax(arr);