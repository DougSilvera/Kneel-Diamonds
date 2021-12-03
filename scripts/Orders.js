import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const styles = getStyles()
const metals = getMetals()
const sizes = getSizes()
const order = getOrders()


const buildOrderListItem = (order) => {
    const foundMetals = metals.find((metal) => {return metal.id === order.metalId})
    const foundStyles = styles.find((style) => {return style.id === order.styleId})
    const foundSizes = sizes.find((size) => {return size.id === order.styleId})
    
    const totalCost = foundMetals.price + foundStyles.price + foundSizes.price;
    
    const costString = totalCost.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} costs ${costString}
    </li>`
}

export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
   const orders = getOrders()
   
   let html = "<ul>"
   
   const listItems = orders.map(buildOrderListItem)
   
   html += listItems.join("")
   html += "</ul>"
   
   return html
}
