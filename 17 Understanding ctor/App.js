function F() {
}

F.prototype.dump = function () {
}

//F.prototype.__proto__ <== Object.prototype

//obj.__proto__ = F.prototype;

var obj = new F();
obj.dump();
obj.toString();
