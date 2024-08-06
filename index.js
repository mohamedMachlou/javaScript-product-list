const products = Array.from(document.querySelectorAll(".product"));
const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
const productCount = Array.from(document.querySelectorAll(".product-count"));
const cart = document.querySelector(".cart");
const moins = Array.from(document.querySelectorAll(".moins"));
const plus = Array.from(document.querySelectorAll(".plus"));

/////  Data Products List
let allProducts = [
  {
    name: "Waffle",
    title: "Xaffle with Berries",
    price: 6.5,
    counter: 0,
    selected: false,
    img: "./assets/images/image-waffle-desktop.jpg",
  },
  {
    name: "Créme Brulée",
    title: "Vanilla Bean Créme Brulée",
    price: 7.99,
    counter: 0,
    selected: false,
  },
  {
    name: "Macaron",
    title: "Macaron Mix of Five",
    price: 8.46,
    counter: 0,
    selected: false,
  },
];

//////////////////////////////////////////////
///// Hide product Counter from product //////
//////////////////////////////////////////////
productCount.map((ele) => {
  ele.setAttribute("style", "display: none");
});

///////////////////////////////////////////////////////////////
////////// Create Empty Cart  /////////////////////////////////
///////////////////////////////////////////////////////////////
createEmptyCart();

//////////////////////////////////////////////////////////////////////////////////////
///// Onclick Show product coutner and hide Add To Cart Buton from product  //////////
//////////////////////////////////////////////////////////////////////////////////////
addToCart.map((ele, index) => {
  ele.addEventListener("click", (e) => {
    ele.setAttribute("style", "display: none");
    productCount[index].setAttribute("style", "display: flex");
    allProducts[index].counter = 1;
    productCount[index].children[1].textContent = allProducts[index].counter;
    products[index].children[0].children[0].classList.add("prdactive");
    createProdOnCart();
  });
});

///////////////////////////////////////////////////////////////////////////////////////
//////  Set Name, Title and Price From All products Array to Display  /////////////////
///////////////////////////////////////////////////////////////////////////////////////
products.map((product, index) => {
  product.children[1].textContent = allProducts[index].name;
  product.children[2].textContent = allProducts[index].title;
  product.children[3].textContent = `$${allProducts[index].price}`;
});

////////////////////////////////////////////////////////////////
////////////// Remove All Empty Cart  /////////////////////////
////////////////////////////////////////////////////////////////
function removeAllEmptyCart() {
  // Remove Empty Cart
  let divEmptyCrtall = document.querySelectorAll(".cart-empty");
  divEmptyCrtall.forEach((ele) => ele.setAttribute("style", "display:none"));
}

///////////////////////////////////////////////////////////////
////////// Create Empty Cart  /////////////////////////////////
///////////////////////////////////////////////////////////////

function createEmptyCart() {
  ////// Remove All Empty Cart  ///
  removeAllEmptyCart();

  ////// Create Empty Cart  ///
  let divEmptyCart = document.createElement("div");
  divEmptyCart.className = "cart-empty";
  cart.appendChild(divEmptyCart);
  let divCartImg = document.createElement("div");
  divCartImg.className = "img";
  divEmptyCart.appendChild(divCartImg);
  let cartImg = document.createElement("img");
  cartImg.setAttribute("src", "./assets/images/illustration-empty-cart.svg");
  divCartImg.appendChild(cartImg);
  let cartPara = document.createElement("p");
  cartParaText = document.createTextNode("Your added items will appear here");
  cartPara.appendChild(cartParaText);
  divEmptyCart.appendChild(cartPara);
}

