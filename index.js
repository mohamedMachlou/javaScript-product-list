const container = Array.from(document.querySelectorAll(".container"));
const products = Array.from(document.querySelectorAll(".product"));
const addToCart = Array.from(document.querySelectorAll(".add-to-cart"));
const productCount = Array.from(document.querySelectorAll(".product-count"));
const cart = document.querySelector(".cart");
const moins = Array.from(document.querySelectorAll(".moins"));
const plus = Array.from(document.querySelectorAll(".plus"));
const popupBackground = document.querySelector(".popup-back");
const popupForeground = document.querySelector(".popup-fore");

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
    img: "./assets/images/image-creme-brulee-desktop.jpg",
  },
  {
    name: "Macaron",
    title: "Macaron Mix of Five",
    price: 8.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-macaron-desktop.jpg",
  },
  {
    name: "Tiramisu",
    title: "Classic Tiramissu",
    price: 8.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-tiramisu-desktop.jpg",
  },
  {
    name: "Baklava",
    title: "Pistachio Baklava",
    price: 8.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-baklava-desktop.jpg",
  },
  {
    name: "Pie",
    title: "Lemon Meringue Pie",
    price: 5.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-meringue-desktop.jpg",
  },
  {
    name: "Cake",
    title: "Red Velvet Cake",
    price: 4.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-cake-desktop.jpg",
  },
  {
    name: "Brownie",
    title: "Salted Caramel Brownie",
    price: 4.46,
    counter: 0,
    selected: false,
    img: "./assets/images/image-brownie-desktop.jpg",
  },
  {
    name: "Panna Cotta",
    title: "Vanilla Panna Cotta",
    price: 6.5,
    counter: 0,
    selected: false,
    img: "./assets/images/image-panna-cotta-desktop.jpg",
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
  product.children[0].children[0].setAttribute(
    "src",
    `${allProducts[index].img}`
  );
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

  /// Show Number of products on Cart
  let nbProdOnCart = document.querySelector(".nb-in-cart");
  nbProdOnCart.textContent = productsOnCart.length;

  if (productsOnCart.length == 0) {
    createEmptyCart();
  }
  if (productsOnCart.length >= 0) {
    ///// Create products on Cart
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
    divConf.setAttribute("onclick", "confirmOrder()");
    cart.appendChild(divConf);

    let prcBtn = document.createElement("button");
    let prcBtnTxt = document.createTextNode("Confirm Order");
    prcBtn.appendChild(prcBtnTxt);
    divConf.appendChild(prcBtn);
  }
}
// ///////////// Delete from Cart
// function deleteOnCart() {
//   let btnDelete = document.querySelectorAll("delete-on-cart");
//   btnDelete.forEach((btn) => {
//     console.log(btn);
//   });
// }

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

////////////////////////////////////////////////////////////////
////////  View Cart onClick Confirm Button   ///////////////////
////////////////////////////////////////////////////////////////
///// Hide Pop-up
hidePopup();
function hidePopup() {
  popupBackground.setAttribute("style", "display: none");
  popupForeground.setAttribute("style", "display: none");
}
///// Show Pop-up
function showPopup() {
  popupBackground.setAttribute("style", "display: flex");
  popupForeground.setAttribute("style", "display: flex");
}

