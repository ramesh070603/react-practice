import { useDispatch, useSelector } from "react-redux"
import { DEC, INC, REMOVEFROMCART } from "../Features/Cart/cartslice"


export const Cart = () => {
    let cartValue = useSelector(state => state.cart)
    let dispatch =  useDispatch()
    
    return (
        <>
            <div className="container">
                {
                    cartValue.map(item =>(
                        <div className="row border border-secondary-light shadow rounded my-3 p-3">
                            <div className="col-8">
                                <img src={item.thumbnail} alt="Not Found" />
                            </div>
                            <div className="col-4">
                                <h1>{item.title}</h1>
                                <button className="btn btn-warning mx-3" onClick={()=>dispatch(INC(item.id))}>+</button>
                                <span className="fs-2">{item.quantity}</span>
                                <button className="btn btn-danger mx-3" onClick={()=>dispatch(DEC(item.id))}>-</button>
                                <button className="btn btn-danger mx-3" onClick={()=>dispatch(REMOVEFROMCART(item.id))}>Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

