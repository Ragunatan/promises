let posts =[ {title:'post 1'},{title:'post two'}];

function getPosts(){
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title)
        })
    }, 1000);
}
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post)
            let answer = true;
            if(answer){
                resolve();
            }
            else{
                reject('Error in function')
            }

        }, 2000);
       

    })
   
}

// createPost({title:'post three'})
//     .then(getPosts)

let promise1 = Promise.resolve('hello');
let promise2  = Promise.resolve(10);
let promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve , 1000,'goodbuy');
})

Promise.all(([promise1,promise2,promise3])).then(values => console.log(values));