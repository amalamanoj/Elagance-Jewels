let items = JSON.parse(localStorage.getItem("items")) || [];

// 🔴 DEMO ITEMS (first time only)
if(items.length===0){
  items = [
    {name:"Stone Earring",price:350,image:"earring1.jpg"},
    {name:"Pearl Earring",price:420,image:"earring2.jpg"},
    {name:"Gold Plated Earring",price:480,image:"earring3.jpg"},
    {name:"Designer Earring",price:520,image:"earring4.jpg"},
    {name:"Traditional Earring",price:600,image:"earring5.jpg"},
    {name:"Gold Necklace",price:1200,image:"necklace1.jpg"},
    {name:"Pearl Necklace",price:1500,image:"necklace2.jpg"},
    {name:"Temple Necklace",price:1800,image:"necklace3.jpg"},
    {name:"Chain Necklace",price:900,image:"necklace4.jpg"},
    {name:"Designer Necklace",price:2100,image:"necklace5.jpg"}
  ];
  localStorage.setItem("items", JSON.stringify(items));
}

function addItem(){
  let n=document.getElementById("name").value;
  let p=document.getElementById("price").value;
  let i=document.getElementById("image").value;
  items.push({name:n,price:p,image:i});
  localStorage.setItem("items",JSON.stringify(items));
  showItems();
}
function removeItem(idx){
  items.splice(idx,1);
  localStorage.setItem("items",JSON.stringify(items));
  showItems();
}
function showItems(){
  let ul=document.getElementById("list");
  ul.innerHTML="";
  items.forEach((it,idx)=>{
    ul.innerHTML+=`<li>${it.name} - ₹${it.price}
    <button onclick="removeItem(${idx})">❌</button></li>`;
  });
}
showItems();