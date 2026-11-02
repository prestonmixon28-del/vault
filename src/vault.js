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

function testCorrectKey() {
    return accessVault("SECRET_123") === "Access granted. Welcome to the vault!";
}

function testIncorrectKey() {
    try {
        accessVault("WRONG_KEY");
    } catch (e) {
        return e instanceof VaultLockedError;
    }
    return false;
}

function testWrongKeyType() {
    try {
        accessVault("wrong_key_type");
        return false;
    } catch (e) {
        return e instanceof InvalidKeyError;
    }
}

console.log(accessVault("SECRET_123"));
console.log(accessVault("WRONG_KEY"));
console.log(accessVault(undefined));
console.log("correct key", testCorrectKey());
console.log("incorrect key", testIncorrectKey());
console.log("wrong key type", testWrongKeyType());

console.log("extra tests");

attemptEntry("");
attemptEntry(123);
attemptEntry(null);
attemptEntry({});
attemptEntry([]);
attemptEntry(NaN);
