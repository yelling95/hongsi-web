import {useRef} from 'react'

const useDebounce = () => {
  const timerRef = useRef(null)

  const debounce = (callback, delay = 300) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    timerRef.current = setTimeout(() => {
      callback()
    }, delay)
  }

  const debounceClear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  return {debounce, debounceClear}
}

export default useDebounce
