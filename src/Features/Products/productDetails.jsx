import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../../Components/Loader"
import { useDispatch } from "react-redux"
import { ADDTOCART, REMOVEFROMCART } from "../Cart/cartslice"
 
export const ProductDetails = () => {
    let dispatch = useDispatch()
    let [productD, setproductD] = useState([])
    let { id } = useParams()

    useEffect(() => {
        async function dataApi() {
            let { data } = await axios.get(`https://dummyjson.com/products/${id}`)
            setproductD(data)
        }
        dataApi()
    }, [])

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    {
                        Object.keys(productD.length > 0) ?
                            <>
                                <div className="row shadow">
                                    <div className="col-8 p-4">
                                        <img src={productD.thumbnail} className="" style={{height:'500px',objectFit:'contain'}} alt="" />
                                    </div>
                                    <div className="col-4" style={{paddingTop:'125px'}}>
                                        <h1>{productD.title}</h1>
                                        <p>{productD.description}</p>
                                        <mark className="m-3">₹{productD.price}</mark> <b>Ratting:{productD.rating}</b>
                                        <br />
                                        <button className="btn btn-primary m-5" onClick={()=>dispatch(ADDTOCART({...productD,quantity:1}))}>Add to cart</button>
                                        <button className="btn btn-danger" onClick={()=>dispatch(REMOVEFROMCART(productD.id))}>Remove</button>
                                    </div>
                                </div>
                            </> :
                        <Loader />
                    }
                </div>
            </div>
        </>
    )
}