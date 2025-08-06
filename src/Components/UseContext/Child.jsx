import { useContext } from "react"
import { datacontext } from "./Parent"


export const Child = () => {
    let childData = useContext(datacontext)
    return (
        <>
            
                <div className="row">
                    
                      
                    
                               {
                                childData.map(item => (
                                    <>
                                        <div className="card col-3">
                                            
                                                <img src={item.img} alt="not found" width={'100%'} height={'250px'} />
                                                <h1>{item.title}</h1>
                                                <mark>{item.price}</mark>
                                            
                                        </div>
                                    </>
                                ))
                            }
                       
                </div>
         
        </>
    )
}