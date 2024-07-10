import { data } from "./getData";

setTimeout(() => {
  const cards = document.querySelectorAll(".order");

//   console.log(cards);
//   console.log("Увага сюди!");

  for (let card of cards) {
    card.addEventListener("click", (e) => {

        console.log(data);
    // console.dir(name, price);

    // console.log(localStorage.getItem);
    //   if (!JSON.parse(localStorage.getItem("cart"))) {
    //     localStorage.setItem("cart", JSON.stringify([{ name, price }]));
    //   } else {
    //     const cart = JSON.parse(localStorage.getItem("cart"));
    //     cart.push({ name, price });
    //     localStorage.setItem("cart", JSON.stringify(cart));
    //   }
    //   console.log(JSON.parse(localStorage.getItem("cart")))
    });
  }
}, 1000);
