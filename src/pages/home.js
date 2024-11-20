import { el, render } from "../dom"
import text from "../text.json"

const vdom = el("div#app", [
  el("h2", [text.homeWelcome]),
  el("br"),
  el("p", [text.homeText]),
  el("br"),
  el("img", {
    src: "https://i0.wp.com/cuisinewithme.com/wp-content/uploads/2020/10/AdobeStock_144810990-scaled.jpeg?resize=750%2C357&ssl=1",
  }),
  el("br"),
  el("h2", ["Hours:"]),
  el("p", ["Sunday: 10am - 8pm"]),
  el("p", ["Monday: 8am - 6pm"]),
  el("p", ["Tuesday: 8am - 6pm"]),
  el("p", ["Wednesday: 8am - 6pm"]),
  el("p", ["Thursday: 8am - 6pm"]),
  el("p", ["Friday: 8am - 6pm"]),
  el("p", ["Saturday: 10am - 8pm"]),
])

const element = render(vdom)

export default () => element
