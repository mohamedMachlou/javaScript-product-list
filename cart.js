/////////////////////////////////////////////////////
//////////////// Start Cart      ////////////////////
/////////////////////////////////////////////////////

//// Get Cart

//   let totalPrice = productsOnCart.reduce((total, product) => {
//     return total + product.price * product.counter;
//   }, 0);

//   //
//   const divPrTT = document.querySelectorAll(".total-order");
//   divPrTT.forEach((pd) => pd.setAttribute("style", "display:none"));
//   /// Create  and Set Total Price on Cart
//   let divTprc = document.createElement("div");
//   divTprc.className = "total-order";
//   cart.appendChild(divTprc);

//   let divTprcTitle = document.createElement("span");
//   let divTprcTitleTxt = document.createTextNode("Order Total :");
//   divTprcTitle.appendChild(divTprcTitleTxt);
//   divTprc.appendChild(divTprcTitle);

//   let divTprcTotal = document.createElement("span");
//   let divTprcTotalTxt = document.createTextNode(`${totalPrice.toFixed(2)}`);
//   divTprcTotal.appendChild(divTprcTotalTxt);
//   divTprc.appendChild(divTprcTotal);

//   //
//   const divConfm = document.querySelectorAll(".btn");
//   divConfm.forEach((dvC) => dvC.setAttribute("style", "display:none"));
//   /// Create  and Set Confirmation Button on Cart
//   let divConf = document.createElement("div");
//   divConf.className = "btn";
//   cart.appendChild(divConf);

//   let prcBtn = document.createElement("button");
//   let prcBtnTxt = document.createTextNode("Confirm Order");
//   prcBtn.appendChild(prcBtnTxt);
//   divConf.appendChild(prcBtn);
// }

// // Remove Total Price and Cofirmation Button
// function rmTotalPrc() {
//   let AlltotalPrc = document.querySelectorAll(".total-order");
//   // AlltotalPrc.forEach((ele) => ele.setAttribute("style", "display:none"));
//   AlltotalPrc.forEach((ele) => ele.setAttribute("style", "hidden: true"));
//   console.log(totalPrc);
//   let confBtn = document.querySelectorAll(".btn");
//   // confBtn.forEach((ele) => ele.setAttribute("style", "display:none"));
//   confBtn.forEach((ele) => ele.setAttribute("style", "hidden: true"));
//   console.log(confBtn);

//////////////////////////////////////////////////////
//////////////// End Cart      ///////////////////////
//////////////////////////////////////////////////////
