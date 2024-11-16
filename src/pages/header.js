import { el, render } from "../dom"

const vdom = el("header#header", [
  el("h1", ["Cuisine With Me"]),
  el("p", ["Mediterranean Diet Recipes"]),
  el("nav", [
    el("button#home", ["HOME"]),
    el("button#menu", ["MENU"]),
    el("button#about", ["ABOUT"]),
  ]),
])

const element = render(vdom)

export default () => element
