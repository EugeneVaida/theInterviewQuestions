const array = [1, 2, 3, 4, 5];

// function multBy(arr, n){
//     return arr.map((i) =>{
//         return i * n;
//     });
// }

Array.prototype.multBy = function(n) {
    return this.map((i) => {
        return i * n
    })
}

// console.log(multBy(array, 5));

console.log(array.multBy(2));