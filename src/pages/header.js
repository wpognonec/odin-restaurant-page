import { el, render } from "../dom"

const vdom = el("header#header", [
  el("h1", ["Cuisine With Me"]),
  el("h3", ["Mediterranean Delights in Houston"]),
  el("nav", [
    el("button#home.active", ["HOME"]),
    el("button#menu", ["MENU"]),
    el("button#about", ["ABOUT"]),
  ]),
])

const element = render(vdom)

export default () => element
