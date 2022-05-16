import React from 'react'

// Components
import { Card } from 'components/card'
import { Heading } from 'components/heading'

interface TitledCardProps {
  children: React.ReactNode
  title: string
}
export const TitledCard = ({ children, title }: TitledCardProps) => (
  <Card>
    <Heading size={'md'}>{title}</Heading>
    {children}
  </Card>
)
