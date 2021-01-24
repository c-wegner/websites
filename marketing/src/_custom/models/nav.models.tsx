export class Section{
  private _ref: any;
  
  constructor(
    public id = '',
    public title = '',
    public method = 'SCROLL_TO'
  ){}

  set ref(value: any){
    this._ref = value;
  }

  get ref():any{
    return this._ref.current;
  }
}

function getSectionById(sections: any[], id) {
  const l = sections.length;
  for (let i = 0; i < l; i++) {
    if (sections[i].id === id) return sections[i]
  }
  return new Section();
}

export function checkForSection(sections, id) {
  const l = sections.length;
  for (let i = 0; i < l; i++) {
    if (sections[i].id === id) { return true }
  }
  return false
}
