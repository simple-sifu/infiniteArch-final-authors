import * as React from 'react'
import { observer } from 'mobx-react'

export const LastAddedBookComponent = observer((props) => {
  console.log('LastAddedBookComponent lastAddedBook=', props.lastAddedBook)
  return (
    <>
      <p>Last Added Book : {props.lastAddedBook}</p>
    </>
  )
})
