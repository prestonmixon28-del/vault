"use strict";

class InvalidKeyError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidKeyError";
    }

}

class VaultLockedError extends Error {
    constructor(message) {
        super(message);
        this.name = "VaultLockedError";
    }

}

function accessVault(key) {

    if (key === undefined || Number.isNaN(key)) {
        throw new InvalidKeyError("Invalid key provided.");
    }

    if (key !== "SECRET_123") {
        throw new VaultLockedError("Vault is locked. Invalid key.");
    }

    return "Access granted. Welcome to the vault!";
}

function attemptEntry(key) {
    try {
        console.log(accessVault(key));
    } catch (e) { 
        if (e instanceof InvalidKeyError) {
            console.log("security alert");
        } else if (e instanceof VaultLockedError) {
            console.log("user error");
        } else {
            throw e;
        }
    } finally {
        console.log("Attempt completed.");
    }
}

console.log(accessVault("SECRET_123"));
console.log(accessVault("WRONG_KEY"));
console.log(accessVault(undefined));
