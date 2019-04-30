class Stage {
    constructor(id){
        this._stage = new createjs.Stage(id);
        this.element = document.getElementById(id);
    }

    get stage(){
        return this._stage;
    }

    addChild(shape){
        this.stage.addChild(shape);
    }

    update(){
        this.stage.update();
    }

    get w() {
        return this.element.clientWidth;
    }

    get h() {
        return this.element.clientHeight;
    }
}