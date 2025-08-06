import { productdata } from "./product.js"
import { Child } from "./child.jsx"
 
export const Parentcomp = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                {
                    productdata.map(item =>(
                        <div className="col-3 g-4">
                            <Child 
                                img = {item.img}
                                title = {item.title}
                                price = {item.price} 
                            />                        
                        </div>
                    ))
                }            
            </div>   
        </div>        
        </>
    )
}