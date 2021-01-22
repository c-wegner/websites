import { settings } from "cluster";

export class Section{
    id='';
    title = '';
    private _target = null;
    method = '';

    set ref(val){
        this._target = val
    }

    get ref(){
        return this._target.current
    }

    set target(val){
        this._target = val
    }

    get target(){
        return this._target
    }
}

export class Controller{
    sections: Section[]
    current: Section;
    constructor(){
        this.sections = []
        this.current = new Section()
    }
}