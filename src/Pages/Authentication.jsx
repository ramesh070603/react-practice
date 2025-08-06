import { useState } from "react"
import { LoginForm } from "../Features/Authentication/LoginFrom"
import { RegistrationForm } from "../Features/Authentication/Reigstration"
 
export const Authentication = () => {
    let [state,setstate] = useState(false)


    return (
        <>
            <section className="vh-100 mt-5">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="container">
                                            <button className="btn btn-outline-primary mx-3" onClick={()=>setstate(false)}>Signup</button>
                                            <button className="btn btn-outline-primary mx-3"onClick={()=>setstate(true)} >Login</button>
                                            {
                                                state ? <LoginForm/> : <RegistrationForm/>
                                            }
                                        </div>
                                       {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}