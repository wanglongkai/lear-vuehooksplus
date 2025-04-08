import { readonly, ref, Ref } from 'vue'

type ReturnFileds<T> = [
  state: Readonly<Ref<Set<T>>>,
  {
    add: (_value: T) => void
    remove: (_value: T) => void
    clear: () => void
    reset: () => void
    has: (_value: T) => boolean
  },
]

function useSet<T = unknown>(initialValue: T[] = []): ReturnFileds<T> {
  const state = ref<Set<T>>(new Set(initialValue))

  const add = (value: T) => {
    //@ts-ignore
    state.value.add(value)
  }

  const remove = (value: T) => {
    //@ts-ignore
    state.value.delete(value)
  }

  const clear = () => {
    state.value.clear()
  }

  const reset = () => {
    state.value = new Set(initialValue)
  }

  const has = (value: T) => {
    //@ts-ignore
    return state.value.has(value)
  }

  return [
    readonly(state) as Readonly<Ref<Set<T>>>,
    {
      add,
      remove,
      clear,
      reset,
      has,
    },
  ]
}

export default useSet
