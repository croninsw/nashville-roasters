import { createOrder } from "./CreateOrder.js"



/*
    Use the `as` keyword to alias a function
    name from another module to use in this module
    when there is a naming conflict
*/
import { createOrder as postOrder } from "./DataManager.js"

const $ = document.querySelector.bind("document")
const buyButton = document.querySelector("#placeOrder")

buyButton.addEventListener("click", () => {
    // Collect user input
    const name = $("customerName").value;
    const quantity = $("productQuantity").value;
    const productId = $("productName").value;
    const sizeId = $("productSize").value;

    // Build order object from input
    const newOrderObject = createOrder(name, quantity, productId, sizeId)

    // POST to API (x)
    postOrder(newOrderObject)

    // Build new card from current order

    // Append new card to DOM
})