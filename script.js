const images = [
    "./photos/memories/narodky.jpg",
    "./photos/memories/hm.jpg",
    "./photos/memories/videohovor.jpg"
];

// preload the other photos so MIX switches instantly
images.forEach(src => { new Image().src = src; });

let index = 0;
const photo = document.getElementById("photo");
const button = document.getElementById("change");

button.addEventListener("click", () => {
    index = (index + 1) % images.length;
    photo.src = images[index];
});

document.querySelectorAll(".ripple").forEach(el => {
    el.addEventListener("click", (e) => {
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        const circle = document.createElement("span");
        circle.className = "ripple-circle";
        circle.style.width = circle.style.height = size + "px";

        // center the circle on the click/tap position
        circle.style.left = e.clientX - rect.left - size / 2 + "px";
        circle.style.top = e.clientY - rect.top - size / 2 + "px";

        el.appendChild(circle);
        circle.addEventListener("animationend", () => circle.remove());
    });
});

// Letter: phones have no hover, so flip on tap there.
// (On desktop the CSS :hover handles it.)
const letter = document.querySelector(".letter");
letter.addEventListener("click", () => {
    if (window.matchMedia("(hover: none)").matches) {
        letter.classList.toggle("flipped");
    }
});
