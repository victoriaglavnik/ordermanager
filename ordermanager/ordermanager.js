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
const allorders = [
    new order('2.2.23', 'coffee'),
    new item('vanilla coffee', '12', 'medium', '1'),
    new order('2.15.23', 'tea'),
    new item('chi tea', '4', 'small', '1'),
];

exports.getRandomorder = () => {
    return allorders[Math.floor(Math.random() * allorders.length)];
}
exports.getRandomitem = () => {
    return allorders[Math.floor(Math.random() * allorders.length)];
}
exports.allorders = allorders;


