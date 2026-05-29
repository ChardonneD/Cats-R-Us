import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Interiors } from "./Interiors.js"
import { SaveOrderButton } from "./SaveOrder.js"
import { Orders } from "./Orders.js" // import orders

const mainContainer = document.querySelector("#mainContainer")



const renderAllHTML = async () => {
    const paintsHTML = await Paints()
    const technologiesHTML = await Technologies()
    const wheelsHTML = await Wheels()
    const interiorsHTML = await Interiors()
    const saveOrderButtonHTML = SaveOrderButton()
    const ordersHTML = await Orders() // get the orders HTML
    
    mainContainer.innerHTML = 
    `${paintsHTML}
     ${interiorsHTML}
     ${technologiesHTML}
     ${wheelsHTML}
        ${saveOrderButtonHTML}
        <h2>Orders</h2>
        ${ordersHTML}

     `
}

renderAllHTML()
//Listen for CustomOrder event 
document.addEventListener("CustomOrder", () => {
    renderAllHTML()
})