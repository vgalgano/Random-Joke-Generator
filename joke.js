const jokeContainer = document.getElementById("joke");
const JokeCat = document.getElementById("category");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        jokeContainer.textContent = `${item.joke}`;
        JokeCat.textContent = `${item.category}`;
            })
         
    
}
btn.addEventListener("click", getJoke);
getJoke();