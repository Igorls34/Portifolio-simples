document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("h1");
    let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let index = 0;

    setInterval(() => {
        header.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 500); // Troca a cor a cada 500ms
});