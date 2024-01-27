function showPoem (response) {
    new Typewriter("#poem", {
    strings: response.data.answer,
        autoStart: true,
        delay: 5,
        cursor:"",
        });
}

function writePoem (event) {
   event.preventDefault();

   let topicInput = document.querySelector("#topic");

   let apiKey = "3c836392eab01t60930bboe42ecabfe4";
   let context = "You are a smart italian AI assistent who knows a lot of poems. You are also very good at writing short romantic italian poems.";
   let prompt = `write a very short poem, maximum 5 sentences, in italian about ${topicInput.value}. Use basic html in italic to display it and separate each sentence with </br>. Sign the poem with Il tuo Amore`;
   let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    //let poemOutput = docmunet.querySelector("#poem");
    

   axios.get(apiUrl).then(showPoem);

}

let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", writePoem);