const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recordered');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recordered');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recordered');
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) =>{
    console.log(message);
})