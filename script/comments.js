


const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=50')
        .then(res => res.json())
        .then(data => showComments(data))
}

const showComments = (comments) => {
    console.log(comments);
}

getComments();