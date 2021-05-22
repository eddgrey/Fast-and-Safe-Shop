import { createContext, useState } from "react"

export const currentLocationContext = createContext()

export const CurrentLocationProvaider = ({ children }) => {
    const [navHidden, setNavHidden] = useState(false)

    return (
        <currentLocationContext.Provider value={{navHidden, setNavHidden}}>
            { children }
        </currentLocationContext.Provider>
    )
}