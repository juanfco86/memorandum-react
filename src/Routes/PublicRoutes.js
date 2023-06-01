import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Films from "../Pages/Films"

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/films" element={<Films />} />
            </Routes>
        </> 
    )
}

export default PublicRoutes