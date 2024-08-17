// javascript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://zv5n4wesugjvg56qpxi4qtplp40zhzke.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` views: ${data}`;
}
updateCounter();