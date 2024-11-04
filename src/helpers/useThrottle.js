import {useRef} from 'react'

const useThrottle = () => {
  const timerRef = useRef(null)

  const throttle = (callback, delay) => {
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        callback()
        timerRef.current = null
      }, delay)
    }
  }

  const throttleClear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  return {throttle, throttleClear}
}

export default useThrottle
