import * as React from 'react'
import { observer } from 'mobx-react'
import { withInjection } from '../Core/Providers/Injection'
import { AuthorsPresenter } from './AuthorsPresenter'

export const AuthorsComp = observer((props) => {
  return (
    <>
      <h1>AUTHORS</h1>
    </>
  )
})

export const AuthorsComponent = withInjection({ presenter: AuthorsPresenter })(AuthorsComp)
