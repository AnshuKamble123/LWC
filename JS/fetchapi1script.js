
// https://api.thecatapi.com/v1/images/search

async function loadRandomCat(){
    let response = await fetch("https://api.thecatapi.com/v1/images/search");
    let data = await response.json();
    console.log("data", data);
    const IMAGE_URL = data[0].url;
    console.log("Imageurl". IMAGE_URL);
    let element = document.querySelector(".catimage");
    element.src = IMAGE_URL;
}

loadRandomCat();