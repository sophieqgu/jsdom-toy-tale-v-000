let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  fetchToyCollection();
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToyCollection() {
  const toyCollection = document.getElementById('toy-collection');

  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(json => {
    for (const toy in json.message) {
      const toyCard = document.createElement('div');
      toyCard.setAttribute('class', 'card');
      
    }
  })
}
