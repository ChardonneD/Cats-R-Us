import { Paints } from "./paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"

const mainContainer = document.querySelector("#mainContainer")

const renderAllHTML = async () => {
    const paintsHTML = await Paints()
    const technologiesHTML = await Technologies()
    const wheelsHTML = await Wheels()
    
    
    mainContainer.innerHTML = 
    `${paintsHTML}
     ${technologiesHTML}
     ${wheelsHTML}
     `
}

renderAllHTML()
