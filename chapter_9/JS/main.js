//DOM - Document Object Model

const view1 = document.getElementById("view1")
console.log(view1)

//Select elems by other means, not just id
const view2 = document.querySelector("#view2")
console.log(view2)

view1.style.display = "flex"
view2.style.display = "none"

/* 
    The difference between a html collection and a node list is that
    the collection has elems in it and the node list has obv. nodes 
    Nodes can be whitespaces elems, text, etc.
*/

const views = document.getElementsByClassName("view")
console.log(views)

const sameViews = document.querySelectorAll(".view")
console.log(sameViews)

const divs = view1.querySelectorAll("div")
console.log(divs)

const sameDivs = view1.getElementsByTagName("div")
console.log(divs)

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue"
    //evenDivs[i].style.width = "200px"
    //evenDivs[i].style.height = "200px"
}

const navText = document.querySelector("nav h1")
console.log(navText)

navText.textContent = "Monk"

const navbar = document.querySelector("nav")
navbar.style.backgroundColor = "purple"
navbar.innerHTML = `<h1>Hello</h1> <input type="text" placeholder="Search"/> <p>This sould align right</p>`
console.log(navbar)

navbar.style.justifyContent = "space-between"

console.log(evenDivs[0].parentElement)
console.log(evenDivs[0].parentElement.children)
console.log(evenDivs[0].parentElement.childNodes)
console.log(evenDivs[0].parentElement.hasChildNodes())
console.log(evenDivs[0].parentElement.firstChild)
console.log(evenDivs[0].parentElement.lastChild)
console.log(evenDivs[0].parentElement.lastElementChild)
console.log(evenDivs[0].parentElement.nextSibling)
console.log(evenDivs[0].parentElement.nextElementSibling)

view1.style.display = "none"
view2.style.display = "flex"
view2.style.flexDirection = "row"
view2.style.flexWrap = "wrap"
view2.style.margin = "10px"

while (view2.lastChild) {
    view2.lastChild.remove()
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div")
    newDiv.textContent = iter
    newDiv.style.backgroundColor = "black"
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"
    newDiv.style.margin = "10px"
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = "center"
    newDiv.style.alignItems = "center"
    parent.append(newDiv)
}

for (let i = 1; i < 13; i ++)
    createDivs(view2, i)