    // scripts/Technologies.js

export const Technologies = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technologies = await response.json()

    // Start the dropdown with a default "choose an option" item
    let html = `<h2>Technologies</h2>`
    html += `<select id="technology">`
    html += `<option value="0">Select a technology package...</option>`

    // Map over the technologies array to create the option tags
    const optionsArray = technologies.map(
        (technology) => {
        return `<option value="${technology.id}">${technology.package}</option>`
        }
    )

    // Join the array and close the select tag
    html += optionsArray.join("")
    html += `</select>`

    return html
}