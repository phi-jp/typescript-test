var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2.prototype.normalize = function () {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    };
    Vector2.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    Vector2.prototype.log = function () {
        console.log(this.toString());
    };
    return Vector2;
})();
window.onload = function () {
    var v = new Vector2(3, 4);
    console.log("v: " + v.toString());
    console.log("length: " + v.length());
    v.normalize();
    console.log("v: " + v.toString() + ", " + "length: " + v.length());
};
