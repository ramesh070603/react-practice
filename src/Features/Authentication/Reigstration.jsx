import { useNavigate } from "react-router-dom"
import { useState } from "react"

export const RegistrationForm = () => {
    
    let navigate = useNavigate()

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [repeatP, setMobile] = useState('')

    //Error Message

    let [errName, seterrName] = useState('')
    let [errEmail, seterrEmail] = useState('')
    let [errPassword, seterrPassword] = useState('')
    let [errRepeatP, seterrMobile] = useState('')

 async   function error() {
        let isValid = true
        if (name.length <= 0) {
            seterrName('Enter Your Full Name')
            isValid = false
        } else {
            seterrName('')
        }

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

        if (password !== repeatP) {
            seterrMobile('Enter Your Mobile')
            isValid = false
        } else {
            seterrMobile('')
        }



        try {
            let userData = await axios.post('http://localhost:8080',{
                name:name,
                password:password,
                email:email,
                mobile:mobile           
            })

            setTimeout(()=>{
                navigate('/index')
            },2000)
        } catch (err) {
            console.log(err);
            
        }

        if (isValid) {
           
        }
    }



    
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example1c">Your Name</label>
                                <input type="text" id="form3Example1c" className="form-control"  onChange={(e) => {
                                    setName(e.target.value); seterrName('')
                                }} />
                                <p className="text-danger">{errName}</p>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example3c">Your Email</label>
                                <input type="email" id="form3Example3c" className="form-control" onChange={(e) => {
                                    setEmail(e.target.value); seterrEmail('')
                                }} />
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

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                <label className="form-label" for="form3Example4cd">Repeat Password</label>
                                <input type="password" id="form3Example4cd" className="form-control" onChange={(e) => {
                                    setMobile(e.target.value); seterrMobile('')
                                }} />
                                <p className="text-danger">{errRepeatP}</p>
                            </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" for="form2Example3">
                                I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-lg" onClick={() => error()}>Register</button>
                        </div>

                    </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />
                </div>
            </div>
            {/* Name:{name} <br />
            Email:{email} <br />
            Password:{password} <br /> */}
        </>
    )
}