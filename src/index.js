import { home } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";
import "./styles.css"

const app = document.querySelector("#content")
const nav = document.querySelector("nav")

nav.addEventListener("click", (e) => {
    if (e.target instanceof HTMLButtonElement) {
        console.log("clicked", e.target.id);
        switch (e.target.id) {
            case "home":
                app.textContent = home
                break;
            case "menu":
                app.textContent = menu
                break;
            case "about":
                app.textContent = about
                break;
            default:
                break;
        }
    }
})