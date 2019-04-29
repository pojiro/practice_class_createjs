class Shape {
    constructor(x, y){
        this.shape = new createjs.Shape();
        this.shape.x = x;
        this.shape.y = y;
    }


    getShape() {
        return this.shape;
    }

    fill(color) {
        this.shape.graphics.beginFill(color);
    }

    move(dx, dy){
        // console.assert(this.stage !== undefined);
        if(this.stage.width < this.shape.x) {
            this.shape.x = 0;
        }
        if(this.stage.height < this.shape.y) {
                // this.shape.y = -this.height;
            this.shape.y = 0;
        }

        this.shape.x += dx;
        this.shape.y += dy;

        // console.log(this.stage.height, this.shape.y);
    }

    addTo(stage){
        // console.assert(stage instanceof Stage);
        stage.addChild(this.shape);
        this.stage = stage;

        // this.stage.update();
    }
}

class Circle extends Shape {
    constructor(x, y){
        super(x, y);
        this.fill("Red");
        this.draw();
    }

    draw() {
        this.getShape().graphics.drawCircle(0,0,50);
    }
}

class Rectangle extends Shape {
    constructor(x, y){
        super(x, y);
        this.fill("Green");
        this.draw();
    }

    draw(sx ,sy, width, height) {
        // this.getShape().graphics.drawRect(sx, sy ,width, height);
        this.getShape().graphics.drawRect(0,0,200,100);
        this.width = 200;
        this.height = 100;
    }
}

class Star extends Shape {
    constructor(x, y, color){
        super(x, y);
        console.assert(color !== undefined);
        this.fill(color);
        this.draw();
    }

    draw(){
        this.getShape().graphics.drawPolyStar(0, 0, 75, 5, 0.6, -90);
    }
}