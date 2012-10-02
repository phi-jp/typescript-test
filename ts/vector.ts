/*
 * vector.ts
 */


class Vector2 {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    set(x: number, y: number) {
        this.x = x;
        this.y = y;
        return this;
    }
    
    length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    
    normalize() {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    }
    
    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
    
    log() {
        console.log( this.toString() );
    }
}


window.onload = function() {
    var v = new Vector2(3, 4);
    
    // v
    console.log("v: " + v.toString());
    // length test
    console.log("length: " + v.length());
    // normalize test
    v.normalize();
    console.log("v: " + v.toString() + ", " + "length: " + v.length());
};



