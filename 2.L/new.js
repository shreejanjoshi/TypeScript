var FixedDiscount = /** @class */ (function () {
    function FixedDiscount(value) {
        this._value = value;
    }
    FixedDiscount.prototype.apply = function (price) {
        return Math.max(0, price - this._value);
    };
    FixedDiscount.prototype.showCalculation = function (price) {
        return price + "€ -  " + this._value + "€ (min 0 €)";
    };
    return FixedDiscount;
}());
var VariableDiscount = /** @class */ (function () {
    function VariableDiscount(value) {
        this._value = value;
    }
    VariableDiscount.prototype.apply = function (price) {
        return (price - (price * this._value / 100));
    };
    VariableDiscount.prototype.showCalculation = function (price) {
        return price + " € -  " + this._value + "%";
    };
    return VariableDiscount;
}());
var NoDiscount = /** @class */ (function () {
    function NoDiscount() {
        this._value = 0;
    }
    NoDiscount.prototype.apply = function (price) {
        return price;
    };
    NoDiscount.prototype.showCalculation = function (price) {
        return "No discount";
    };
    return NoDiscount;
}());
var Product = /** @class */ (function () {
    function Product(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "originalPrice", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    Product.prototype.calculatePrice = function () {
        return this._discount.apply(this._price);
    };
    Product.prototype.showCalculation = function () {
        return this._discount.showCalculation(this._price);
    };
    return Product;
}());
var shoppingBasket = /** @class */ (function () {
    function shoppingBasket() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    Object.defineProperty(shoppingBasket.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: false,
        configurable: true
    });
    shoppingBasket.prototype.addProduct = function (product) {
        this._products.push(product);
    };
    return shoppingBasket;
}());
var cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount("fixed", 10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount("variable", 25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount("none")));
var tableElement = document.querySelector('#cart tbody');
cart.products.forEach(function (product) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
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
