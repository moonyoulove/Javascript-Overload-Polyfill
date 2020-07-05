# Javascript-Overload-Polyfill

用法:

function a() {
    console.log("參數長度未有相對應overload函數，呼叫原函數");
}

function a_0(name) {
    console.log("參數長度為0", name);
}

function a_1(name) {
    console.log("參數長度為1", name);
}

function a_2(name, age) {
    console.log("參數長度為2", name, age);
}

a.overload(this);
a.overload(this,"Andy");
a.overload(this,"Andy",18);
