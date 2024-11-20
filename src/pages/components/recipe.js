import { el } from "../../dom"

export function createRecipe(recipe) {
  return el("div#recipe.flex-row.gap30", [
    el("img", {
      src: recipe.url,
      width: "300px",
      heigh: "300px",
    }),
    el("div", [el("h2", [recipe.name]), el("p", [recipe.description])]),
  ])
}
