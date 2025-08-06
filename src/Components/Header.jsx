import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Header = () => {
    let cartvalue = useSelector(state => state.cart)
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html"><img src="src\assets\images\VGP IT 2.png" alt="" height={'50px'} width={'120PX'}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Products</a> */}
                                    <Link className="nav-link active" aria-current="page" to='/products'>Products</Link>
                                </li>
                                {/* <li className="nav-item"> */}
                                    {/* <a className="nav-link active" aria-current="page" href="#">Carts</a> */}
                                    <Link className="nav-link active" aria-current="page" to='/cart'>Cart <sup>{cartvalue.length}</sup></Link>
                                {/* </li> */}
                               <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    {/* <Link className="nav-link active" aria-current="page" to='/'>Singup</Link> */}
                                </li> 
                                <li className="nav-item">
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                    <Link className="nav-link active" aria-current="page" to='/userList'>UserList</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success me-2" type="submit">Search</button>
                                <button className="btn btn-outline-primary" type="button">
                                    <Link className="nav-link active" aria-current="page" to='/authentication'>Singup</Link>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}