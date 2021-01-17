export class Options {
  buffer = 20;
  repeat = false;

  start = {
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    blur: 0,
    opacity: 1
  }

  move = {
    up: 0,
    right: 0,
    down: 0,
    left: 0
  }

  finish = {
    blur: 0,
    opacity: 1
  }

  get effectiveOpacityChange(){
    return  this.finish.opacity - this.start.opacity
  }

  get effectiveBlurChange(){
    return this.start.opacity - this.finish.blur
  }
}

export class Settings {
  ratio = 0;
  direction = 'down';
  options = new Options()

  get effectiveRatio() {
    const rawAppliedRatio = this.options.buffer + this.ratio
    return rawAppliedRatio < 1 ? rawAppliedRatio : 1
  }

  get margins() {
    const top = this.options.start.margin.top + (this.effectiveRatio * this.options.move.down)
    const right = this.options.start.margin.right + (this.effectiveRatio * this.options.move.left)
    const bottom = this.options.start.margin.bottom + (this.effectiveRatio * this.options.move.up)
    const left = this.options.start.margin.left + (this.effectiveRatio * this.options.move.right)
    return `${top}px ${right}px ${bottom}px ${left}px`
  }

  get opacity(){
    const fade = this.options.start.opacity+ (this.options.effectiveOpacityChange * this.effectiveRatio)
    return fade<1? fade : 1;
  }

  get blur(){
    const rawBlur = this.options.start.blur - (this.options.effectiveBlurChange * this.effectiveRatio)
  }
}