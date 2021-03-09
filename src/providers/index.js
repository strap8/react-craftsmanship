import React from 'react'
import { MemoizedContextProvider } from 'ContextStore'
import { FormWithUseContextAndReducerContext } from 'context'
import { Forms, DEFAULT_STATE_FORMS } from 'redux/Form/reducer'

const FormWithUseContextAndReducerProvider = ({ children }) => (
  <MemoizedContextProvider
    context={FormWithUseContextAndReducerContext}
    reducers={Forms}
    initialState={DEFAULT_STATE_FORMS}
  >
    {children}
  </MemoizedContextProvider>
)

export { FormWithUseContextAndReducerProvider }
