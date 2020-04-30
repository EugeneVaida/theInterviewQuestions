const fetch = require('node-fetch');

// with callbacks

// getUser(1, (error, user) => {
//     if(error) return console.log(error);

//     getPosts(user.id, (error, posts) => {
//         if(error) return console.log(error);

//         getComments(posts[0].id, (error, comments) => {
//             if(error) return console.log(error);

//             console.log(comments);
//         })
//     })
// })

//with promises

// getUser(1)
//     .then(user => getPosts(user.id))
//     .then(posts => getComments(posts[0].id))
//     .then(comments => console.log(comments))
//     .catch(error => console.error(error));


class DataService{
    constructor(url){
        this.url = url;
    }
    async getUser(id){
        try{
            let response = await fetch(`${this.url}/users/${id}`);
            let data = await response.json();

            return data;
        }
        catch(error){
            throw new Error('Error of getting user`s data');
        }
    }

    async getPosts(userId){
        try{
            let response = await fetch(`${this.url}/posts?userId=${userId}`);
            let data = await response.json();

            return data;
        }
        catch(error){
            throw new Error('Error of getting user`s posts data');
        }
    }

    async getComments(postId){
        try{
            let response = await fetch(`${this.url}/comments?postId=${postId}`);
            let data = await response.json();

            return data;
        }
        catch(error){
            throw new Error('Error of getting comments user`s post');
        }
    }
}

(async () => {
    let dataService = new DataService('https://jsonplaceholder.typicode.com');
    try{
        let user = await dataService.getUser(1);
        let posts = await dataService.getPosts(user.id);
        let comments = await dataService.getComments(posts[0].id);

        console.log(comments);
    }
    catch(error){
        console.error(error);
    }
})();


