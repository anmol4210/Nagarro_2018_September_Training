"use strict";
function add(a, b) {
    return a + b;
}
function concat(a, b) {
    return a + b;
}
add(concat(1, 2).toString(), "" + concat(3, 4));
