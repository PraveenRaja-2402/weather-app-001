console.log("Server side javascript file is loaded !");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent ='Loading......'
messageTwo.textContent = ''

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
    
    fetch("http://localhost:3000/weather?address=" + location).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if (data.error) {
              messageOne.textContent = data.error
            } else {
              messageOne.textContent = data.location
              messageTwo.textContent = `Temperature: ${data.forecast.temperature}°C, Description: ${data.forecast.description}`;

            }
        });
    });
});
