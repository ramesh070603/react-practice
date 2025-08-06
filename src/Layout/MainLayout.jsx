import { useLocation } from "react-router-dom"
// import { Carosuel } from "../Components/Carosuel"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { AppRouter } from "../Routing/AppRouter"

export const MainLayout = () => {
    let location = useLocation()
    let hideLayout = ['/Home']
    let showLayout = hideLayout.includes(location.pathname.toLowerCase())
    return (
        <>
            <div className="container-Fluid">
                {!showLayout && <Header />}
                <AppRouter/>
                {!showLayout && <Footer />}
                {/* <Header/>
                <Carosuel/>
                <AppRouter/>
                <Footer/> */}
                {/* {!showLayout && <Header />}
                {!showLayout && <Carosuel/>}
                <AppRouter />
                {!showLayout && <Footer />} */}
            </div>
        </>
    )
}