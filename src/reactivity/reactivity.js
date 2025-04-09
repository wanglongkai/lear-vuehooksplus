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

/**
 * * 1. 通过Proxy实现响应式对象
 * * 2. 通过WeakMap存储对象的依赖关系
 * * 3. 通过Map存储对象的属性的依赖关系
 */
let targetsMap = new WeakMap()
export function reactive(raw) {
  return new Proxy(raw, {
    // 收集依赖
    get(target, key) {
      let dep = getDep(target, key)
      dep.depend()
      return Reflect.get(target, key)
    },

    // 触发依赖
    set(target, key, value) {
      let dep = getDep(target, key)
      const result = Reflect.set(target, key, value) // 先设置值
      dep.notify() // 通知依赖更新
      return result
    },
  })
}

function getDep(target, key) {
  let depsMap = targetsMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetsMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}
