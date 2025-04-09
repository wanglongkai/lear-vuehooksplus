import { Ref, effect, reactive } from './reactivity.js'

const a = new Ref(10)
let b = 0

effect(() => {
  b = a.value + 1
  console.log('b=====>', b)
})

a.value = 20

const a1 = new Ref(100)
let b1 = 0

effect(() => {
  b1 = a1.value + 1
  console.log('b1=======>', b1)
})

a1.value = 200

const a3 = reactive({
  name: 'zhangsan',
})
effect(() => {
  console.log('name=====>', a3.name)
})

a3.name = 'lisi'
