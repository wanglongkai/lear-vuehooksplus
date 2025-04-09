export class Dep {
  subs
  constructor() {
    this.subs = new Set()
  }
  depend() {
    if (activeEffect) {
      this.subs.add(activeEffect)
    }
  }
  notify() {
    this.subs.forEach((effect) => {
      effect()
    })
  }
}

/**全局存储当前激活的effect */
let activeEffect = null
export function effect(fn) {
  activeEffect = fn
  fn()
  activeEffect = null
}

export class Ref {
  _value
  dep = new Dep()
  constructor(value) {
    this._value = value
  }
  get value() {
    this.dep.depend()
    return this._value
  }
  set value(value) {
    this._value = value
    this.dep.notify()
  }
}
