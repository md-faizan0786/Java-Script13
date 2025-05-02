// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=> {
//     // console.log("button was clicked");
//     let fact = await getfacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });



// let url = "https://catfact.ninja/fact";


// async function getfacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//         return res.data.fact;

//     //     let res2 = await fetch(url);
//     // let data2 = await res2.json();
//     // console.log(data2.fact);

//     } catch (e) {
//         console.log("error - ", e);
//     }
    
//     console.log("bye");
//     return "No fact found";
// }

// getfacts();


let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=> {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});



    async function getImage() {
        try {
            let res = await axios.get(url2);
            console.log(res);
            return res.data.message;
    
        } catch (e) {
            console.log("error - ", e);
            return "/";
        }
    }
    
// getImage();





//Header 

const url = "https://icanhazdadjoke.com/";

async function getjokes() {
    try {
        const config = { Headers: { Accept: "application/json"} };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
    
}
