let items = JSON.parse(localStorage.getItem("items"));

// 👉 FIRST TIME DEMO DATA (AUTO LOAD)
if (!items || items.length === 0) {
  items = [
    {name:"Stone Earring",price:150,image:"earring1.jpg"},
    {name:"Pearl Earring",price:399,image:"earring2.jpg"},
    {name:"Gold Plated Earring",price:480,image:"earring3.jpg"},
    {name:"Designer Earring",price:520,image:"earring4.jpg"},
    {name:"Traditional Earring",price:250,image:"earring5.jpg"},
    {name:"Gold Necklace",price:999,image:"necklace1.jpg"},
    {name:"Pearl Necklace",price:1000,image:"necklace2.jpg"},
    {name:"Temple Necklace",price:1500,image:"necklace3.jpg"},
    {name:"Chain Necklace",price:900,image:"necklace4.jpg"},
    {name:"Designer Necklace",price:1100,image:"necklace5.jpg"}
  ];
  localStorage.setItem("items", JSON.stringify(items));
}

let cart = [];
let total = 0;

const itemsDiv = document.getElementById("items");

function renderItems() {
  itemsDiv.innerHTML = "";
  items.forEach(item => {
    itemsDiv.innerHTML += `
      <div class="card">
        <img src="images/${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">
          Add
        </button>
      </div>
    `;
  });
}
renderItems();

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function updateCart() {
  const ul = document.getElementById("cart");
  ul.innerHTML = "";
  cart.forEach(i => {
    ul.innerHTML += `<li>${i.name} - ₹${i.price}</li>`;
  });
  document.getElementById("total").innerText = total;
}

function orderWhatsApp() {
  let msg = "Order from *Elagance Jewels*\n\n";
  cart.forEach(i => msg += `${i.name} - ₹${i.price}\n`);
  msg += `\nTotal: ₹${total}`;

  let phone = "919400746548"; // നിങ്ങളുടെ നമ്പർ
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
}