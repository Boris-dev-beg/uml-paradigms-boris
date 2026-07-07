const Products_list = [
    {
        id: 1,
        name: "Product 1",
        price: 40000,
        quantity: 0
    },
    {
        id: 2,
        name: "Product 2",
        price: 10000,
        quantity: 0
    },
    {
        id: 3,
        name: "Product 3",
        price: 7000,
        quantity: 0
    }
];

// ! Variables to store the total cost, discount and final cost
let total_cost = 0;
let discount = 0;
let final_cost = 0;

// ! Looping through the products list to calculate the total cost
for (let i=0; i<= Products_list.length; i++){
    total_cost += Products_list[i].price
}

console.log(`The total cost is: ${total_cost}.`)

// ! Checking if the total cost is greater than 50000 to apply discount
if (total_cost > 50000){
    discount = total_cost * 0.1
    console.log(`The discount is: ${discount}.`)
    final_cost += (total_cost - discount)
}
else{
    final_cost += total_cost
}

console.log(`The final cost is: ${final_cost}`)