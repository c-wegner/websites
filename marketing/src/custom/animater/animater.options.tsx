export class Options{
  private _buffer = .2;
  private _peak = .7;
  repeat = false;

  start = {
    margin:{
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    opacity: 1,
    blur: 0,
  }

  move={
    up:0,
    right: 0,
    down: 0,
    left: 0
  }

  finish = {
    opacity: 1,
    blur: 0
  }

  set buffer(val:number){
    this._buffer = val/100;
  }

  get buffer():number{
    return this._buffer
  }

  set peak(val:number){
    this._peak = val/100
  }

  get peak():number{
    return this._peak
  }
}

export class Controls{
  private _options: Options;
  private _scrollingDown = true;
  private _onScreenRatio = 0;
  private _revealed = false;
  private _elementOffset = 0;
  private _pageOffset = 0;

  constructor(options){
    this._options = options
  }

  set onScreen(val){
    this._onScreenRatio = val
  }

  set ratio(val: number){
    if(val > this._onScreenRatio){
      this._scrollingDown = true;
    }else{
      this._scrollingDown = false;
    }
    this._onScreenRatio = val
  }

  get appliedRatio():number{
    const ratio = getAppliedRatio(this._onScreenRatio, this._options.buffer, this._options.peak)
    if(ratio>=.95){
      this._revealed =true
    }
    return ratio
  }

  get marginLeft(): string{
    return `${this._options.start.margin.left + (this._options.move.right * this.appliedRatio)}px`
  }

  get marginRight():string{
    return `${this._options.start.margin.right + (this._options.move.left * this.appliedRatio)}px` 
  }
}

function getAppliedRatio(ratio, buffer, target){
  let rawRatio =   ratio + buffer;
  return rawRatio>1? 1 : rawRatio
}