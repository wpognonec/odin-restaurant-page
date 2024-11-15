import { el, render } from "../dom"

const vdom = el(
  "div#app",
  {},
  "HOME",
  el("h1", {}, "Hello World!"),
  el("p", {}, "This is a virtual DOM"),
  el("a", { href: "https://www.google.com", target: "_blank" }, "link"),
  el(
    ".grid",
    {},
    el(".grid-el", {}, "1"),
    el(".grid-el", {}, "2"),
    el(".grid-el", {}, "3"),
    el(".grid-el", {}, "4")
  )
)

const element = render(vdom)

export default element
