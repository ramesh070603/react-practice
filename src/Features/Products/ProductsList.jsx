import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const ProductsList = () => {

    let [productsData, setproductsData] = useState([])


    useEffect(() => {
        async function productsApi() {
            let { data } = await axios.get('https://dummyjson.com/products')
            setproductsData(data.products);
            console.log(data.products);


        }
        productsApi()
    }, [])

    return (
        <>
            <div className="container mt-4">
                <div className="row gx-4">
                    {
                        productsData.map(product => (
                            <div className="col-4">
                                <div className="card h-100 shadow">
                                <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} className='card-img-top' alt="..." style={{ height: "400px", objectFit: 'cover' }} />
                                </Link>
                                    <div className="card-title">
                                        <h5 className="card-text">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>

                                    </div>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}