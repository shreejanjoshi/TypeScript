//This is called a Union, the discountType can only contain the following 2 values:
type discountType = "variable" | "fixed" | "none";

//export class Discount {

interface Discount{
    //private _type: discountType;

    apply(price : number) : number;

    showCalculation(price : number) : string;
}

class FixedDiscount implements Discount{
    _value: number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        return  Math.max(0, price - this._value);
    }

    showCalculation(price: number): string {
        return price + "€ -  "+ this._value +"€ (min 0 €)";
    }
}

class VariableDiscount implements Discount{
    _value: number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        return (price - (price * this._value / 100));
    }

    showCalculation(price: number): string {
        return price + " € -  "+ this._value +"%";
    }
}

class NoDiscount implements Discount{
    _value: number;

    constructor() {
        this._value = 0;
    }

    apply(price: number): number {
        return price;
    }

    showCalculation(price: number): string {
        return "No discount";
    }
}

class Product {
    private _name : string;
    private _price : number;
    private _discount : Discount;

    constructor(name: string, price: number, discount: Discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }

    get name(): string {
        return this._name;
    }

    get discount(): Discount {
        return this._discount;
    }

    get originalPrice(): number {
        return this._price;
    }

    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() : number {
        return this._discount.apply(this._price);
    }

    showCalculation() : string {
        return this._discount.showCalculation(this._price);
    }
}

class shoppingBasket {
    //this array only accepts Product objects, nothing else
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    addProduct(product: Product) {
        this._products.push(product);
    }
}

let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount("fixed", 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount("variable", 25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount("none")));

const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);

    tableElement.appendChild(tr);
});