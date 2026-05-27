// scripts/Wheels.js

export const Wheels = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    // Start the dropdown with a default "choose an option" item
    let html = `<h2>Wheels</h2>`
    html += `<select id="wheel">`
    html += `<option value="0">Select a wheel style...</option>`

    // Map over the wheels array to create the option tags
    const optionsArray = wheels.map(
        (wheel) => {
        return `<option value="${wheel.id}">${wheel.style}</option>`
        }
    )

    // Join the array and close the select tag
    html += optionsArray.join("")
    html += `</select>`

    return html
}