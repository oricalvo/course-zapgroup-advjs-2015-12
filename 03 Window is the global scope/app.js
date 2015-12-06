"use strict";

var obj = {
    id: 123,
    dump: function () {
        this.id = 456;

        console.log(this.id);
    }
};

var func = obj.dump;
func();
