import { BrowserRouter,Routes,Route } from "react-router-dom";
import MedicineList from "./AdminComponents/MedicineList";
import About from "./AllUserComponents/About";
import Home from "./AllUserComponents/Home";
const Main=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin/medicines" element={<MedicineList/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Main;