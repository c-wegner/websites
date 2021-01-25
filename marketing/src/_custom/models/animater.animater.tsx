export class Options {
  private _peak = .7;
  private _buffer = .2;

  start = {
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    opacity: 1,
    blur: 0
  }

  move = {
    up: 0,
    right: 0,
    down: 0,
    left: 0,
  }

  end = {
    opacity: 1,
    blur: 0,
  }

  set peak(value) {
    if (value > 1) {
      this._peak = value;
    } else {
      this._peak = value / 100;
    }
  }

  set buffer(value) {
    if (value > 1) {
      this._buffer = value;
    } else {
      this._buffer = value / 100;
    }
  }
}

export class Control {
  private _scrollingDown = true;
  private _options: Options;
  private _viewableRatio = 0;
  private _pageYOffset = 0;
  private _elementYOffset = 0;

  update(viewableRato, pageYOffset) {
    this._viewableRatio = viewableRato;
    if (this._pageYOffset < pageYOffset) {
      this._scrollingDown = true;
    } else {
      this._scrollingDown = false;
    }
    this._pageYOffset = pageYOffset;
  }

  get margin(){
    const start = this._options.start.margin
    const move = this._options.move
    
    return `
    
    `
  }
}