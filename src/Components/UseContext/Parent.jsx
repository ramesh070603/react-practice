import { createContext } from "react"
import { Child } from "./Child"
export const datacontext = createContext()
export const Parent = () => {
    
    return (
        <datacontext.Provider value={productdata}>
            <div className="container">
             
                    {/* {
                        productdata.map(item => (
                            <div className="col-3 g-4">
                                <Child
                                   
                                />
                            </div>
                        ))
                    } */}
                    <Child />
             
            </div>
        </datacontext.Provider>
    )
}