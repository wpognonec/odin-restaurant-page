import { el, render } from "../dom"
import recipes from "../recipes"

function createRecipe(recipe) {
  return el(".flex-el", [
    el("div.flex-row", [
      el("img", {
        src: recipe.url,
        width: "300px",
        heigh: "300px",
      }),
      el("div", [el("h2", [recipe.name]), el("p", [recipe.description])]),
    ]),
  ])
}

const vdom = el("div#app", [
  el(
    ".flex",
    recipes.map((recipe) => createRecipe(recipe))
  ),
])

const element = render(vdom)

export default () => element
