// search placeholder
let placeholderValue = ["kangkung", "jeruk", "sabun lifeboy", "cabai"];
const search = document.getElementById("search");
const searchGroup = document.getElementById("search-group");
const cartGroup = document.getElementById("cart-group");

// search box
setInterval(() => {
  search.placeholder = placeholderValue[Math.floor(Math.random() * 4)];
}, 3000);

// search event
search.addEventListener("input", () => {
  if (search.value == "") {
    searchGroup.classList.add("hidden");
  } else {
    searchGroup.classList.remove("hidden");
  }
});

// cart evet
function cartToggle() {
  cartGroup.classList.toggle("hidden");
}
