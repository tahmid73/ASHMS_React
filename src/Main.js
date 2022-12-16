import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./AllUserComponents/Home";
const Main=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Main;