const printButton = document.querySelector("#print")
const output = document.querySelector("#email-output")

printButton.addEventListener("click", event => {
    event.preventDefault();
    const input = document.querySelector("#email-input").value
    output.innerHTML = input;
})