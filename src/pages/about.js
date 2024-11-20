import { el, render } from "../dom"
import { createAboutItem } from "./components/aboutItem"
import text from "../text.json"
import call from "../assets/call.svg"
import mail from "../assets/mail.svg"
import map from "../assets/map.svg"

const vdom = el("div#app", [
  el("h2", ["Contact Us"]),
  el("br"),
  el("div.flex.gap10", [
    createAboutItem(call, text.aboutPhone),
    createAboutItem(mail, text.aboutEmail),
    createAboutItem(map, text.aboutLocation),
  ]),
  el("br"),
  el("form.flex.gap10", [
    el("input", { placeholder: "e-mail" }),
    el("textarea", { placeholder: "message" }),
    el("button", ["Submit"]),
  ]),
])

const element = render(vdom)

export default () => element
