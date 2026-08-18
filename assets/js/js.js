const add_cart = document.querySelectorAll(".button-add-cart");
const num_cart = document.querySelector("#num-cart");

let count = 0;

add_cart.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();

    count++;

    num_cart.textContent = count;
    num_cart.classList.add("active");
  });
}); 

const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector(".inner-menu");

menuToggle.addEventListener("click", function(event) {
  event.preventDefault();

  menu.classList.toggle("active");
})