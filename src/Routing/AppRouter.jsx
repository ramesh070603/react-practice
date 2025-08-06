import { Route, Routes } from "react-router-dom"
import { Home } from "../Pages/Home"
import { Products } from "../Pages/Products"
import { Cart } from "../Pages/Cart"
import { Authentication } from "../Pages/Authentication"
import { UserList } from "../Pages/UserList"
import { ProductDetails } from "../Features/Products/productDetails"
 

export const AppRouter = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id' element={<ProductDetails/>} />
            <Route path="/Cart" element={<Cart/>} /> 
            <Route path ="/authentication" element={<Authentication/>} />
            <Route path ="/userList" element={<UserList />} />
        </Routes>
        </>
    )
}