
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
import tpl from "../templates/render_cards.handlebars"

export const data = getData();
function getData() {
    return fetch(BASE_URL).then(resp => resp.json()).then(data => renderCard(data));
}

function renderCard(data) {
    console.log("Fn" , data);
    const { drinks } = data;
    console.log(drinks);
    drinks.forEach(drink => {
        drink.price = Math.random() * 1000
    });
    document.querySelector(".cards").insertAdjacentHTML("afterbegin", tpl(drinks));
}


console.log("getData ", getData()); 