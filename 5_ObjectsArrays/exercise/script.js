// create your coffee object array here
let allOrders = [
    {
        item: "latte",
        milk: true,
        name: "Joe"
    },
    {
        item: "tea",
        milk: false,
        name: "Alice"
    }
];
/*constructor(item, milk, name) {
    this.item = item;
    this.milk = milk;
    this.name = name;
}

allOrders.push(personOrder);*/
// creat your print order function here
function printOrders(orders) {

    for (let i = 0; i < orders.length; i++) {
        let milky;
        let order = orders[i];

        if (order.milk) {
            milky = "with milk.";
        } else {
            milky = "without milk.";
        };

        console.log(`${order.name} has ordered a ${order.item} ${milky}`)
    }
}

printOrders(allOrders);
