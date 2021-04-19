import { useEffect, useRef } from 'react'

export const useMenu = ({onClickInside, onClickOutside}) => {
  const ref = useRef()

  const handleClick = (e) => {
    if (ref.current.contains(e.target)) {
      onClickInside()
      return
    }
    onClickOutside()
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClick)
    return () => {
      document.removeEventListener('mouseup', handleClick)
    }
  }, [handleClick])

  return { ref, handleClick }
}
