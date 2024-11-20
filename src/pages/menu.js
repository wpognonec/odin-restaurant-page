import { el, render } from "../dom"
import { createRecipe } from "./components/recipe"
import recipes from "../recipes"

const vdom = el("div#app", [
  el(
    ".flex.gap30",
    recipes.map((recipe) => createRecipe(recipe))
  ),
])

const element = render(vdom)

export default () => element
