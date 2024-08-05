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
    img: "./assets/images/image-waffle-desktop.jpg",
  },
  {
    name: "Créme Brulée",
    title: "Vanilla Bean Créme Brulée",
    price: 7.99,
    counter: 0,
  },
  {
    name: "Macaron",
    title: "Macaron Mix of Five",
    price: 8.46,
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
    products[index].children[0].children[0].classList.add("prdactive");
  });
});

//
products.map((product, index) => {
  product.children[1].textContent = allProducts[index].name;
  product.children[2].textContent = allProducts[index].title;
  product.children[3].textContent = `$${allProducts[index].price}`;
  //   console.log(product.children[1]);
  //   console.log(product.children[2]);
  //   console.log(product.children[3]);
});

//
const productCnts = Array.from(document.querySelectorAll(".product-count"));

function moinsCounter() {
  productCnts.map((prd, index) => {
    prd.children[0].addEventListener("click", () => {
      if (+prd.children[1].innerHTML >= 1) {
        +prd.children[1].innerHTML--;
        console.log(prd.children[0].parentElement.parentElement);
        if (+prd.children[1].innerHTML == 0) {
          prd.children[0].parentElement.parentElement.children[0].classList.remove(
            "prdactive"
          );
          prd.children[0].parentElement.parentElement.children[1].setAttribute(
            "style",
            "display: flex"
          );
          prd.children[0].parentElement.parentElement.children[1].setAttribute(
            "style",
            "display: flex"
          );
        }
      }
      console.log("index : ", +prd.children[1].innerHTML);
    });
  });
}

function plusCounter() {
  console.log("plus");
}
