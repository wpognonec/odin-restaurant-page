import header from "./pages/header.js"
import home from "./pages/home.js"
import menu from "./pages/menu.js"
import about from "./pages/about.js"
import "./styles.css"

const body = document.querySelector("body")

body.appendChild(header())
body.appendChild(home())

const nav = document.querySelector("nav")

nav.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement) {
    console.log("clicked", e.target.id)
    switch (e.target.id) {
      case "home":
        document.getElementById("app").remove()
        body.appendChild(home())
        break
      case "menu":
        document.getElementById("app").remove()
        body.appendChild(menu())
        break
      case "about":
        document.getElementById("app").remove()
        body.appendChild(about())
        break
      default:
        break
    }
  }
})
