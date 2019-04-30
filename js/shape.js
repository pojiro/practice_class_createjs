class Shape {
    constructor(x, y){

        this._shape = new createjs.Shape();
        this.x = x;
        this.y = y;
        this.fill(
            Math.floor(Math.random()*256),
            Math.floor(Math.random()*256),
            Math.floor(Math.random()*256)
        )
    }

    get x(){
        return this.shape.x;
    }

    set x(x){
        this.shape.x = x;
    }

    get y(){
        return this.shape.y;
    }

    set y(y){
        this.shape.y = y;
    }

    get w(){
        return this._w;
    }

    set w(w){
        this._w = w
    }

    get shape() {
        return this._shape;
    }

    get h(){
        return this._h;
    }

    set h(h){
        this._h = h;
    }

    fill(r, g, b) {
        this.shape.graphics.beginFill(createjs.Graphics.getRGB(r, g, b));
    }

    move(dx, dy){
        console.assert(this.stage !== undefined);

        if(this.stage.w < this.x) {
            this.x = -this.w;
        }
        if(this.stage.h < this.y) {
            this.y = -this.h;
        }

        this.x += dx;
        this.y += dy;
        // console.log(this.stage.height, this.y);
    }

    addTo(stage){
        console.assert(stage instanceof Stage);

        stage.addChild(this.shape);
        stage.update();

        this.stage = stage;
    }
}

class Circle extends Shape {
    constructor(x, y, r){
        super(x+r, y+r);
        this.r = r;
        this.draw();
    }

    get r(){
        return this._r;
    }

    set r(r) {
        this._r = r;
        this.w = r*2;
        this.h = r*2;
    }

    draw() {
        this.shape.graphics.drawCircle(0, 0, this._r);
    }
}

class Rectangle extends Shape {
    constructor(x, y, w, h){
        super(x, y);
        this.w = w;
        this.h = h;
        this.draw();
    }

    draw() {
        this.shape.graphics.drawRect(0, 0, this.w, this.h);
    }
}

class Star extends Shape {
    constructor(x, y, r){
        super(x+r, y+r);  // デフォルトはx, yが★の中心位置なのでずらす
        this.r = r;
        this.draw();
    }

    get r(){
        return this._r;
    }

    set r(r){
        this._r = r;
        this.w = 2*r;
        this.h = 2*r;
        return this;
    }

    draw(){
        this.shape.graphics.drawPolyStar(0, 0, this._r, 5, 0.6, -90);
    }
}