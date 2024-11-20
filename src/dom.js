function createElement(tag, attrs = {}, children = []) {
    return { tag, attrs, children }
}

function render(vnode) {
    const el = document.createElement(vnode.tag)
    for (const attr in vnode.attrs) {
        el.setAttribute(attr, vnode.attrs[attr])
    }

    vnode.children.forEach(child => {
        if (typeof child === "string") {
            el.appendChild(document.createTextNode(child))
        } else {
            el.appendChild(render(child))
        }
    })

    return el
}

const vdom = createElement("div", 
    { 
        id: 'app'
    }, 
    [
        "FIRST",
        createElement("h1", null, ["Hello World!"]),
        createElement("p", null, ["This is a virtual DOM"])
    ]
)

const container = document.getElementById("container")
const el = render(vdom, container)
container.appendChild(el)