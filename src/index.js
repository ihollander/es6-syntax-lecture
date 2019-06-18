const BASE_URL = "http://localhost:3000/colors";

document.addEventListener("DOMContentLoaded", () => {
  /** DOM Nodes **/
  const form = document.querySelector("#new-name-suggestion");
  const nameList = document.querySelector("#universe-color-names");

  /** Event Listeners **/
  form.addEventListener("submit", handleSubmit);

  /** Event Handlers **/
  function handleSubmit(event) {
    event.preventDefault();

    const name = event.target.querySelector("#name").value;
    const credit = event.target.querySelector("#credit").value;

    // REFACTOR: Object Initializer (key value assignment) shorthand
    const newColor = {
      name: name,
      credit: credit
    };

    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newColor)
    })
      .then(r => r.json())
      .then(color => {
        renderColor(color); // REFACTOR: fn reference to callback
      });
  }

  /** Render Helpers **/
  function renderColor(color) {
    // REFACTOR: Object destructuring in argument
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${color.name}</span>
    `;
    nameList.appendChild(li);
  }

  /** Initial Render **/
  function init() {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(colors => {
        colors.forEach(color => {
          renderColor(color); // REFACTOR: fn reference to callback
        });
      });
  }

  init();
});
