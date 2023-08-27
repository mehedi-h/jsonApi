function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => postsData(data))
}

function postsData (posts) {
    for (const post of posts) {
        console.log(post)
    }
}

loadPosts()

