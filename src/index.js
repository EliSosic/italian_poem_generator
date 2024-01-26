function writePoem (event) {
   event.preventDefault();

    new Typewriter("#poem", {
    strings: "I'm writing your poem ✒️",
    autoStart: true,
    delay: 5,
    cursor:"",
    });
}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", writePoem);