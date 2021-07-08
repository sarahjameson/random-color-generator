const btn = document.querySelector("button");
const title = document.querySelector("h1");

btn.addEventListener("click", () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    title.innerText = newColor;
});

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r < 150 & g < 150 & b < 150) {
        title.style.color = "white";
    } else {
        title.style.color = "black";
    }
    return `rgb(${r},${g},${b})`
} 