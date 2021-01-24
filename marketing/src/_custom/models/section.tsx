export class SectionClass {
  _ref: any;

  constructor(
    public id = '',
    public label = '',
    public method = 'SCROLL'
  ) { }

  set ref(value: any) {
    this._ref = value
  }

  get ref() {
    return this._ref.current
  }
}