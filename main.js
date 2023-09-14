
let posts = [];

function fun(event) {
    event.preventDefault();
    let tweet = document.getElementById("tweetbox").value;

    function createPost(value) {
        return new Promise((resolve, reject) => {
            if (value.length > 0) {
                posts.push(value);
                resolve(value); // Resolve with the value
            } else {
                reject("No content to tweet");
            }
        });
    }

    function updateLastUserActivityTime() {
        return new Promise((resolve, reject) => {
            let time = new Date();
            resolve(time); // Resolve with the time
        });
    }

    Promise.all([createPost(tweet), updateLastUserActivityTime()])
        .then((values) => {
            // let tweetValue = values[0]; // Get the resolved tweet value
            // let time = values[1]; // Get the resolved time
            console.log(values);
            // console.log("Last User Activity Time:", time);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