///// Confirmation Order Function
function confirmOrder() {
  //// Get Products that will show on Cart
  const productsOnCart = allProducts.filter((product) => {
    return product.counter >= 1;
  });
  if (productsOnCart.length >= 1) {
    showPopup();

    /// Hide Old Orders Confirmations Details
    let oldImg = document.querySelectorAll(".popup-img ");
    oldImg.forEach((t) => t.setAttribute("style", "display: none"));
    let oldTitle = document.querySelectorAll(".confirm-title");
    oldTitle.forEach((t) => t.setAttribute("style", "display: none"));
    let oldpara = document.querySelectorAll(".confirm-para");
    oldpara.forEach((p) => p.setAttribute("style", "display: none"));
    let oldBody = document.querySelectorAll(".confirm-body");
    oldBody.forEach((b) => b.setAttribute("style", "display: none"));

    /// Create Confirmation Icon
    let popupImgDiv = document.createElement("div");
    popupImgDiv.className = "popup-img";
    popupForeground.appendChild(popupImgDiv);

    let popupImg = document.createElement("img");
    popupImg.setAttribute("src", "./assets/images/icon-checked.svg");
    popupImgDiv.appendChild(popupImg);

    /// Create Confirmation Header
    let orderConf = document.createElement("div");
    orderConf.className = "confirm-title";
    let orderConfTxt = document.createTextNode("Order Confirmed");
    orderConf.appendChild(orderConfTxt);
    popupForeground.appendChild(orderConf);

    /// Create Confirmation paragraph
    let orderConfpara = document.createElement("div");
    orderConfpara.className = "confirm-para";
    let orderConfparaTxt = document.createTextNode(
      "We hope you enjoy you food!"
    );
    orderConfpara.appendChild(orderConfparaTxt);
    popupForeground.appendChild(orderConfpara);

    ///////////////////////////////////////////////////
    /////////// Confirmation Body  ////////////////////
    ///////////////////////////////////////////////////
    let confirmBody = document.createElement("div");
    confirmBody.className = "confirm-body";
    popupForeground.appendChild(confirmBody);

    ///////////////////////////////////////////////////
    ///////  Product in confirm body //////////////////
    ///////////////////////////////////////////////////
    productsOnCart.forEach((product, index) => {
      let prodConfirm = document.createElement("div");
      prodConfirm.className = "confirm-product";
      confirmBody.appendChild(prodConfirm);

      //// Product details in confirm product
      let imgConfirm = document.createElement("div");
      imgConfirm.className = "prod-details";
      prodConfirm.appendChild(imgConfirm);

      //// Img in product details
      let prodImg = document.createElement("img");
      prodImg.setAttribute("src", `${product.img}`);
      imgConfirm.appendChild(prodImg);

      //// Title in product image
      let prodTitle = document.createElement("div");
      prodTitle.className = "prod-title";
      imgConfirm.appendChild(prodTitle);

      ////// Header
      let prodHeader = document.createElement("h3");
      let prodHeaderTxt = document.createTextNode(`${product.title}`);
      prodHeader.appendChild(prodHeaderTxt);
      prodTitle.appendChild(prodHeader);

      ////// Header 2
      let prodH = document.createElement("div");
      prodH.className = "nb-price";
      prodTitle.appendChild(prodH);

      ////// Product selected times
      let prSelectedTimes = document.createElement("h4");
      let prSelectedTimesTxt = document.createTextNode(`${product.counter}x`);
      prSelectedTimes.appendChild(prSelectedTimesTxt);
      prodH.appendChild(prSelectedTimes);

      ////// Product selected price
      let prSelectedPrice = document.createElement("h4");
      let prSelectedPriceTxt = document.createTextNode(
        `@ $${product.price.toFixed(2)}`
      );
      prSelectedPrice.appendChild(prSelectedPriceTxt);
      prodH.appendChild(prSelectedPrice);

      //// Price in confirm product
      let priceConf = document.createElement("div");
      let popupTotalPrice = product.counter * product.price;
      let priceConfTxt = document.createTextNode(
        `$${popupTotalPrice.toFixed(2)}`
      );
      priceConf.className = "price-confirm";
      priceConf.appendChild(priceConfTxt);
      prodConfirm.appendChild(priceConf);
    });

    ////////////////////////////////////////////////////////
    ///////////  Order Total and Confirmation Button ///////
    ////////////////////////////////////////////////////////
    ///// Order Total
    let orderTotal = document.createElement("div");
    orderTotal.className = "conf-order-total ";
    confirmBody.appendChild(orderTotal);

    ///// Order Total Title
    let orderTotalTitle = document.createElement("h4");
    let orderTotalTitleTxt = document.createTextNode("Order Total : ");
    orderTotalTitle.appendChild(orderTotalTitleTxt);
    orderTotal.appendChild(orderTotalTitle);

    ///// Order Total Price Calcul
    let orderTotalConfPrice = productsOnCart.reduce((total, product) => {
      return (total += product.price * product.counter);
    }, 0);

    ///// Order Total Price
    let orderTotalPrice = document.createElement("h4");
    let orderTotalPriceTxt = document.createTextNode(
      `$${orderTotalConfPrice.toFixed(2)}`
    );
    orderTotalPrice.appendChild(orderTotalPriceTxt);
    orderTotal.appendChild(orderTotalPrice);

    ///// Pop-up Confirmation Button
    let popupBtn = document.createElement("button");
    popupBtn.setAttribute("onclick", "startNewOrder()");
    let popupBtntxt = document.createTextNode("Start New Order");
    popupBtn.appendChild(popupBtntxt);
    confirmBody.appendChild(popupBtn);

    let foreGroundImg = document.querySelector(".popup-img");
    foreGroundImg.scrollIntoView();
  }
}

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
function startNewOrder() {
  // Hide pop-up
  hidePopup();

  //
  allProducts.forEach((product) => (product.counter = 0));

  //////////////////////////////////////////////////////////////////////////////////////
  ///// Hide product coutner and show Add To Cart Buton from product  //////////
  //////////////////////////////////////////////////////////////////////////////////////
  addToCart.map((ele, index) => {
    ele.setAttribute("style", "display: flex");
    productCount[index].setAttribute("style", "display: none");
    allProducts[index].counter = 0;
    productCount[index].children[1].textContent = allProducts[index].counter;
    products[index].children[0].children[0].classList.remove("prdactive");
  });

  // createProdOnCart();
  createProdOnCart();
  removeTotPrcConfBtn();
}
