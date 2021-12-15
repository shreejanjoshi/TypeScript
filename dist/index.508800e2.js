var Dog1 = function() {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function() {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function() {
        return 'Woef';
    };
    return Dog;
}();
var Cat1 = function() {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function() {
            return 'Miauw';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function() {
        return 'Woef';
    };
    return Cat;
}();
var Parrot1 = function() {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function() {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function() {
        return 'I am a pirate';
    };
    return Parrot;
}();
var Lion1 = function() {
    function Lion() {
    }
    Object.defineProperty(Lion.prototype, "name", {
        get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lion.prototype, "type", {
        get: function() {
            return 'lion';
        },
        enumerable: false,
        configurable: true
    });
    Lion.prototype.makeSound = function() {
        return 'Warr';
    };
    return Lion;
}();
var Zoo1 = function() {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function(animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function() {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}();
var zoo = new Zoo1;
zoo.addAnimal(new Cat1);
zoo.addAnimal(new Dog1);
zoo.addAnimal(new Parrot1);
zoo.addAnimal(new Lion1);
zoo.animals.forEach(function(animal) {
    document.querySelector('#target').innerHTML += animal.type + ": " + animal.makeSound(animal) + "<br>";
});

//# sourceMappingURL=index.508800e2.js.map