///////////////////////////////////////////////////////////////
/////////  Remove Total Price and Confirm Btn /////////////////
///////////////////////////////////////////////////////////////
function removeTotPrcConfBtn() {
  /////////////////////// Remove Total Price on Cart
  const divPrTT = document.querySelectorAll(".total-order");
  divPrTT.forEach((pd) => pd.setAttribute("style", "display:none"));
  const divConfm = document.querySelectorAll(".btn");
  divConfm.forEach((dvC) => dvC.setAttribute("style", "display:none"));
}
////////////////////////////////////////////////////////////////
////////// Show Products On Cart  /////////////////////////////
////////////////////////////////////////////////////////////////
// /// Create  and Set Product on Cart
function createProdOnCart() {
  ////// Remove All Empty Cart  ///
  removeAllEmptyCart();

  //// Get Products that will show on Cart
  let productsOnCart = allProducts.filter((product) => {
    return product.counter >= 1;
  });
  if (productsOnCart.length == 0) {
    createEmptyCart();
  }
  if (productsOnCart.length >= 0) {
    const prodsCatrs = document.querySelectorAll(".cart-product");
    prodsCatrs.forEach((pd) => pd.setAttribute("style", "display:none"));
    prodsCatrs.forEach((pd) => pd.setAttribute("style", "display:none"));
    //   // Show Products On Cart
    productsOnCart.forEach((product) => {
      let divProdCart = document.createElement("div");
      divProdCart.className = "cart-product";
      cart.appendChild(divProdCart);

      let cartProdBody = document.createElement("div");
      cartProdBody.className = "body";
      divProdCart.appendChild(cartProdBody);

      let cartProdTitle = document.createElement("div");
      cartProdTitle.className = "title";
      cartProdTitleTxt = document.createTextNode(`${product.title}`);
      cartProdTitle.appendChild(cartProdTitleTxt);
      cartProdBody.appendChild(cartProdTitle);

      let cartProdPrice = document.createElement("div");
      cartProdPrice.className = "price";
      cartProdBody.appendChild(cartProdPrice);

      let prodNb = document.createElement("span");
      let prodNbTxt = document.createTextNode(`${product.counter}x`);
      prodNb.appendChild(prodNbTxt);
      cartProdPrice.appendChild(prodNb);

      let prodPr = document.createElement("span");
      let prodPrTxt = document.createTextNode(`$${product.price.toFixed(2)}`);
      prodPr.appendChild(prodPrTxt);
      cartProdPrice.appendChild(prodPr);

      let prodPrT = document.createElement("span");
      let prdTP = product.price * product.counter;
      let prodPrTTxt = document.createTextNode(`$${prdTP.toFixed(2)}`);
      prodPrT.appendChild(prodPrTTxt);
      cartProdPrice.appendChild(prodPrT);

      let cartPrdRemove = document.createElement("div");
      cartPrdRemove.className = "btn-remove";
      divProdCart.appendChild(cartPrdRemove);

      let prodRmh3 = document.createElement("h3");
      let prodRmh3Txt = document.createTextNode("x");
      prodRmh3.appendChild(prodRmh3Txt);
      cartPrdRemove.appendChild(prodRmh3);
    });
    let totalPrice = productsOnCart.reduce((total, product) => {
      return total + product.price * product.counter;
    }, 0);

    ////  Remove Total Price and Confirm Btn //////
    removeTotPrcConfBtn();
    /// Create  and Set Total Price on Cart
    let divTprc = document.createElement("div");
    divTprc.className = "total-order";
    cart.appendChild(divTprc);

    let divTprcTitle = document.createElement("span");
    let divTprcTitleTxt = document.createTextNode("Order Total :");
    divTprcTitle.appendChild(divTprcTitleTxt);
    divTprc.appendChild(divTprcTitle);

    let divTprcTotal = document.createElement("span");
    let divTprcTotalTxt = document.createTextNode(`${totalPrice.toFixed(2)}`);
    divTprcTotal.appendChild(divTprcTotalTxt);
    divTprc.appendChild(divTprcTotal);

    /// Create  and Set Confirmation Button on Cart
    let divConf = document.createElement("div");
    divConf.className = "btn";
    cart.appendChild(divConf);

    let prcBtn = document.createElement("button");
    let prcBtnTxt = document.createTextNode("Confirm Order");
    prcBtn.appendChild(prcBtnTxt);
    divConf.appendChild(prcBtn);
  }
}

////////////////////////////////////////////////////////////////
//////////  Counter Plus Button    /////////////////////////////
////////////////////////////////////////////////////////////////
plus.forEach((p, index) => {
  p.addEventListener("click", () => {
    let counter = +p.parentElement.children[1].textContent;
    counter++;
    p.parentElement.children[1].textContent = counter;
    allProducts[index].counter = counter;
    createProdOnCart();
  });
});

////////////////////////////////////////////////////////////////
//////////  Counter Moins Button   /////////////////////////////
////////////////////////////////////////////////////////////////

moins.forEach((m, index) => {
  m.addEventListener("click", () => {
    let counter = +m.parentElement.children[1].textContent;
    if (counter >= 1) {
      counter--;
    }
    m.parentElement.children[1].textContent = counter;
    allProducts[index].counter = counter;
    createProdOnCart();

    if (counter == 0) {
      productCount[index].setAttribute("style", "display: none");
      addToCart[index].setAttribute("style", "display: flex");
      products[index].children[0].children[0].classList.remove("prdactive");
    }

    //// Get Products that will show on Cart
    let productsOnCart = allProducts.filter((product) => {
      return product.counter >= 1;
    });
    if (productsOnCart.length == 0) {
      ////  Remove Total Price and Confirm Btn //////
      removeTotPrcConfBtn();
    }
  });
});
