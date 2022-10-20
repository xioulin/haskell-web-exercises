// fetch('https://api.github.com/users')
//     .then(response => console.log(response))
//     .catch(error => console.error(error));
//
//
//
// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));
//
//
// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//     })
//     .catch(function(error) {
//         // handle errors
//     });


// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( user => {
//             // do something with each user object...
//             console.log(user);
//         });
//     });
// });

// fetch('https://api.github.com/users').then( response => {
//     response.json().then( users => {
//         users.forEach( userObj  => {
//             // do something with the username login
//             console.log(userObj.login);
//         });
//     });
// });

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach( userObj => {
            // do something with each username
            console.log(userObj.login);
        })
    })
    .catch(error => console.error(error));