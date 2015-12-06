function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.dump = function () {
    console.log(this.x + ", " + this.y);
}

Point.prototype.show = function () {
    console.log(this.x + ", " + this.y);
}

var pt1 = new Point(5, 10);
pt1.dump();
pt1.show();

var pt2 = new Point(5, 10);
pt2.dump();

console.log(pt1.dump == pt2.dump);

//function f(pt) {
//    pt.x = 123;
//}

//var pt = {
//};

//f(pt);

//var pt = {
//    id: 1,
//    name: "Ori",
//};