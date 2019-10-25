const userLeft = true;
const userWatchingCatMeme = false;

// function watchTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name: 'User left',
//             message: ':('
//         });
//     }else if(userWatchingCatMeme){
//         errorCallback({
//             name: 'User Watching Car Meme',
//             message: 'WebDevSimplified < Cat'
//         });
//     }else{
//         callback('Thumbs up and Subscribe');
//     }
// }

// watchTutorialCallback(
//     (message) => {
//         console.log(`Success: ${message}`);
//     },
//     (message) => {
//         console.log(`${error.name} ${error.message}`);
//     }
// );

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User left',
                message: ':('
            });
        }else if(userWatchingCatMeme){
            reject({
                name: 'User Watching Car Meme',
                message: 'WebDevSimplified < Cat'
            });
        }else{
            resolve('Thumbs up and Subscribe');
        }
    })    
}

watchTutorialPromise().then(
    (message) => {
        console.log(`Success: ${message}`);
    }
).catch(
    (error) => {
        console.log(`${error.name} ${error.message}`);
    }
);
