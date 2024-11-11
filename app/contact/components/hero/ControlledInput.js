'use client'

import { useRef, useState, useEffect } from 'react'
import { CustomInput } from './styles'

export const ControlledInput = (props) => {
  const { value, onChange, ...rest } = props
  const [cursor, setCursor] = useState(null)
  const ref = useRef(null)
  useEffect(() => {
    const input = ref.current
    if (input) input.setSelectionRange(cursor, cursor)
  }, [ref, cursor, value])
  const handleChange = (e) => {
    setCursor(e.target.selectionStart)
    onChange && onChange(e)
  }
  return (
    <CustomInput ref={ref} value={value} onChange={handleChange} {...rest} />
  )
}
