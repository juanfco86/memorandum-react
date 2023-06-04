import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Movies from "../Pages/Movies"

const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </> 
    )
}

export default PublicRoutes