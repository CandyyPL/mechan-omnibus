import { Wrapper } from '@/pages/Loading/Loading.styles'
import React from 'react'

const Loading = () => {
  document.title = 'Loading..'

  return (
    <Wrapper>
      <div className='lds-dual-ring'></div>
      <h1>Loading</h1>
    </Wrapper>
  )
}

export default Loading
