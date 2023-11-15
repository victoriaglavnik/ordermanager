class order {
    constructor(date, product) {
        this.date = date;
        this.product = product;
    }
}
class item {
    constructor(name, price, size, quantity){
        this.name = name;
        this.price = price;
        this.size = ("small", "medium", "large");
        this.quantity = quantity;
    }
}
 let getOrders = [
     {
         "order": new order("2.2.23", "coffee"),
         "item1": new item("vanilla coffee", "12", "medium", "1"),
     },
     {
         "order": new order("2.15.23", "tea"),
         "item2": new item("chi tea", "4", "small", "1"),
     },
 ];

module.exports = {getOrders}


