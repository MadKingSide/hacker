let button1 = document.querySelector(".button1");

let button2 = document.querySelector(".button2");

button1.addEventListener("click", function() {
    localStorage.setItem("number", "one");
});

button2.addEventListener("click", function() {
    localStorage.setItem("number", "two");
});