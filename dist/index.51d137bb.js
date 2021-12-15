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
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
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
    return Parrot;
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
    Zoo.prototype.makeSound = function(animal) {
        switch(animal.type){
            case 'cat':
                return 'Miauw';
            case 'dog':
                return 'Woef';
            case 'parrot':
                return 'I am a pirate';
            default:
                throw new Error('Unknown type: ' + animal.type);
        }
    };
    return Zoo;
}();
var zoo = new Zoo1;
zoo.addAnimal(new Cat1);
zoo.addAnimal(new Dog1);
zoo.addAnimal(new Parrot1);
zoo.animals.forEach(function(animal) {
    document.querySelector('#target').innerHTML += animal.type + ": " + zoo.makeSound(animal) + "<br>";
});

//# sourceMappingURL=index.51d137bb.js.map
