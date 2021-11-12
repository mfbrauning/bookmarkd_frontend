import Index from "../pages/Index"
import Show from "../pages/Show"
import { Route, Routes } from "react-router-dom"


function Main(props){
    return <div>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/bookmarks/:id" element={<Show/>}/>
        </Routes>
    </div>
}

export default Main