import { el } from "../../dom"

export function createAboutItem(_src, _text) {
  return el("div.flex-row", [
    el("img.svg", { src: _src, width: "48px" }),
    el("div", [el("h3", ["Phone"]), _text]),
  ])
}
