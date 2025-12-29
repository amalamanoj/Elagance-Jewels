let cart = [];
let total = 0;

let items = JSON.parse(localStorage.getItem("items")) || [];

let shop = document.getElementById("shop");

items.forEach(item => {
    shop.innerHTML += `
    <div class="card">
        <img src="images/${item.image}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="addItem('${item.name}', ${item.price})">
            Add
        </button>
    </div>
    `;
});

function addItem(name, price) {
    cart.push({name, price});
    total += price;
    updateSummary();
}

function updateSummary() {
    let list = document.getElementById("orderList");
    list.innerHTML = "";
    cart.forEach(i => {
        list.innerHTML += `<li>${i.name} - ₹${i.price}</li>`;
    });
    document.getElementById("total").innerText = total;
}

function sendWhatsApp() {
    let msg = "Order from *Elegance Jewels*:\n\n";
    cart.forEach(i => msg += `${i.name} - ₹${i.price}\n`);
    msg += `\nTotal: ₹${total}`;

    let phone = "919400746548"; // നിങ്ങളുടെ നമ്പർ
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
}