const products = Array.from(document.querySelectorAll(".product"));
const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
const productCount = Array.from(document.querySelectorAll(".product-count"));

//products list
const allProducts = [
  {
    name: "Waffle",
    title: "Xaffle with Berries",
    price: 6.5,
    counter: 0,
  },
  {
    name: "Créme Brulée",
    title: "Vanilla Bean Créme Brulée",
    price: 7.0,
    counter: 0,
  },
  {
    name: "Macaron",
    title: "Macaron Mix of Five",
    price: 7.0,
    counter: 0,
  },
];

//

// Hide product Counter from product
productCount.map((ele) => {
  ele.setAttribute("style", "display: none");
});

// Onclick Show product coutner and hide Add To Cart Buton from product
addToCart.map((ele, index) => {
  ele.addEventListener("click", (e) => {
    ele.setAttribute("style", "display: none");
    productCount[index].setAttribute("style", "display: flex");
    products[index].children[0].classList.add("product-active");
  });
});

//
products.map((product, index) => {
  product.children[1].textContent = allProducts[index].name;
  product.children[2].textContent = allProducts[index].title;
  product.children[3].textContent = `$${allProducts[index].price}`;
  console.log(product.children[1]);
  console.log(product.children[2]);
  console.log(product.children[3]);
});
