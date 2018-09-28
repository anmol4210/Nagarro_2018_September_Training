"use strict";
var interfaces;
(function (interfaces) {
    class Fruit {
        constructor(taste) {
            this.taste = "asd";
            if (taste)
                this.taste = taste;
        }
    }
    let fruit = new Fruit("asd");
    let fruit2 = {
        taste: "akjb"
    };
    function eatFruit(f) { }
    eatFruit(fruit);
    eatFruit(fruit2);
})(interfaces || (interfaces = {}));
