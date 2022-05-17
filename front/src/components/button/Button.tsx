import { Button as ChakraButton } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, disabled, type, onClick }: ButtonProps) => {
  return (
    <ChakraButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ChakraButton>
  )
}
