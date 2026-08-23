class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    products: Product[];

    constructor(products: Product[]) {
        this.products = products;
    }

    calculateTotal(): number {
        return this.products.reduce(
            (total, product) => total + product.price,
            0
        );
    }
}

const products = [
    new Product("Laptop", 1000),
    new Product("Mouse", 50),
    new Product("Keyboard", 100)
];

const order = new Order(products);

console.log("Total:", order.calculateTotal());
