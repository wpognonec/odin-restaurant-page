import { el, render } from "../dom"

const vdom = el(
  "div",
  { id: "app" },
  "ABOUT",
  el("h1", {}, "Hello World!"),
  el("p", {}, "This is a virtual DOM")
)

const element = render(vdom)

export default element
