import { el, render } from "../dom"

function createRecipe(name, img) {
  return el(".flex-el", [
    el("a.recipe", { href: "https://www.google.com", target: "_blank" }, [
      name,
    ]),
    el("img", {
      src: img,
      width: "300px",
      heigh: "300px",
    }),
  ])
}

const vdom = el("div#app", [
  el(".flex", [
    createRecipe(
      "Caprese-style Portobello Mushrooms",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/09/caprese-portobello-mushrooms-25-scaled.jpg?resize=750%2C563&ssl=1"
    ),
    createRecipe(
      "Oatmeal with Quinoa and Chia Seeds",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/07/oatmeal-with-quinoa-9-scaled.jpg?resize=750%2C562&ssl=1"
    ),
    createRecipe(
      "Italian Sausage, Peppers and Onions Sandwich",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/07/italian-sausage-onions-peppers-15H-scaled.jpg?resize=750%2C562&ssl=1"
    ),
    createRecipe(
      "Roasted Cauliflower Salad",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/06/roasted-cauliflower-salad-15-scaled.jpg?resize=750%2C563&ssl=1"
    ),
    createRecipe(
      "Salmon With Pesto and Garlic Tomatoes",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/05/salmon-with-pesto-garlic-tomatoes-13-scaled.jpg?resize=750%2C563&ssl=1"
    ),
    createRecipe(
      "Easy Sheet-Pan Chicken With Fennel And Olives",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/05/chicken-with-fennel-and-olives-12-scaled.jpg?resize=750%2C563&ssl=1"
    ),
    createRecipe(
      "Pomegranate Glazed Salmon",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/03/pomegranate-glazed-salmon-12-scaled.jpg?resize=750%2C562&ssl=1"
    ),
    createRecipe(
      "Asparagus Salad with Wheat Berries",
      "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2024/03/asparagus-salad-with-wheat-berries-12-scaled.jpg?resize=750%2C563&ssl=1"
    ),
  ]),
])

const element = render(vdom)

export default () => element
