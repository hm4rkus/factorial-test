import { Button as ChakraButton } from '@chakra-ui/react'
import React from 'react'
import { getStyleProps } from './button.styles'

interface ButtonProps {
  children: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  isSecondary?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  children,
  disabled,
  type,
  isSecondary,
  onClick,
}: ButtonProps) => {
  return (
    <ChakraButton
      {...getStyleProps(isSecondary)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ChakraButton>
  )
}
