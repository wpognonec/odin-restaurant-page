import { el, render } from "../dom"
import text from "../text.json"

const vdom = el("div#app", [
  el("h2", [text.homeWelcome]),
  el("p", [text.homeText]),
])

const element = render(vdom)

export default () => element
