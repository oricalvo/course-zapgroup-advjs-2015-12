declare var $;

//
//  My comment
//
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x + ", " + this.y);

        $("ddd");
    }
}

var pt = new Point(5, 10);
pt.dump();

