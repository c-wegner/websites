export class Options{
  private _ratio = 0;
  private _priorRatio = 0;
  private _peaked = false;
  private _seen = false;
  private _visible = false;

  start={
    margin:{
      top:0,
      right: 0,
      bottom: 0,
      left: 0
    },

    blur: 0,
    fade: 1,
  }

  move={
    up: 0,
    right: 0,
    down: 0,
    left: 0,
  }

  finish={
    blur:0,
    fade:1
  }

  settings={
    reset: false,
    safety: 20,
    loop: false,
  }

  set ratio(val:number){
    if(val>0){
      this._seen =true;
      this._visible = true;
    }
    const ratioMod = this.settings.safety/100;
    const adjustedRatio = val + ratioMod;
    this._ratio = adjustedRatio>1? 1 :adjustedRatio;
  }
}

function getMargin(start, move, ratio, safety){
  
}