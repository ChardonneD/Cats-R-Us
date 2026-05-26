

export const Interiors = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    // Start the dropdown with a default "choose an option" item
    let html = `<h2>Interiors</h2>`
    html += `<select id="interior">`
    html += `<option value="0">Select an interior style...</option>`
    
    //Map over the interiors array to create the option tags
    const optionsArray = interiors.map(
        (interior) => {
            return `<option value="${interior.id}">${interior.material}</option>`
        }
    )

    // Join the array and close the select tag
    html += optionsArray.join("")
    html += `</select>`

    return html
}   