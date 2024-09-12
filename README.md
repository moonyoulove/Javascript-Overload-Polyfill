# Javascript-Overload-Polyfill

Usage:

```javascript
function a() {
    console.log("參數長度未有相對應overload函數，呼叫原函數");
}
```
```javascript
function a_0() {
    console.log("參數長度為0");
}
```
```javascript
function a_1(name) {
    console.log("參數長度為1", name);
}
```
```javascript
function a_2(name, age) {
    console.log("參數長度為2", name, age);
}
```
```javascript
a.overload(this);
a.overload(this,"Andy");
a.overload(this,"Andy",18);
```
