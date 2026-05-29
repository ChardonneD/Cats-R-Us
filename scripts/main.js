import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Interiors } from "./Interiors.js"
import { SaveOrderButton } from "./CustomOrder.js"
import { Orders } from "./Orders.js" // import orders

const mainContainer = document.querySelector("#mainContainer")



const renderAllHTML = async () => {
    const paintsHTML = await Paints()
    const technologiesHTML = await Technologies()
    const wheelsHTML = await Wheels()
    const interiorsHTML = await Interiors()
    const saveOrderButtonHTML = SaveOrderButton()
    const ordersHTML = await Orders() // get the orders HTML
    
    mainContainer.innerHTML = `
        <section class="choices">
            <section class="choices__paints options">
                ${paintsHTML}
            </section>
            <section class="choices__interior options">
                ${interiorsHTML}
            </section>
        </section>
        
        <section class="choices">
            <section class="choices__wheels options">
                ${wheelsHTML}
            </section>
            <section class="choices__technologies options">
                ${technologiesHTML}
            </section>
        </section>

        <section>
            ${saveOrderButtonHTML}
        </section>

        <section class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTML}
        </section>
    `
}

renderAllHTML()
//Listen for CustomOrder event 
document.addEventListener("CustomOrder", () => {
    renderAllHTML()
})