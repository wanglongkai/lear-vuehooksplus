import { ref, Ref } from 'vue'

type ReturnFileds<T, U> = [
  state: Ref<T | U>,
  {
    toggle: () => void
    set: (_value: T | U) => void
    setLeft: () => void
    setRight: () => void
  },
]

function useToggle<T = boolean, U = boolean>(leftValue?: T, rightValue?: U): ReturnFileds<T, U> {
  const state = ref<T | U>(leftValue ?? (true as T)) as Ref<T | U>

  const toggle = () => {
    state.value =
      state.value === leftValue ? (rightValue ?? (false as U)) : (leftValue ?? (true as T))
  }
  const set = (value: T | U) => {
    state.value = value
  }
  const setLeft = () => {
    state.value = leftValue ?? (true as T)
  }
  const setRight = () => {
    state.value = rightValue ?? (false as U)
  }

  return [
    state,
    {
      toggle,
      set,
      setLeft,
      setRight,
    },
  ]
}

export default useToggle
