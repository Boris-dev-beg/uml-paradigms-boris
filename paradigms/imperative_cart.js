Products_list = [
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

function Cal_Total_Cost(Products_list = []) {
    let total = 0;
    Products_list.map((product) => (
        total += product.price
    ))
    return total;
}

function Add_Discount(Total_cost){
    if (Total_cost > 50000){
        discount = Total_cost * 0.1
        console.log(`The discount is : ${discount}.`);
        return (Total_cost - discount)
    }
    else{
        return Total_cost
    }
}

let Total_cost = Cal_Total_Cost(Products_list)
console.log(`The total cost is : ${Total_cost}.`);

let final_cost = Add_Discount(Total_cost)

console.log(`The Final cost is : ${final_cost}.`);