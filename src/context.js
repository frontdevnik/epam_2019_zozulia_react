import { createContext, useContext } from 'react'

const Context = createContext({});

const useOfContext = () => useContext(Context)

export { Context, useOfContext}