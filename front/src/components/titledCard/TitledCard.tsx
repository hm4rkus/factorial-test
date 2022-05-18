import React from 'react'

// Components
import { Card, Heading } from 'components'

// Constants
import { DEFAULT_TITLE_SIZE } from './titledCard.constants'

// Types
import { HeadingSize } from 'types/HeadingSize'

interface TitledCardProps {
  children: React.ReactNode
  title: string
  size?: HeadingSize
}
export const TitledCard = ({
  children,
  title,
  size = DEFAULT_TITLE_SIZE,
}: TitledCardProps) => (
  <Card>
    <Heading size={size}>{title}</Heading>
    {children}
  </Card>
)
