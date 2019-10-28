const { getUser, getPosts, getComments } = require('./db');

// with callbacks

getUser(1, (error, user) => {
    if(error) return console.log(error);

    getPosts(user.id, (error, posts) => {
        if(error) return console.log(error);

        getComments(posts[0].id, (error, comments) => {
            if(error) return console.log(error);

            console.log(comments);
        })
    })
})

//with promises

getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => getComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(error => console.error(error));