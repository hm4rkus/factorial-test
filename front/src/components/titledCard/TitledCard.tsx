import React from 'react'

// Components
import { Card } from 'components/card'
import { Heading } from 'components/heading'

interface TitledCardProps {
  children: React.ReactNode
  title: string
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
}
export const TitledCard = ({
  children,
  title,
  size = 'md',
}: TitledCardProps) => (
  <Card>
    <Heading size={size}>{title}</Heading>
    {children}
  </Card>
)
