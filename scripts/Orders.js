// scripts/Orders.js
export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=paint&_expand=technology&_expand=wheel&_expand=interior")
    const orders = await fetchResponse.json()

    // Map the array of objects to an array of HTML strings
    const ordersHTML = orders.map(
        (order) => {
            if (!order.paint || !order.technology || !order.wheel || !order.interior) {
                return ""
            }
            // 2. Calculate the total price from the expanded objects
            const orderPrice = order.paint.price + order.technology.price + order.wheel.price + order.interior.price

            // 3. Format the number as currency (Optional, but highly recommended!)
            const formattedPrice = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })

            // 4. Return the HTML string with the calculated price
            return `
                <section class="order">
                    ${order.paint.color} car with ${order.wheel.style} wheels, ${order.interior.material} interior, and the ${order.technology.package} for a total cost of ${formattedPrice}
                </section>`
        }
    )

    // Join the array of strings into a single string
    return ordersHTML.join("")
}