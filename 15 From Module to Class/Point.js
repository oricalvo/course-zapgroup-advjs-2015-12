
function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function show() {
        console.log(x + ", " + y);
    }

    function hide() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x += dx;
        y += dy;
    }

    return {
        dump: dump,
        show: show,
        hide: hide,
        move: move,
    };
}

var pt1 = Point(5, 10);
var pt2 = Point(5, 10);
console.log(pt1 == pt2);
console.log(pt1.dump == pt2.dump);

pt1.dump();

