
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
let btn = document.querySelector('.btn').addEventListener('click', knowWeather);
function knowWeather(){
    let temp = Math.floor(Math.random()*40) -25;
if (temp <-25){
    Swal.fire({
        title: 'It is freezing outside.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_1280.jpg)',
        // imageUrl: 'https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_1280.jpg',
        // backgroundHeight: 1500,
        // ibackgroundWidth: 1200,
      })
    // console.log("It is freezing outside");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "It is freezing outside";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_1280.jpg');
} else if (temp <-15) {
    Swal.fire({
        title: 'Dress warmly.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2016/01/08/06/13/woman-1127201_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    // console.log("Dress warmly");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "Dress warmly";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/01/08/06/13/woman-1127201_1280.jpg');
} else if (temp <-5) {
    Swal.fire({
        title: 'It is freezing outside.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    Swal.fire({
        title: 'It is getting colder.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2018/01/03/05/03/nature-3057614_1280.jpg)',
        // backgroundHeight: 1500,
        // ibackgroundWidth: 1200,
      })
    // console.log("It is getting colder");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "It is getting colder";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/01/03/05/03/nature-3057614_1280.jpg');
} else if (temp >5) {
    Swal.fire({
        title: 'At least it is above zero.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2019/10/31/06/58/path-4591121_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    // console.log("At least it is above zero");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "At least it is above zero";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2019/10/31/06/58/path-4591121_1280.jpg');
} else if (temp >15) {
    Swal.fire({
        title: 'Not bad.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    // console.log("Not bad");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "Not bad";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_1280.jpg');
} else if (temp >25) {
    Swal.fire({
        title: 'Take sunglasses.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2020/03/19/04/58/coconut-trees-4946270_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
        
      })
    // console.log("Take sunglasses");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "Take sunglasses";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2020/03/19/04/58/coconut-trees-4946270_1280.jpg');
} else if (temp >35) {
    Swal.fire({
        title: 'Be sure to wear sunscreen.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    // console.log("Be sure to wear sunscreen");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "Be sure to wear sunscreen";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg');
} else {
    Swal.fire({
        title: 'You better stay home.',
        width: '100em',
        height: 800,
        padding: '5em',
        color: 'white',
        // timer: 2000,
        background: '#fff url(https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg)',
        // backgroundHeight: 1500,
        // backgroundWidth: 1200,
      })
    // console.log("You better stay home");
    // let h1el = document.getElementById('h1');
    // h1el.innerHTML = "You better stay home";
    // let background = document.querySelector('img');
    // background.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg');
}

}


