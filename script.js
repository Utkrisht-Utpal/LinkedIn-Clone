document.getElementById("button").addEventListener("click", () => {
    let box = document.getElementById("h2");
    box.style.backgroundColor = "blue";
    box.style.borderColor = "blue"
    box.innerText = "Changed!";
});