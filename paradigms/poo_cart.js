class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Cart {
    constructor(){
        this.products = [];
    }
    add_product(product){
        this.products.push(product);
    }
    get_total(){
        let total = 0;
        this.products.map((prop)=> (
            total += prop.price
        ))
        return total;
    }
    apply_discount(total){
        if (total > 50000){
            let discount = total * 0.1;
            console.log(`The discount is : ${discount}.`);
            return (total - discount);
        }
        else{
            return total;
        }
    }
}