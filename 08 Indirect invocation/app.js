"use strict";

function g() {
    console.log(this);

    console.log("g");
}

//g();

var obj = {
    id: 123,
    dump: function () {
        console.log(this.id);
    }
};

//obj.dump();
var pObj = obj;
var pFunc = obj.dump;

pFunc.call(pObj, 1, 2, 3);
pFunc.apply(pObj, [1, 2, 3]);


