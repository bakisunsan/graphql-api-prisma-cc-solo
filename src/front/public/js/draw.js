// TODO
// $ browserify src/front/public/js/draw.js -o src/front/public/js/bundle.js
// Error: Cannot find module 'async_hooks' from '/Users/kobayashitomoyuki/ghq/github.com/bakisunsan/cc13-project.solo-api/node_modules/@prisma/client/runtime'
//const { PrismaClient } = require('@prisma/client')
//const prisma = new PrismaClient()

console.log('foo')

let list = document.getElementById('list')
let listResult = document.getElementById('listResult')
list.addEventListener('click', () => {
    // access to http://localhost:4010/localhost:4000
    // CORS problem?
    fetch("http:/localhost:4000").then(response => {
            console.log(response)
            response.json()
        })
        .then(data => {
            console.log(data)
            listResult.innerHTML = data;
        });

    /*
    prisma.post.findMany().then(feeds => {
        listResult.innerHTML = JSON.stringify(feeds)
        console.log(feeds)
    })
    */
})

let post = document.getElementById('post')
post.addEventListener('click', () => {
    // get parameter from html
    let text = document.querySelector(`#postfeed>input[name="content"]`)
    let feeling = document.querySelector(`#postfeed>input[name="feeling"]`)
    let url = document.querySelector(`#postfeed>input[name="imageUrl"]`)
})