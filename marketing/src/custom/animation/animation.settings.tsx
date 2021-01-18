export class Settings{
    private _rightToLeft = false;
    ratio =0;
    safety = 20;
    marginTop = 0;
    marginBottom = 0;
    marginRight = 0;
    marginLeft = 0;
    move = 0;
    blur = 0;
    blurTo = 0;
    fade = 0;
    fadeTo = 1;
    repeat = false;
    elementPosition =0;

    getMarginRight(){
        if(this._rightToLeft) return this.marginRight;
        const newMargin = this.marginRight + (this.move * appliedRatio(this.ratio, this.safety))
        return newMargin 
    }
    
    getMarginLeft(){
        if(this._rightToLeft) return this.marginLeft;   
        const newMargin = this.marginLeft + (this.move * appliedRatio(this.ratio, this.safety))
        return newMargin
    }

    getOpacity(){
        const delta = this.fadeTo -this.fade;
        return this.fade + (delta * appliedRatio(this.ratio, this.safety))
    }

    getBlur(){
        const delta = this.blurTo -this.blur;
        const val = this.blur + (delta * appliedRatio(this.ratio, this.safety))
        return val
    }

    setRatio(elePosition, pageSize){
        this.elementPosition = elePosition
        return pageSize/elePosition
    }
    
    static leftToRight(start=0, distance=0){
        let temp = new Settings();
        temp.marginLeft = start;
        temp.move = distance;
        temp._rightToLeft = false;
        return temp;
    }

    static rightToLeft(){
        let temp = new Settings();
        temp._rightToLeft = true;
        return temp;
    }
}

function appliedRatio(ratio = 0, safety= 0){
    const safetyFactor = safety/100;
    const tempRatio = ratio+ safetyFactor;
    return tempRatio > 1? 1 : tempRatio
}