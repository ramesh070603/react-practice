import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginForm = () => {
    let navigate = useNavigate()

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    //Error Message

    let [errEmail, seterrEmail] = useState('')
    let [errPassword, seterrPassword] = useState('')

    function error() {
        let isValid = true

        if (email.length <= 0) {
            seterrEmail('Enter Your Email')
            isValid = false
        } else {
            seterrEmail('')
        }

        if (password.length <= 0) {
            seterrPassword('Enter Your Password')
            isValid = false
        } else {
            seterrPassword('')
        }
        if (isValid) {
            setTimeout(() => {
                navigate('/index')
            }, 2000);
        }
    }
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                    <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example3c">Your Email</label>
                                <input type="email" id="form3Example3c" className="form-control" onChange={(e) => {
                                    setEmail(e.target.value); seterrEmail('')
                                }}/>
                                <p className="text-danger">{errEmail}</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4c">Password</label>
                                <input type="password" id="form3Example4c" className="form-control" onChange={(e) => {
                                    setPassword(e.target.value); seterrPassword('')
                                }} />
                                <p className="text-danger">{errPassword}</p>
                            </div>
                        </div>

                        {/* <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                        </div> */}

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg" onClick={() => error()}>Login</button>
                        </div>

                    </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
                </div>
            </div>




            {/* <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">
                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <label className="form-label" for="typeEmailX">Email</label>
                                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                        <label className="form-label" for="typePasswordX">Password</label>
                                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">Don't have an account? <a href="http://localhost:5173/index" className="text-white-50 fw-bold ">Sign Up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}