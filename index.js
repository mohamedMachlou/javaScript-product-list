const products = Array.from(document.querySelectorAll(".product"));
const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
const productCount = Array.from(document.querySelectorAll(".product-count"));

//products list
const allProducts = [
  {
    name: "Waffle",
    title: "Xaffle with Berries",
    price: 6.5,
    counter: 1,
    img: "./assets/images/image-waffle-desktop.jpg",
  },
  {
    name: "Créme Brulée",
    title: "Vanilla Bean Créme Brulée",
    price: 7.99,
    counter: 1,
  },
  {
    name: "Macaron",
    title: "Macaron Mix of Five",
    price: 8.46,
    counter: 1,
  },
];

// Hide product Counter from product
productCount.map((ele) => {
  ele.setAttribute("style", "display: none");
});

// Onclick Show product coutner and hide Add To Cart Buton from product
addToCart.map((ele, index) => {
  ele.addEventListener("click", (e) => {
    ele.setAttribute("style", "display: none");
    productCount[index].setAttribute("style", "display: flex");
    productCount[index].children[1].textContent = allProducts[index].counter;
    console.log(productCount[index].children[1].textContent);
    products[index].children[0].children[0].classList.add("prdactive");
  });
});

// Set Name, Title and Price From All products Array to Display
products.map((product, index) => {
  product.children[1].textContent = allProducts[index].name;
  product.children[2].textContent = allProducts[index].title;
  product.children[3].textContent = `$${allProducts[index].price}`;
});

//
const moins = Array.from(document.querySelectorAll(".moins"));
moins.forEach((m, index) => {
  m.addEventListener("click", () => {
    let counter = +m.parentElement.children[1].textContent;
    if (counter >= 2) {
      counter--;
    }
    if (counter == 1) {
      productCount[index].setAttribute("style", "display: none");
      addToCart[index].setAttribute("style", "display: flex");
      products[index].children[0].children[0].classList.remove("prdactive");
    }
    m.parentElement.children[1].textContent = counter;
    allProducts[index].counter = counter;
  });
});

//
const plus = Array.from(document.querySelectorAll(".plus"));
plus.forEach((p, index) => {
  p.addEventListener("click", () => {
    let counter = +p.parentElement.children[1].textContent;
    counter++;
    p.parentElement.children[1].textContent = counter;
    allProducts[index].counter = counter;
  });
});
