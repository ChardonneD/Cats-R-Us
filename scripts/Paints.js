import { setPaintId } from "./TransientState.js"

// Listen for changes to the paint dropdown
document.addEventListener("change", (event) => {
    if (event.target.id === "paint") {
        const selectedPaintId = parseInt(event.target.value)
        setPaintId(selectedPaintId)
    }
})

// scripts/Paints.js

export const Paints = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    // Start the dropdown with a default "choose an option" item
    let html = `<h2>Paints</h2>`
    html += `<select id="paint">`
    html += `<option value="0">Select a paint color...</option>`

    // Map over the paints array to create the option tags
    const optionsArray = paints.map(
        (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    // Join the array and close the select tag
    html += optionsArray.join("")
    html += `</select>`

    return html
}