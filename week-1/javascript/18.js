/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cart = [];
const AskCustomer = () => {
    let items = { name: "", price: 0}
    if(cart.length >= 10)
    {
        console.log("You can no longer add more items to your cart.")
        removeToCart(items)
    }
    rl.question('Do you want to add items to your cart ? type Yes or No: ', (message) => {
        if(message.toLowerCase() === "yes" )
        {
          rl.question('What is the item name ? ', (name) => { 
            items.name = name
            rl.question('How much the price of the item ? ', (price) => {
                items.price = parseInt(price)
                addtoCart(items);
            })
          })
        } 
        else
        {
            removeToCart(items)
        }
       });
};

const addtoCart = (items) => {
    rl.question(`Do you want to save this items: [ ${items.name} , ${items.price} ] to your cart? type Yes or No: `, (confirmMsg) => {
        if(confirmMsg.toLowerCase() === "yes")
        {
            console.log("=================== Cart Information ===================")
            cart.push(items);
            console.log(`Your current items in cart:`);
            console.log(cart);
            console.log(`Total number of items in cart: ${cart.length}`);
            console.log(`Total price of items in cart: ${cart.map(items => items.price).reduce((acc,curr) => acc + curr, 0)}`);
            console.log("=======================================================")
            AskCustomer();
        }
        else
        {
            console.log("================== Cart Information ==================")
            console.log(`Your current items in cart:`);
            console.log(cart);
            console.log(`Total number of items in cart: ${cart.length}`);
            console.log(`Total price of items in cart: ${cart.map(items => items.price).reduce((acc,curr) => acc + curr, 0)}`);
            console.log("========================================================")
            AskCustomer();
        }
    })
}

const removeToCart = (items) => {

    rl.question('Do you want to remove some items from the cart ? type Yes or No: ', (message) => {
        if(message.toLowerCase() === "no"){
         rl.close();
         console.log("================== Cart Information ==================")
         console.log(`Your current items in cart:`);
         console.log(cart);
         console.log(`Total number of items in cart: ${cart.length}`);
         console.log(`Total price of items in cart: ${cart.map(items => items.price).reduce((acc,curr) => acc + curr, 0)}`);
         console.log("======================================================")
         console.log("Exiting");
        }
        else
        {
         if(cart.length === 0)
         {
             console.log("cart is empty");
             AskCustomer();
         }
         else
         {
             console.log(`Your current items in cart:`);
             console.log(cart);
             rl.question('Select the name of item you want to remove from your cart: ', (select_name) => {
                let new_cart = cart.filter(item => item.name !== select_name)
                cart = new_cart
                console.log("================== Cart Information ==================")
                console.log(`Your current items in cart:`);
                console.log(cart);
                console.log(`Total number of items in cart: ${cart.length}`);
                console.log(`Total price of items in cart: ${cart.map(items => items.price).reduce((acc,curr) => acc + curr, 0)}`);
                console.log("=====================================================")
                AskCustomer();
             })
         }
        } 
    })
}

AskCustomer();