import { Button as ChakraButton } from '@chakra-ui/react'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <ChakraButton onClick={onClick}>{children}</ChakraButton>
}
