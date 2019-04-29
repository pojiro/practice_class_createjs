class Stage {
    constructor(id){
        this.stage = new createjs.Stage(id);
        this.element = document.getElementById(id);
        console.log(this.height);
    }

    getStage(){
        return this.stage;
    }

    addChild(shape){
        this.stage.addChild(shape);
    }

    update(){
        this.stage.update();
    }

    get width() {
        return this.element.clientWidth;
    }

    get height() {
        return this.element.clientHeight;
    }
}