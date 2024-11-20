import { el, render } from "../dom"
import text from "../text.json"
import call from "../assets/call.svg"
import mail from "../assets/mail.svg"
import map from "../assets/map.svg"

const vdom = el("div#app", [
  el("h2", ["Contact Us"]),
  el("br"),
  el("div.flex", [
    el("div.flex-row", [
      el("img", { src: call, width: "48px" }),
      el("div", [el("h3", ["Phone"]), text.aboutPhone]),
    ]),
    el("div.flex-row", [
      el("img", { src: mail, width: "48px" }),
      el("div", [el("h3", ["Email"]), text.aboutEmail]),
    ]),
    el("div.flex-row", [
      el("img", { src: map, width: "48px" }),
      el("div", [el("h3", ["Location"]), text.aboutLocation]),
    ]),
  ]),
  el("br"),
  el("form.flex", [
    el("input", { placeholder: "e-mail" }),
    el("textarea", { placeholder: "message" }),
    el("button", ["Submit"]),
  ]),
])

const element = render(vdom)

export default () => element
