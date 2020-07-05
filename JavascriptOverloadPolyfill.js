Function.prototype.overload = function(thisArg, ...argsArray) {
    let prop = `${this.name}_${argsArray.length}`;
    let func = thisArg[prop];
    if (func) {
        return func.apply(thisArg, argsArray);
    }
    return this.apply(thisArg, argsArray);
};