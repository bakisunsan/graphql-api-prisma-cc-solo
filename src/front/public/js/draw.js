let list = document.getElementById('list')
let listResult = document.getElementById('listResult')
list.addEventListener('click', () => {
    // access to http://localhost:4010/localhost:4000
    // CORS problem?
    fetch("http:/localhost:4000", { mode: "cors" }).then(response => {
            console.log("CORS?????, ", response)
            response.json()
        })
        .then(data => {
            console.log(data)
            listResult.innerHTML = data;
        });
})

let post = document.getElementById('post')
post.addEventListener('click', () => {
    // get parameter from html
    let text = document.querySelector(`#postfeed>input[name="content"]`)
    let feeling = document.querySelector(`#postfeed>input[name="feeling"]`)
    let url = document.querySelector(`#postfeed>input[name="imageUrl"]`)
})