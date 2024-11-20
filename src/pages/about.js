import { el, render } from "../dom"
import text from "../text.json"

const vdom = el("div#app", [
  el("h2", ["Contact Us"]),
  el("p", [text.aboutName]),
  el("p", [text.aboutPhone]),
  el("p", [text.aboutEmail]),
])

const element = render(vdom)

export default () => element
