let button1 = document.querySelector(".button1");

let button2 = document.querySelector(".button2");

button1.addEventListener("click", function() {
    localStorage.setItem("number", "one");
});

button2.addEventListener("click", function() {
    localStorage.setItem("number", "two");
});

let image1 = document.querySelector(".image1");
image1.src = "projects/3D/Tombeau/render_final_pillier_.jpg";

image1.style.display="none";

let images = document.querySelector(".images");
images.style.width = "100px";

