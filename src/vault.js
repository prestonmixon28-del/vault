"use strict";

function acccessVault(key) {
    if (key === "SECRET_123`") {
        return "Access granted to the vault!";
    } else {
        return "Access denied. Invalid key.";
    }
}

console.log(acccessVault("SECRET_123`"));
console.log(acccessVault("WRONG_KEY"));
console.log(accessVault("123345"));
console.log(acccessVault(""));