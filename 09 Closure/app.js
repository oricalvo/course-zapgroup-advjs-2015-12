function createCounter() {
    return {
        num: 0,
        inc: function () {
            console.log(this.num++);
        }
    };
}

var c1 = createCounter();
c1.inc();
c1.inc();

var c2 = createCounter();
c2.inc();
c2.inc();
