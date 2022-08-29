import { Wrapper } from '@/components/TopBar/TopBar.styles'
import React, { FC } from 'react'

interface Props {
  children?: React.ReactNode
}

const TopBar: FC<Props> = props => {
  return <Wrapper>{props.children}</Wrapper>
}

export default TopBar
