const transientState = {
    paintId: 0,
    technologyId: 0,
    wheelId: 0,
    interiorId: 0
}


    // Functions to modify each property of transient state
export const setPaintId = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log("Transient State updated:", transientState)
}

export const setTechnologyId = (chosenTechnology) => {
    transientState.technologyId = chosenTechnology
    console.log("Transient State updated:", transientState)
}

export const setWheelId = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log("Transient State updated:", transientState)
}

export const setInteriorId = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log("Transient State updated:", transientState)
}

export const CustomOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    //sent the transient state to the API to create a new order
    const response = await fetch("http://localhost:8088/orders", postOptions)

    //Broadcast a custom Cat Order event that the state has changed and a new order has been created
    const customEvent = new CustomEvent("CustomCatOrder")
    document.dispatchEvent(customEvent)
}